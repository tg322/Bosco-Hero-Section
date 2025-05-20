import { IBlobProps } from "../backgroundUpload/IBgUploadPropertyPaneProps";

export interface IBoscoHeroSectionProps {
  backgroundImage: IBlobProps;
  title:string;
  fullDateString: string;
}

export interface BuildResponseType {
    success: boolean;
    message: string;
    data?: any; 
    error?: any; 
}

export const dayStrings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export interface IUserWelcomeProps{
  userName:string;
  userPhoto?:string;
}

export interface IUserPhotoProps{
  userInitials:string;
  userPhoto?:string;
}