import * as React from 'react';
import { IUserPhotoProps } from '../IBoscoHeroSectionProps';
import styles from '../BoscoHeroSection.module.scss';

function UserPhoto(props: IUserPhotoProps){

    const{
        photo,
        initials
    } = props


    if(photo){
        return(
            <div className={`${styles.userPhotoWithPhoto}`} style={{backgroundImage:`url(${photo})`}}>

            </div>
        );
    }else{
        return(
            <div className={`${styles.userPhotoInitialsContainer}`}>
                <p className={`${styles.userPhotoInitials}`}>{initials}</p>
            </div>
        );
    }

}

export default UserPhoto