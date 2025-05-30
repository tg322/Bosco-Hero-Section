import * as React from "react";

export interface IModalTitleProps{
  title:string;
  titleIcon?:React.ReactNode;
}

export interface IModalContentProps{
    children:React.ReactNode;
}

export interface IModalActionBarProps{
    children:React.ReactNode;
}

export const ModalSize = {small:{min:400, max:600}, medium:{min:600, max:800}, large:{min:800, max:1200}}