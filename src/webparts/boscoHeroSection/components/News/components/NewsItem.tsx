import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';
import { BuildResponseType, INewsItemProps, IUserProps, shortMonthStrings } from '../../IBoscoHeroSectionProps';
import { useState } from 'react';
import StaffMemberDetailsToolTip from '../../staffToolTip/StaffMemberDetailsToolTip';
import { useServiceContext } from '../../ServiceContext';

function NewsItem(props:INewsItemProps){

    const[hover, setHover] = useState<boolean>(true);
    const[authorDetails, setAuthorDetails] = useState<IUserProps>();

    const{
        newsItem
    }= props

    const{svc} = useServiceContext();

    async function getAuthorDetails(){
        const response:BuildResponseType = await svc.getNewsAuthorDetails(newsItem.authorEmail);
        if(!response.success){
            console.log(response)
        }else{
            setAuthorDetails(response.data);
        }
    }

    function onHover(){
        getAuthorDetails()
        setHover(true);
    }

    function outHover(){
        setHover(false);
    }

    return(
    
        <a className={`${styles.boscoNewsItemContainer}`} href={newsItem.url} target='_blank' >
            <div id='newsThumbnailContainer' style={{height:'100%', width:'100px', display:'flex', backgroundImage:`url(${newsItem.thumbnail ? newsItem.thumbnail : ''})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
            
            <div id='newsContentContainer' style={{display:'flex', flexDirection:'column', padding:'15px', boxSizing:'border-box', gap:'10px'}}>
                <h3 style={{margin:'0px'}}>{newsItem.title}</h3>

                <div id='newsDetails' style={{width:'100%', display:'flex', flexDirection:'column'}} onMouseEnter={onHover} onMouseLeave={outHover}>
                    <span style={{fontSize:'12px'}}>{newsItem.authorName} {shortMonthStrings[newsItem.created.getMonth()]} {newsItem.created.getDate()}</span>
                </div>
            </div>
            {hover && authorDetails && <StaffMemberDetailsToolTip user={authorDetails}/>}
        </a>
    );
}

export default NewsItem
