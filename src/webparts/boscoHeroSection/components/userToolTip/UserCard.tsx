import * as React from 'react';
import { IUserCardUserProps } from './components/IUserCardProps';
import { useEffect, useState } from 'react';
import UserCardContainer from './components/UserCardContainer';
import UserDetails from './components/UserDetails';
import UserInfoContainer from './components/UserInfoContainer';
import UserContactDetails from './components/UserContactDetails';
import UserCardDepartments from './components/UserCardDepartments';
import { Building20Regular, Call20Regular, Mail20Regular } from '@fluentui/react-icons';
import UserCardActions from './components/UserCardActions';
import UserDetailsWrapper from './components/UserDetailsWrapper';

interface IUserCardProps{
    user:IUserCardUserProps;
    hoverElmRef:React.RefObject<HTMLDivElement>;
    hover:boolean;
}

function UserCard(props:IUserCardProps){

    const{
        user,
        hoverElmRef,
        hover
    } = props

    const[overflowLeft, setOverflowLeft] = useState<string>('0');
    const[overflowTop, setOverflowTop] = useState<string>('0');

    function setToolTipHorizontalPosition(){
        if(hoverElmRef.current){
            //Get total screen width
            const screenWidth:number = window.innerWidth;
            //Calculate pixels between right side (end) of screen and left side of 
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
                const alignTop = 276 + hoverElmHeight
                setOverflowTop(`-${alignTop}`)
            }
        }
    }

    useEffect(()=>{
        setToolTipHorizontalPosition();
        setToolTipTopPosition();
    }, []);

    return(
        <UserCardContainer overflowLeft={overflowLeft} overflowTop={overflowTop} hover={hover}>
            <UserDetailsWrapper>
                <UserDetails name={user.name} jobTitle={user.jobTitle}/>
                <UserCardActions email={user.email}/>
            </UserDetailsWrapper>
            <UserInfoContainer>
                {user.email && 
                    <UserContactDetails text={user.email} icon={<Mail20Regular/>} iconColor='#005670' link={`mainto:${user.email}`}/>
                }

                {user.officeLocation && 
                    <UserContactDetails text={user.officeLocation} icon={<Building20Regular/>} iconColor='#005670'/>
                }
                
                {user.businessPhones && user.businessPhones.length > 0 && user.businessPhones.map((phone:string, key:number) => (
                    <UserContactDetails key={key} text={phone} icon={<Call20Regular/>} iconColor='#005670'/>
                ))}

                {user.departments && user.departments.length > 0 && 
                    <UserCardDepartments departments={user.departments}/>
                }
            </UserInfoContainer>
        </UserCardContainer>
    );
}

export default UserCard
