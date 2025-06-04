import * as React from 'react';
import UserPhoto from './UserPhoto';
import { IUser } from '../IBoscoHeroSectionProps';
import styles from '../BoscoHeroSection.module.scss';

function UserWelcome(props:IUser){

    const{
        userInfo
    } = props

    return(
        <div className={`${styles.userWelcomeContainer}`}>
            <span className={`${styles.userWelcomeText}`}>Welcome {userInfo.firstName ? userInfo.firstName : ''}</span>
            <UserPhoto initials={userInfo.initials? userInfo.initials : ''} photo={userInfo.photo}/>
        </div>
    );
}

export default UserWelcome
