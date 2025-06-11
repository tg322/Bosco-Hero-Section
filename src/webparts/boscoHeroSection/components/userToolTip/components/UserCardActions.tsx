import * as React from 'react';
import { Call20Regular, Chat20Regular, Mail20Regular } from '@fluentui/react-icons';
import styles from '../UserCard.module.scss';
import ActionButton from './ActionButton';

interface IUserCardActionsProps{
    email:string;
}

function UserCardActions(props:IUserCardActionsProps){

    const{
        email
    } = props

    function handleCallClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(email)}`;
        window.open(teamsCallUrl, '_blank');
    }
    function handleChatClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(email)}`;
        window.open(teamsCallUrl, '_blank');
    }

    return(
        <div className={styles.UserCardActionsContainer}>
            <ActionButton onClick={()=> handleChatClick()} icon={<Chat20Regular/>}/>
            <ActionButton onClick={()=> handleChatClick()} icon={<Mail20Regular/>}/>
            <ActionButton onClick={()=> handleCallClick()} icon={<Call20Regular/>}/>
        </div>
    );
}

export default UserCardActions
