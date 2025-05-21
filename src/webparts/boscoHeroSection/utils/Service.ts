import { WebPartContext } from "@microsoft/sp-webpart-base";
import { BuildResponseType } from "../components/IBoscoHeroSectionProps";
import { DataHandler, GraphDataHandler } from "./Helpers";
import { responseBuilder } from "./BuildResponse";
import { UtilFunctions } from "./UtilFuncs";



export class Service{
    constructor(
        private dataHandler: DataHandler,
        private graphHandler: GraphDataHandler,
        private util:UtilFunctions,
        private responseBuilder: responseBuilder
    ) {}

    public async checkSiteFolder(context:WebPartContext){

        const siteFolder:BuildResponseType = await this.dataHandler.checkFolderExistsInSP(context, window.location.origin, 'Shared Documents/'+context.manifest.alias, context.pageContext.site.id.toString());

        if(!siteFolder.success){
            return siteFolder
        }

        if(!siteFolder.data.value){
            const createFolderResponse:BuildResponseType = await this.dataHandler.createFolderInSP(context, window.location.origin, 'Shared Documents/'+context.manifest.alias, context.pageContext.site.id.toString());
            if(!createFolderResponse.success){
                return  createFolderResponse
            }
        }

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'Site folder has been initialised.')

        return response

    }

    public async checkMainFolder(context:WebPartContext){

        const mainFolder:BuildResponseType = await this.dataHandler.checkFolderExistsInSP(context, window.location.origin, 'Shared Documents', context.manifest.alias);
        
        if(!mainFolder.success){
            return mainFolder
        }
        if(!mainFolder.data.value){
            const mainFolderResponse:BuildResponseType = await this.dataHandler.createFolderInSP(context, window.location.origin, 'Shared Documents', context.manifest.alias);
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




}