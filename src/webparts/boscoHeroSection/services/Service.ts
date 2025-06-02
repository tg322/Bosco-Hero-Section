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

    /**
     * Reserved for BackgroundUpload Custom Property.
     * Checks for the existance of the site folder where background images will be stored, if no folder is found, one is created.
     *
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     * 
     * @beta
     */

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

        const organisedPages:BuildResponseType = this.util.organiseNewsItems(getPagesResponse.data.value);

        const pages = organisedPages.data;

        if(!pages){
            return organisedPages
        }

        const pairs: IPageWithWebPartPromise[] = pages.map((currentPage:any) => ({
            page: currentPage,
            title: this.graphHandler.getSitePageWebparts(this.context.pageContext.site.id, currentPage.id)
        }));

        // actual id 'cbe7b0a9-3504-44dd-a3a3-0e5cacd07788'
        // is searching by webpart id the best option here? Should I just select the top most webpart?

        const result = await Promise.all(pairs.map(async ({page, title}) =>{
            const webpartData = await title;
            const titleData = webpartData.data.value.filter((webpart:any) => webpart.webPartType === 'cbe7b0a9-3504-44dd-a3a3-0e5cacd07788');
            const titleDataResult = titleData ? titleData : null;

            return{
                ...page,
                titleDataResult
            }
            
        }));

        const response:BuildResponseType = this.util.prepareNewsItems(result);

        return response
    }

    public getDate(){
        return this.util.buildDateString();
    }

    //1d3d56b6-30ac-4a22-8586-c9537b2b7cea

    public async getCalendar(){
        const today = new Date();
        const newDate = new Date(new Date(today.toDateString()).setMonth(today.getMonth() + 1));
        const getCalendarItemsResponse:BuildResponseType = await this.graphHandler.getCalendarItems('1d3d56b6-30af-4a22-8586-c9537b2b7cea', today.toDateString(), newDate.toDateString(), 6);

        if(!getCalendarItemsResponse.success){
            return getCalendarItemsResponse
        }

        const prepareCalendarEventsResponse:BuildResponseType = this.util.prepareCalendarEvents(getCalendarItemsResponse.data.value);

        return prepareCalendarEventsResponse
    }

    public async getNewsAuthorDetails(email:string){
        const getUsersResponse:BuildResponseType = await this.graphHandler.getUsers(`$filter=mail eq '${email}'&$select=id,displayName,department,companyName,jobTitle,officeLocation,mail,businessPhones`);

        if(!getUsersResponse.success){
            return getUsersResponse
        }

        return getUsersResponse
    }



}