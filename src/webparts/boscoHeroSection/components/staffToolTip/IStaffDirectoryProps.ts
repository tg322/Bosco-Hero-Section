import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IStaffDirectoryRootProps {
  context:WebPartContext;
  users:IUserProps[];
  departments:string[];
  departmentOrder:string[];
  organisation:string;
}

export interface IStaffDirectoryProps {
  context:WebPartContext;
  users:IUserProps[];
  departments:string[];
  departmentOrder:string[];
}

export interface userData{
  companyName:string;
  department:string;
  displayName:string;
  jobTitle:string;
  id:string;
  mail:string;
  businessPhones:string[];
  officeLocation:string;
}

export interface IUserProps{
  id:string;
  name: string;
  jobTitle: string;
  departments:string[];
  companyName:string;
  email:string;
  businessPhones:string[];
  officeLocation:string;
}

export class User implements IUserProps{
  constructor(
      public id:string,
      public name:string,
      public jobTitle: string,
      public departments: string[],
      public companyName:string,
      public email:string,
      public businessPhones:string[],
      public officeLocation:string
  ) { }
}

export interface IPrepareUsersResponseProps{
  users:IUserProps[];
  departments:string[];
}

export interface BuildResponseType {
    success: boolean;
    message: string;
    data?: any; 
    error?: any; 
}