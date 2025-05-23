import { BuildResponseType, dayStrings, INewsProps, IUserProps, monthStrings, News, User } from "../components/IBoscoHeroSectionProps";
import { responseBuilder } from "./BuildResponse";

export class UtilFunctions{

    private responseBuilder = new responseBuilder();

    /**
     * Fetches current date and converts it to a long date format.
     *
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     * 
     * @example 'Monday 12th May 2025'
     *
     * @beta
     */
    
    public buildDateString():BuildResponseType{
        const date = new Date();
        const longDay = dayStrings[date.getDay()];
        const longMonth = monthStrings[date.getMonth()]
        const ordinal = this.getOrdinal(date.getDate())
        
        const fullDateString = `${longDay} ${date.getDate()}${ordinal} ${longMonth} ${date.getFullYear()}`

        const response = this.responseBuilder.buildResponse(true, 'Date returned successfully.', fullDateString);

        return response
    }

    /**
     * Takes a date number and returns the corresponding date ordinal.
     *
     * 
     * @param dayOfMonth - The day number.
     *
     * @returns Ordinal: string
     * 
     * @example 'th'
     *
     * @beta
     */

    private getOrdinal(dayOfMonth: number): string {
        if (dayOfMonth % 10 === 1 && dayOfMonth % 100 !== 11) return 'st';
        if (dayOfMonth % 10 === 2 && dayOfMonth % 100 !== 12) return 'nd';
        if (dayOfMonth % 10 === 3 && dayOfMonth % 100 !== 13) return 'rd';
        return 'th';
    }

    /**
     * Takes raw user data, transforms and returns a User object.
     *
     * 
     * @param userData - The userData to transform.
     * 
     * @param userPhoto - The users photo url.
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    public prepareUserInfo(userData:any, userPhoto:string){

        const initials = userData.displayName[0] + userData.displayName.split(" ")[1][0]; //add exist check

        const userInfo:IUserProps = new User(userData.givenName, userData.displayName, initials, userData.id, userPhoto);

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'User data prepared successfully.', userInfo);

        return response
    }

    /**
     * Takes page data, filters the array down to only 'news posts' and reduces the array to a maximum of 4 items.
     *
     * 
     * @param newsData - The newsData to organise.
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    public organiseNewsItems(newsData:any){
        const newsPages = newsData.filter((page:any) => page.promotionKind === 'newsPost');

        const sortedPages = newsPages.sort((a:any,b:any)=>{
            return a.createdDateTime - b.createdDateTime
        });

        if(sortedPages.length > 3){
            sortedPages.splice(4, sortedPages.length - 1);
        }

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'News organised successfully.', sortedPages)

        return response
    }

    /**
     * Takes page data and transforms it into a News object.
     *
     * @remarks
     * This method is intended to be used after -> @function organiseNewsItems
     * 
     * @param newsData - The newsData to transform into News objects.
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */
    
    public prepareNewsItems(newsData:any){

        let newsArray:INewsProps[] = [];

        newsData.forEach((news:any) => {
            const created = new Date(news.createdDateTime);
            newsArray.push(new News(news.title, created, news.webUrl, news.thumbnailWebUrl, news.titleData[0].data.properties.authors[0].name))
        });

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'News prepared successfully.', newsArray)

        return response
    }

}