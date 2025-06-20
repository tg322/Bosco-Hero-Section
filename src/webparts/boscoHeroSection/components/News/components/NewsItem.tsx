import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';
import { BuildResponseType, INewsItemProps, shortMonthStrings } from '../../IBoscoHeroSectionProps';
import { useEffect, useRef, useState } from 'react';
import { useServiceContext } from '../../ServiceContext';
import newsFallback from '../../../assets/news-fallback-thumbnail.png';
import UserCard from '../../userToolTip/UserCard';
import { IUserCardUserProps } from '../../userToolTip/components/IUserCardProps';

function NewsItem(props:INewsItemProps){

    const{
        newsItem
    }= props

    const[hover, setHover] = useState<boolean>(false);

    const hoverElmRef = useRef<HTMLDivElement>(null);

    const[authorDetails, setAuthorDetails] = useState<IUserCardUserProps | null>(null);

    const{svc} = useServiceContext();

    async function getAuthorDetails(){
        const response:BuildResponseType = await svc.getNewsAuthorDetails(newsItem.authorEmail);
        if(!response.success){
            console.log(response);
        }else{
            setAuthorDetails(response.data);
        }
    }

    useEffect(()=>{
        getAuthorDetails();
    },[hover])

    function handleNewsClick(){
        window.open(newsItem.url, '_blank');
    }

    return(
    <div className={`${styles.boscoNewsItemWrapper}`} >
        <div className={`${styles.boscoNewsItemContainer}`} onClick={handleNewsClick} style={{cursor:'pointer'}}>
            <div id='newsThumbnailContainer' style={{height:'100%', width:'100px', display:'flex', backgroundImage:`url(${newsItem.thumbnail ? newsItem.thumbnail : newsFallback})`, backgroundPosition:'center', backgroundSize:'cover', borderRadius:'6px 0px 0px 6px'}}>

            </div>
            
            <div id='newsContentContainer' style={{display:'flex', flexDirection:'column', padding:'15px', boxSizing:'border-box', gap:'10px'}}>
                <h3 style={{margin:'0px'}}>{newsItem.title}</h3>

                <div ref={hoverElmRef} id='newsDetails' style={{width:'100%', display:'flex', flexDirection:'column', position:'relative'}} onMouseLeave={()=>setHover(false)}>
                    <span style={{fontSize:'12px'}} onMouseOver={()=>setHover(true)}>{newsItem.authorName} {shortMonthStrings[newsItem.created.getMonth()]} {newsItem.created.getDate()}</span>
                    {hover && authorDetails && <UserCard user={authorDetails} hoverElmRef={hoverElmRef} hover={hover}/>}
                </div>
            </div>
        </div>
    </div>
    );
}

export default NewsItem
