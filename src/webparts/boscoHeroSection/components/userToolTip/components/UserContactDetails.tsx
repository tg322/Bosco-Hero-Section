import * as React from 'react';
import styles from '../UserCard.module.scss';


interface IUserContactDetailsProps{
    icon:React.ReactNode;
    text:string;
    iconColor:string;
    link?:string;
}

function UserContactDetails(props:IUserContactDetailsProps){

    const{
        icon,
        text,
        iconColor,
        link
    } = props

    if(link){
        return(
            <div className={`${styles.UserContactDetails}`}>
                <span style={{color:`${iconColor}`}}>
                    {icon}
                </span>
                <a href={`${link}`} target='_blank'>{text}</a>
            </div>
        )
    }
    else{
        return(
            <div className={`${styles.UserContactDetails}`}>
                <span style={{color:`${iconColor}`}}>
                    {icon}
                </span>
                <p>{text}</p>
            </div>
        );
    }
}

export default UserContactDetails
