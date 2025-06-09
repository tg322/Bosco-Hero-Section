import * as React from 'react';
import styles from '../StaffToolTip.module.scss';


interface IUserContactDetailsProps{
    icon:React.ReactNode;
    text:string;
    iconColor:string;
}

function UserContactDetails(props:IUserContactDetailsProps){

    const{
        icon,
        text,
        iconColor
    } = props

    return(
        <div className={`${styles.userToolTipContactDetails}`}>
            <span style={{color:`${iconColor}`}}>
                {icon}
            </span>
            <p style={{margin:'0px', fontSize:'12px'}}>{text}</p>
        </div>
    );
}

export default UserContactDetails
