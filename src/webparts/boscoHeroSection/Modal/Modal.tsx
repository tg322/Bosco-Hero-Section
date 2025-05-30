import * as React from 'react';
import styles from './Modal.module.scss';
import { DismissRegular } from '@fluentui/react-icons';
import type { FluentIconsProps } from '@fluentui/react-icons';
import { type ReactElement}  from 'react';
import { useCalendarDispatchContext } from '../components/Calendar/CalendarContext';

type TitleIcon = 
  ReactElement<FluentIconsProps>

interface IModalProps{
  title:string;
  titleIcon?:TitleIcon;
  open:boolean;
  children:React.ReactNode;
}

function Modal(props: IModalProps){

  const{
    title,
    titleIcon,
    open,
    children
  } = props

  const{calendarDispatch} = useCalendarDispatchContext();

  function close(){
    calendarDispatch({type:'TOGGLE_MODAL',payload:false})
    calendarDispatch({type:'RESET_CALENDAR_EVENT'})
  }

  if(open){
    return(
      <div className={`${styles.modal}`}>
          <div className={`${styles.modalContainer}`}>
              <div className={`${styles.modalTopBar}`}>
                <div className={`${styles.modalTitle}`}>
                  {titleIcon}
                  <h1>{title}</h1>
                </div>
                <div className={`${styles.modalCloseButton}`} onClick={close}>
                  <DismissRegular className={`${styles.modalCloseButtonIcon}`}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                {children}
              </div>
          </div>
      </div>
    );
  }else{
    return(
      <></>
    );
  }
  
}

export default Modal