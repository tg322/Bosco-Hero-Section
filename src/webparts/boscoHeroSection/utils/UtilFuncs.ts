import { BuildResponseType, dayStrings, INewsProps, IUserProps, monthStrings, News, User } from "../components/IBoscoHeroSectionProps";
import { responseBuilder } from "./BuildResponse";

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

    public prepareUserInfo(userData:any, userPhoto:string){

        const initials = userData.displayName[0] + userData.displayName.split(" ")[1][0]; //add exist check

        const userInfo:IUserProps = new User(userData.givenName, userData.displayName, initials, userData.id, userPhoto);

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'User data prepared successfully.', userInfo);

        return response
    }  
    
    public prepareNewsItems(newsData:any){
        const newsPages = newsData.filter((page:any) => page.promotionKind === 'newsPost');

        let newsArray:INewsProps[] = [];

        newsPages.forEach((news:any) => {
            newsArray.push(new News(news.title, news.createdDateTime, news.webUrl, news.thumbnailWebUrl, news.titleData[0].data.properties.authors[0].name))
        });

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'News prepared successfully.', newsArray)

        return response
    }

}