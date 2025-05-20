import * as React from 'react';
import UserPhoto from './UserPhoto';
import { IUserWelcomeProps } from './IBoscoHeroSectionProps';

function UserWelcome(props:IUserWelcomeProps){

    return(
        <div id='userWelcomeContainer' style={{display:'flex', flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between', gap:'15px'}}>
            <span style={{fontSize:'18px', fontWeight:'500'}}>Welcome Tom</span>
            <UserPhoto userInitials='TG'/>
        </div>
    );
}

export default UserWelcome