import { IBlobProps } from "../backgroundUpload/IBgUploadPropertyPaneProps";
import { Service } from "../utils/Service";

export interface IBoscoHeroSectionProps {
  backgroundImage: IBlobProps;
  title:string;
  fullDateString: string;
  userInfo: IUserProps;
  svc:Service;
}

export interface BuildResponseType {
    success: boolean;
    message: string;
    data?: any; 
    error?: any; 
}

export const dayStrings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const shortDayStrings = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

export const monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const shortMonthStrings = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

export interface IUserProps{
  firstName:string;
  fullName:string;
  initials:string;
  id:string;
  photo?:string;
}

export interface IUser{
  userInfo:IUserProps
}

export interface IUserPhotoProps{
  initials:string;
  photo?:string;
}

export class User implements IUserProps{
  constructor(
    public firstName:string,
    public fullName:string,
    public initials:string,
    public id:string,
    public photo:string
  ) {}
}

export interface IPageWithWebPartPromise{
  page:any;
  title:Promise<any>
}

export interface INewsProps{
  title:string;
  created:Date;
  url:string;
  thumbnail:string;
  author:string;
}

export interface INewsItemProps{
  newsItem:INewsProps;
}

export class News implements INewsProps{
  constructor(
    public title:string,
    public created:Date,
    public url:string,
    public thumbnail:string,
    public author:string
  ){}
}