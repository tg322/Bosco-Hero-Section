import * as React from 'react';
import UserToolTipContainer from './components/UserToolTipContainer';
import UserDetails from './components/UserDetails';
import { ISDUserProps } from './components/IStaffDirectoryProps';
import UserContactInfoContainer from './components/UserContactInfoContainer';
import UserContactDetails from './components/UserContactDetails';
import { Building20Regular, Call20Regular } from '@fluentui/react-icons';
import UserToolTipDepartments from './components/UserToolTipDepartments';
import UserToolTipActions from './components/UserToolTipActions';
import { useEffect, useState } from 'react';

interface IUserToolTipProps{
    user:ISDUserProps;
    hoverElmRef:React.RefObject<HTMLDivElement>;
    hover:boolean;
}

function UserToolTip(props:IUserToolTipProps){

    const{
        user,
        hoverElmRef,
        hover
    } = props

    const[overflowLeft, setOverflowLeft] = useState<string>('0');
    const[overflowTop, setOverflowTop] = useState<string>('0');

    function handleCallClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }
    function handleChatClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }

    function setToolTipHorizontalPosition(){
        if(hoverElmRef.current){
            const screenWidth:number = window.innerWidth;
            const leftOverflow = screenWidth - hoverElmRef.current.getBoundingClientRect().left;
            if(leftOverflow < 350){
                const hoverElmWidth = hoverElmRef.current.clientWidth;
                const alignRight = 350 - hoverElmWidth 
                setOverflowLeft(`-${alignRight}`)
            }
        }
    }

    function setToolTipTopPosition(){
        if(hoverElmRef.current){
            //Get height of viewport
            const screenHeight:number = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
                );

            //Get distance between bottom of hover element and bottom of viewport with bottom position of hover element minus height of the viewport.
            const bottomOverflow = screenHeight - hoverElmRef.current.getBoundingClientRect().bottom;

            //If the pixel space between bottom of hover element and bottom of viewport cannot fit the tooltip, set top overflow to position tooltip above hover element.
            if(bottomOverflow < 300){
                const hoverElmHeight = hoverElmRef.current.clientHeight;
                const alignTop = 256 + hoverElmHeight
                setOverflowTop(`-${alignTop}`)
            }
        }
    }

    useEffect(()=>{
        setToolTipHorizontalPosition();
        setToolTipTopPosition();
    }, []);

    return(
        <UserToolTipContainer overflowLeft={overflowLeft} overflowTop={overflowTop} hover={hover}>
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <UserDetails  name={user.name} jobTitle={user.jobTitle}/>
                <UserToolTipActions handleCallClick={handleCallClick} handleChatClick={handleChatClick} email={user.email}/>
            </div>
            <UserContactInfoContainer>
                {user.officeLocation && 
                    <UserContactDetails text={user.officeLocation} icon={<Building20Regular/>} iconColor='#005670'/>
                }
                
                {user.businessPhones && user.businessPhones.length > 0 && user.businessPhones.map((phone:string, key:number) => (
                    <UserContactDetails key={key} text={phone} icon={<Call20Regular/>} iconColor='#005670'/>
                ))}

                {user.departments && user.departments.length > 0 && 
                    <UserToolTipDepartments departments={user.departments}/>
                }
            </UserContactInfoContainer>
        </UserToolTipContainer>
    );
}

export default UserToolTip
