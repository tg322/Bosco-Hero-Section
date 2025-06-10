import * as React from 'react';
import styles from '../StaffToolTip.module.scss';
import { userColorArray } from './IStaffDirectoryProps';

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
        <div className={styles.StaffDirectoryDetailsToolTipDetailsWrapper}>
            <div className={styles.StaffDirectoryDetailsToolTipStaffImage} style={{backgroundSize:'contain', backgroundPosition:'center', justifyContent:'center', alignItems:'center', backgroundColor:`${userPhotoBgColor ? userPhotoBgColor : ''}`}}>
                <p style={{margin:'0px', fontSize:'20px', fontWeight:'600', color:'white'}}>{name[0] + name.charAt(name.indexOf(' ')+1)}</p>
            </div>
            <div className={styles.StaffDirectoryDetailsToolTipDetailsContainer}>
                <h3 style={{margin:'0px', textDecoration:'none'}}>{name}</h3>
                <p style={{textOverflow:'ellipsis', overflow:'hidden', textWrap:'wrap'}}>{jobTitle}</p>
            </div>
        </div>
    );
}

export default UserDetails
