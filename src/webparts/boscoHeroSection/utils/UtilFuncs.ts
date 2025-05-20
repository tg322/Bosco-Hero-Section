import { WebPartContext } from "@microsoft/sp-webpart-base";
import { BuildResponseType, dayStrings, monthStrings } from "../components/IBoscoHeroSectionProps";
import { responseBuilder } from "./BuildResponse";
import { DataHandler } from "./Helpers";

export class UtilFunctions{

    private responseBuilder = new responseBuilder();
    
    public buildDateString():BuildResponseType{
        const date = new Date();
        const longDay = dayStrings[date.getDay()];
        const longMonth = monthStrings[date.getMonth()]
        const ordinal = this.getOrdinal(date.getDate())
        
        const fullDateString = `${longDay} ${date.getDate()}${ordinal} ${longMonth} ${date.getFullYear()}`

        const response = this.responseBuilder.buildResponse(true, 'Date returned successfully.', fullDateString);

        return response
    }

    private getOrdinal(n: number): string {
        if (n % 10 === 1 && n % 100 !== 11) return 'st';
        if (n % 10 === 2 && n % 100 !== 12) return 'nd';
        if (n % 10 === 3 && n % 100 !== 13) return 'rd';
        return 'th';
    }

    public async checkMainFolder(context:WebPartContext):Promise<BuildResponseType>{

        const dataHandler = new DataHandler();

        try{
            const mainFolder = await dataHandler.checkFolderExistsInSP(context, window.location.origin, 'Shared Documents', context.manifest.alias);
            if(mainFolder.success){
                if(!mainFolder.data.value){
                    try{
                        await dataHandler.createFolderInSP(context, window.location.origin, 'Shared Documents', context.manifest.alias);
                    }catch(error){
                        const response = this.responseBuilder.buildResponse(false, 'checkMainFolder was unable to create the main folder.',undefined, error);
                        return Promise.reject(response);
                    }
                }
            }
        }catch(error){
            const response = this.responseBuilder.buildResponse(false, 'checkSiteFolder was unable to check the existance of the site folder.',undefined, error);
            return Promise.reject(response);
        }

        const response = this.responseBuilder.buildResponse(true, 'Main folder has been initialised.');

        return Promise.resolve(response);

    }

    public async checkSiteFolder(context:WebPartContext):Promise<BuildResponseType>{

        const dataHandler = new DataHandler();

        try{
            const siteFolder = await dataHandler.checkFolderExistsInSP(context, window.location.origin, 'Shared Documents/'+context.manifest.alias, context.pageContext.site.id.toString());
            if(siteFolder.success){
                if(!siteFolder.data.value){
                    try{
                        await dataHandler.createFolderInSP(context, window.location.origin, 'Shared Documents/'+context.manifest.alias, context.pageContext.site.id.toString());
                    }catch(error){
                        const response = this.responseBuilder.buildResponse(false, 'checkSiteFolder was unable to create the site folder.',undefined, error);
                        return Promise.reject(response);
                    }
                }
            }
        }catch(error){
            const response = this.responseBuilder.buildResponse(false, 'checkSiteFolder was unable to check the existance of the site folder.',undefined, error);
            return Promise.reject(response);
        }

        const response = this.responseBuilder.buildResponse(true, 'Site folder has been initialised.');

        return Promise.resolve(response);

    }


}