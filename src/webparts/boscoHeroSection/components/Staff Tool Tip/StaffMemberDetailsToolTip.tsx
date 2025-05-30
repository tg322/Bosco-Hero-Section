import * as React from 'react';
import { IUserProps } from './IStaffDirectoryProps';
import { Building20Regular, Call20Regular, Chat20Regular, Mail20Regular } from '@fluentui/react-icons';
import styles from './StaffToolTip.module.scss';
import { useEffect, useRef, useState } from 'react';
import ToolTipContactDetails from './ToolTipContactDetails';

interface IStaffMemberDetailsToolTip{
    user:IUserProps;
    overflowTop:number | null;
    leftOffset:string;
    show:boolean;
    userPhoto:string;
    photoBgColor:string;
}

function StaffMemberDetailsToolTip(props: IStaffMemberDetailsToolTip){
    const [topOffset, setTopOffset] = useState<string>('100%');

    const toolTipRef = useRef<HTMLDivElement>(null);

    const{
        user,
        leftOffset,
        overflowTop,
        show,
        userPhoto,
        photoBgColor
    } = props

    useEffect(()=>{
        if(show){
            if(toolTipRef.current){
                if(overflowTop && overflowTop < toolTipRef.current.clientHeight){
                    setTopOffset(`-${toolTipRef.current.clientHeight}px`);
                }
            }
        }
    },[show])

    function handleCallClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }
    function handleChatClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }
 
    return(
        <div ref={toolTipRef} className={styles.StaffDirectoryDetailsToolTipWrapper} style={{left:`${leftOffset}`, top:`${topOffset}`, paddingTop:`${topOffset === '100%' ? '10px' : '0px'}`, paddingBottom:`${topOffset === '100%' ? '0px' : '10px'}`}}>
            <div className={styles.StaffDirectoryDetailsToolTipContainer}>
                <div className={styles.StaffDirectoryDetailsToolTipDetailsWrapper}>
                    <div className={styles.StaffDirectoryDetailsToolTipStaffImage} style={{backgroundImage:`url(${userPhoto})`, backgroundSize:'contain', backgroundPosition:'center', justifyContent:'center', alignItems:'center', backgroundColor:`${photoBgColor}`}}>
                        {!userPhoto &&
                            <p style={{margin:'0px', fontSize:'20px', fontWeight:'600', color:'white'}}>{user.name[0] + user.name.charAt(user.name.indexOf(' ')+1)}</p>
                        }
                    </div>
                    <div className={styles.StaffDirectoryDetailsToolTipDetailsContainer}>
                        <p>{user.name}</p>
                        <p style={{textOverflow:'ellipsis', overflow:'hidden', textWrap:'wrap'}}>{user.jobTitle}</p>
                    </div>
                </div>
                <div className={styles.StaffDirectoryDetailsToolTipActionsContainer}>
                    <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} style={{cursor:'pointer'}} onClick={()=> handleChatClick()}>
                        <Chat20Regular style={{color:'#005670'}}/>
                    </a>
                    <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} href={`mailto:${user.email}`}>
                        <Mail20Regular style={{color:'#005670'}}/>
                    </a>
                    <a className={styles.StaffDirectoryDetailsToolTipActionsEmail} style={{cursor:'pointer'}} onClick={()=> handleCallClick()}>
                        <Call20Regular style={{color:'#005670'}}/>
                    </a>
                </div>
                <div className={styles.StaffDirectoryDetailsToolTipFurtherDetailsContainer}>

                    { (user.officeLocation || user.businessPhones.length > 0) &&
                    
                        <p style={{fontSize:'14px', margin:'5px 0px', fontWeight:'400'}}>Contact</p>
                    
                    }

                    {user.officeLocation && 
                    <div style={{display:'flex', flexDirection:'column'}}>
                        
                        <ToolTipContactDetails text={user.officeLocation} icon={<Building20Regular/>} iconColor='#005670'/>
                    </div>
                    }

                    {user.businessPhones && user.businessPhones.length > 0 && 
                    <div style={{display:'flex', flexDirection:'column'}}>
                        {user.businessPhones.map((phone:string, key:number) => (
                            <ToolTipContactDetails key={key} text={phone} icon={<Call20Regular/>} iconColor='#005670'/>
                        ))}
                    </div>
                    }
                    
                    {user.departments && user.departments.length > 0 &&
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <p style={{margin:'0px'}}>{user.departments.length > 1 ? 'Departments' : 'Department'}</p>
                        {user.departments.map((singleDepartment:string, key:number)=> (
                            <p style={{margin:'0px', fontSize:'12px'}} key={key}>{singleDepartment}</p>
                        ))}
                    </div>
                    }
                </div>
            </div>
        </div>
    );

}

export default StaffMemberDetailsToolTip