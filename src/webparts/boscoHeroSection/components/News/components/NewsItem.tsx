import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';
import { INewsItemProps, shortMonthStrings } from '../../IBoscoHeroSectionProps';

function NewsItem(props:INewsItemProps){

    const{
        newsItem
    }= props

    return(
    
        <a className={`${styles.boscoNewsItemContainer}`} href={newsItem.url} target='_blank'>
            <div id='newsThumbnailContainer' style={{height:'100%', width:'100px', display:'flex', backgroundImage:`url(${newsItem.thumbnail ? newsItem.thumbnail : ''})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
            
            <div id='newsContentContainer' style={{display:'flex', flexDirection:'column', padding:'15px', boxSizing:'border-box', gap:'10px'}}>
                <h3 style={{margin:'0px'}}>{newsItem.title}</h3>

                <div id='newsDetails' style={{width:'100%', display:'flex', flexDirection:'column'}}>
                    <span style={{fontSize:'12px'}}>{newsItem.authorName} {shortMonthStrings[newsItem.created.getMonth()]} {newsItem.created.getDate()}</span>
                </div>
            </div>
        </a>
    );
}

export default NewsItem