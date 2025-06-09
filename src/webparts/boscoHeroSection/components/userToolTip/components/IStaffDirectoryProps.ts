export interface ISDUserProps{
  id:string;
  name: string;
  jobTitle: string;
  departments:string[];
  companyName:string;
  email:string;
  businessPhones:string[];
  officeLocation:string;
}

export const userColorArray = ['#038387', '#e3008c', '#8764b8', '#0b6a0b', '#0078d4', '#a4262c', '#ca5010', '#750b1c', '#986f0b',  '#881798', '#498205', '#005b70', '#69797e']

export class User implements ISDUserProps{
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