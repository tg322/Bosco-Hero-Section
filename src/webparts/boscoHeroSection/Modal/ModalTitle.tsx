import * as React from 'react';
import {IModalTitleProps} from './IModalProps'
import styles from './Modal.module.scss';

function ModalTitle(props:IModalTitleProps){

    const{
        title,
        titleIcon
    } = props

    return(
        <div className={`${styles.modalTitle}`}>
            {titleIcon}
            <h1>{title}</h1>
        </div>
    );
}

export default ModalTitle