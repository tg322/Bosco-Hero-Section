import * as React from 'react';
import styles from '../UserCard.module.scss';
import { userColorArray } from './IUserCardProps';

interface IUserDetailsProps{
    name:string;
    jobTitle:string;
    userPhotoBgColor?:string;
}

function UserDetails(props:IUserDetailsProps){

    const{
        name,
        jobTitle
    } = props

    const userPhotoBgColor = userColorArray[Math.floor(Math.random() * userColorArray.length)]

    return(
        
            <div className={styles.UserDetailsContainer}>
                <div className={styles.UserProfileImage} style={{backgroundColor:`${userPhotoBgColor ? userPhotoBgColor : ''}`}}>
                    <p className={styles.UserProfileInitials}>{name[0] + name.charAt(name.lastIndexOf(' ')+1)}</p>
                </div>
                <div className={styles.UserNameJobTitleContainer}>
                    <h2>{name}</h2>
                    <h4>{jobTitle}</h4>
                </div>
            </div>
    );
}

export default UserDetails
