import * as React from 'react';
import { ISDUserProps } from '../userToolTip/components/IStaffDirectoryProps';
import { Building20Regular, Call20Regular } from '@fluentui/react-icons';
import styles from './StaffToolTip.module.scss';
import ToolTipContactDetails from './components/ToolTipContactDetails';
import ToolTipActions from './components/ToolTipActions';

interface IStaffMemberDetailsToolTip{
    user:ISDUserProps;
    overflowLeft:number;
}

function StaffMemberDetailsToolTip(props: IStaffMemberDetailsToolTip){

    const{
        user,
        overflowLeft
    } = props

    function handleCallClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }
    function handleChatClick(){
        const teamsCallUrl = `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(user.email)}`;
        window.open(teamsCallUrl, '_blank');
    }

    console.log(overflowLeft);
 
    return(
        <div className={styles.StaffDirectoryDetailsToolTipWrapper} style={{top:'100px', left:'0', opacity:'1', color:'GrayText', paddingTop:'10px'}}>
            <div className={styles.StaffDirectoryDetailsToolTipContainer} style={{opacity:'1'}}>
                <div className={styles.StaffDirectoryDetailsToolTipDetailsWrapper}>
                    <div className={styles.StaffDirectoryDetailsToolTipStaffImage} style={{backgroundSize:'contain', backgroundPosition:'center', justifyContent:'center', alignItems:'center', backgroundColor:'darkblue'}}>
                        <p style={{margin:'0px', fontSize:'20px', fontWeight:'600', color:'white'}}>{user.name[0] + user.name.charAt(user.name.indexOf(' ')+1)}</p>
                    </div>
                    <div className={styles.StaffDirectoryDetailsToolTipDetailsContainer}>
                        <p>{user.name}</p>
                        <p style={{textOverflow:'ellipsis', overflow:'hidden', textWrap:'wrap'}}>{user.jobTitle}</p>
                    </div>
                </div>
                <ToolTipActions email={user.email} handleCallClick={handleCallClick} handleChatClick={handleChatClick}/>
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
