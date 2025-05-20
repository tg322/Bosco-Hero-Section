import * as React from 'react';
import styles from './BgUpload.module.scss';
// import { ITestProps } from './ITestProps';

function Modal(props: any){
  

  return(
    // main backround for modal
    <div className={`${styles.modal}`}>
        {/* modal box */}
        <div className={`${styles.modalContainer}`}>
            <h2>{props.titleAction}</h2>
            <p>{props.prompt}</p>
            <div className={`${styles.modalContainerInner}`}>
            <img className={`${styles.modalInnerHTMLImg}`} src={props.image} alt="Preview" />
            </div>
            <div className={`${styles.modalContainerButtons}`}>
                <button className={`${styles.deleteButton}`} onClick={props.action}>Delete</button>
                <button className={`${styles.cancelButton}`} onClick={props.closeModal}>Cancel</button>
            </div>
        </div>
        
    </div>
  );
}

export default Modal