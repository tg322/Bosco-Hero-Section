import * as React from 'react';
import { IUserPhotoProps } from './IBoscoHeroSectionProps';

function UserPhoto(props: IUserPhotoProps){

    const{
        userPhoto,
        userInitials
    } = props


    if(userPhoto){
        return(
            <div style={{display:'flex', width:'35px', height:'35px', borderRadius:'150px', backgroundImage:`url(${userPhoto})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
        );
    }else{
        return(
            <div style={{display:'flex', width:'35px', height:'35px', borderRadius:'150px', justifyContent:'center', alignItems:'center', border:'solid 1px white'}}>
                <p style={{margin:'0px', fontSize:'14px', fontWeight:'600', color:'white'}}>{userInitials}</p>
            </div>
        );
    }

}

export default UserPhoto