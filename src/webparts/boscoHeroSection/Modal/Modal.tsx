import * as React from 'react';
import styles from './Modal.module.scss';
import { DismissRegular } from '@fluentui/react-icons';
import ModalTitle from './ModalTitle';
import { IModalActionBarProps, IModalContentProps, ModalSize } from './IModalProps';
import ModalContent from './ModalContent';
import ModalActionBar from './ModalActionBar';

type ModalContentComponent = React.ReactElement<IModalContentProps, typeof ModalContent>;
type ModalActionBarComponent = React.ReactElement<IModalActionBarProps, typeof ModalActionBar>

type ModalChildren = ModalContentComponent | [ModalContentComponent , ModalActionBarComponent] 

type ModalSize = 'small' | 'medium' | 'large'

interface IModalProps{
  open:boolean;
  children:ModalChildren;
  title:string;
  close:()=>void;
  titleIcon?: React.ReactNode;
  size:ModalSize;
}

function Modal(props: IModalProps){

  const{
    open,
    children,
    title,
    close,
    titleIcon,
    size
  } = props

  if(open){
    return(
      <div className={`${styles.modal}`}>
          <div className={`${styles.modalContainer}`} style={{minWidth:`${ModalSize[size].min}px`, maxWidth:`${ModalSize[size].max}px`}}>
              <div className={`${styles.modalTopBar}`}>
                <ModalTitle title={title} titleIcon={titleIcon}/>
                <div className={`${styles.modalCloseButton}`} onClick={close}>
                  <DismissRegular className={`${styles.modalCloseButtonIcon}`}/>
                </div>
              </div>
              <div className={`${styles.modalContentWrapper}`}>
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