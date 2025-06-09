import * as React from 'react';
import { Call20Regular, Chat20Regular, Mail20Regular } from '@fluentui/react-icons';
import styles from '../StaffToolTip.module.scss';

interface IToolTipActionsProps{
    email:string;
    handleChatClick:()=>void;
    handleCallClick:()=>void;
}

function ToolTipActions(props:IToolTipActionsProps){

    const{
        email,
        handleChatClick,
        handleCallClick
    } = props

    return(
        <div className={styles.StaffDirectoryDetailsToolTipActionsContainer}>
            <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} style={{cursor:'pointer'}} onClick={()=> handleChatClick()}>
                <Chat20Regular style={{color:'#005670'}}/>
            </a>
            <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} href={`mailto:${email}`}>
                <Mail20Regular style={{color:'#005670'}}/>
            </a>
            <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} style={{cursor:'pointer'}} onClick={()=> handleCallClick()}>
                <Call20Regular style={{color:'#005670'}}/>
            </a>
        </div>
    );
}

export default ToolTipActions
