import { WebPartContext } from "@microsoft/sp-webpart-base";
import { BuildResponseType, IPageWithWebPartPromise } from "../components/IBoscoHeroSectionProps";
import { DataHandler, GraphDataHandler } from "./Helpers";
import { responseBuilder } from "./BuildResponse";
import { UtilFunctions } from "./UtilFuncs";



export class Service{
    constructor(
        private dataHandler: DataHandler,
        private graphHandler: GraphDataHandler,
        private util:UtilFunctions,
        private responseBuilder: responseBuilder,
        private context: WebPartContext
    ) {}

    public async checkSiteFolder(){

        const siteFolder:BuildResponseType = await this.dataHandler.checkFolderExistsInSP(this.context, window.location.origin, 'Shared Documents/'+this.context.manifest.alias, this.context.pageContext.site.id.toString());

        if(!siteFolder.success){
            return siteFolder
        }

        if(!siteFolder.data.value){
            const createFolderResponse:BuildResponseType = await this.dataHandler.createFolderInSP(this.context, window.location.origin, 'Shared Documents/'+this.context.manifest.alias, this.context.pageContext.site.id.toString());
            if(!createFolderResponse.success){
                return  createFolderResponse
            }
        }

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'Site folder has been initialised.')

        return response

    }

    public async checkMainFolder(){

        const mainFolder:BuildResponseType = await this.dataHandler.checkFolderExistsInSP(this.context, window.location.origin, 'Shared Documents', this.context.manifest.alias);
        
        if(!mainFolder.success){
            return mainFolder
        }
        if(!mainFolder.data.value){
            const mainFolderResponse:BuildResponseType = await this.dataHandler.createFolderInSP(this.context, window.location.origin, 'Shared Documents', this.context.manifest.alias);
            if(!mainFolderResponse.success){
                return mainFolderResponse
            }
        }

        const response = this.responseBuilder.buildResponse(true, 'Main folder has been initialised.');

        return response

    }

    public async getMeInformation(filters?:string){

        const getMeInformationResponse:BuildResponseType = await this.graphHandler.getMe(filters);

        if(!getMeInformationResponse.success){
            return getMeInformationResponse
        }

        const getMePhotoResponse:BuildResponseType = await this.graphHandler.getUserPhoto(getMeInformationResponse.data.id);

        if(!getMePhotoResponse){
            return getMePhotoResponse
        }

        const preparedUserInfoResponse:BuildResponseType = this.util.prepareUserInfo(getMeInformationResponse.data, getMePhotoResponse.data);

        return preparedUserInfoResponse

    }

    public async getNews(){
        const getPagesResponse:BuildResponseType = await this.graphHandler.getSitePages(this.context.pageContext.site.id, "$orderby=lastModifiedDateTime desc&$top=20&$filter=name ne 'Home.aspx' and name ne 'Our-Schools.aspx' and name ne 'St-Wilfrid''s-Staff.aspx'");

        if(!getPagesResponse.success){
            return getPagesResponse
        }

        const pages = getPagesResponse.data.value;

        const pairs: IPageWithWebPartPromise[] = pages.map((currentPage:any) => ({
            page: currentPage,
            title: this.graphHandler.getSitePageWebparts(this.context.pageContext.site.id, currentPage.id)
        }));

        const result = await Promise.all(pairs.map(async ({page, title}) =>{
            const webpartData = await title;
            const titleData = webpartData.data.value.filter((webpart:any) => webpart.webPartType === 'cbe7b0a9-3504-44dd-a3a3-0e5cacd07788')
            
            return{
                ...page,
                titleData
            }

            
        }));

        const response:BuildResponseType = this.util.prepareNewsItems(result);

        return response
    }

    public getDate(){
        return this.util.buildDateString();
    }




}