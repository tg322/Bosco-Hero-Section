import * as React from 'react';
import { IModalContentProps } from '../IModalProps';

function ModalContent(props:IModalContentProps){

    const{
        children
    } = props

    return(
        <div style={{display:'flex', width:'100%', height:'100%', flexDirection:'column', flexGrow:'1'}}>
            {children}
        </div>
    );
}
export default ModalContent
