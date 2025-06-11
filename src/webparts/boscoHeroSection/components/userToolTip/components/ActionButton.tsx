import * as React from 'react';
import styles from '../UserCard.module.scss';

interface IActionButtonProps{
    onClick:()=>void;
    icon:React.ReactNode;
}

function ActionButton(props:IActionButtonProps){

    const{
        onClick,
        icon
    } = props

    return(
        <a className={styles.UserCardActionButton} style={{cursor:'pointer'}} onClick={onClick}>
            <span style={{color:'#005670'}}>
                {icon}
            </span>
        </a>
    );
}

export default ActionButton