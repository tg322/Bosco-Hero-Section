import { BuildResponseType } from "../components/IBoscoHeroSectionProps";

export class responseBuilder{

    /**
     * Builds a structured response for internal use.
     *
     * @remarks
     * Use this method to generate a structured response for general internal use.
     * 
     *
     * @param success - A boolean success value, true = successful, false = unsuccessful.
     * @param message - The message to return. 
     * @param data - Optional? The data to return.
     * @param error - Optional? The error to return.
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    buildResponse(success: boolean, message: string, data?: any, error?: any): BuildResponseType {
        return {
            success: success,
            message: message,
            data: data,
            error: error
        };
    }

}

