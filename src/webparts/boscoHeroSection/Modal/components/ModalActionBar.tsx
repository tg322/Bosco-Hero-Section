import * as React from 'react';
import { IModalActionBarProps } from '../IModalProps';
import styles from '../Modal.module.scss';

function ModalActionBar(props:IModalActionBarProps){

    const{
        children
    } = props

    return(
        <div className={`${styles.modalActionBar}`}>
            {children}
        </div>
    );
}

export default ModalActionBar