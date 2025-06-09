import { BuildResponseType, CalendarItem, dayStrings, ICalendarEventProps, INewsProps, IUserWelcomeProps, monthStrings, News, UserWelcome } from "../components/IBoscoHeroSectionProps";
import { User } from "../components/userToolTip/components/IStaffDirectoryProps";
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
    
    public buildDateString(today:Date):BuildResponseType{
        const date = today;
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

        const userInfo:IUserWelcomeProps = new UserWelcome(userData.givenName, userData.displayName, initials, userData.id, userPhoto);

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
        //In rare cases (New SharePoint Online Env), if there are no pages whatsoever, return false.
        if(newsData.length === 0){
            const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'No pages found.', false);
            return response
        }

        const newsPages = newsData.filter((page:any) => page.promotionKind === 'newsPost');


        //if filtering by 'newsPost' returns an empty array, return false
        if(newsPages.length === 0){
            const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'No News items found.', false);
            return response
        }

        const sortedPages = newsPages.sort((a:any,b:any)=>{
            return a.createdDateTime - b.createdDateTime
        });

        //A maximum of 4 News items to display on the screen, remove extras.
        if(sortedPages.length > 3){
            sortedPages.splice(4, sortedPages.length - 1);
        }

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'News items organised successfully.', sortedPages)

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

        const newsArray:INewsProps[] = [];

        newsData.forEach((news:any) => {
            const created = new Date(news.createdDateTime);

            //check if webpart header exists and author assigned, else default to createdBy user
            const authorName = news.titleDataResult?.[0]?.data?.properties?.authors?.[0]?.name ?? news.createdBy.user.displayName;
            const authorEmail = news.titleDataResult?.[0]?.data?.properties?.authors?.[0]?.email ?? news.createdBy.user.email;

            newsArray.push(new News(news.title, created, news.webUrl, news.thumbnailWebUrl, authorName, authorEmail));
        });

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'News prepared successfully.', newsArray)

        return response
    }

    /**
     * Takes raw calendar data and transforms into an array of CalendarItem objects.
     *
     * 
     * @param calendarItems - The raw calendar data.
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    public prepareCalendarEvents(calendarItems:any){

        if(calendarItems.length === 0){
            const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'No events found.', false);
            return response
        }

        const calendarItemsArray:ICalendarEventProps[] = [];

        const sortedCalendarItems = calendarItems.sort((a:any,b:any)=>{
            return a.start.dateTime - b.end.dateTime
        });

        sortedCalendarItems.forEach((calendarItem:any) => {

            const startDate = new Date(calendarItem.start.dateTime);

            const endDate = new Date(calendarItem.end.dateTime);

            const startTime = this.formatTime(startDate);

            const endTime = this.formatTime(endDate)

            calendarItemsArray.push(new CalendarItem(calendarItem.subject, startDate, endDate, startTime, endTime, calendarItem.webLink));
        });

        const response:BuildResponseType = this.responseBuilder.buildResponse(true, 'Calendar items prepared successfully.', calendarItemsArray);

        return response
    }

    /**
     * Takes raw calendar data and transforms into an array of CalendarItem objects.
     *
     * 
     * @param newsData - The newsData to organise.
     *
     * @returns Array e.g {success:true, message: 'Data retrieved.', data:{data}}
     *
     * @beta
     */

    private formatTime(date:Date):string{
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

        return `${hours}:${minutes}`
    }

    public prepareAuthorDetails(rawAuthorData:any){
        const authorDepartments = this.getDepartment(rawAuthorData.department);
        const authorDetails = new User(rawAuthorData.id,rawAuthorData.displayName, rawAuthorData.jobTitle? rawAuthorData.jobTitle : 'Unassigned', authorDepartments, rawAuthorData.companyName, rawAuthorData.mail, rawAuthorData.businessPhones, rawAuthorData.officeLocation)
        return this.responseBuilder.buildResponse(true, 'Success', authorDetails)
    }
    
    private getDepartment(userDepartment:string){
        if(userDepartment.indexOf(',') !== -1){
            let userDepartmentsArray = userDepartment.split(', ');
            return userDepartmentsArray
        }else{
            const departmentArray = [];
            departmentArray.push(userDepartment)
            return departmentArray
        }
    }

}