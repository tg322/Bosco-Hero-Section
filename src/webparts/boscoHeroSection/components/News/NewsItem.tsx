import * as React from 'react';
import { INewsItemProps, shortMonthStrings } from '../IBoscoHeroSectionProps';

function NewsItem(props:INewsItemProps){

    const{
        newsItem
    }= props

    return(
    
        <a href={newsItem.url} target='_blank' style={{display:'flex', flexDirection:'row', boxSizing:'border-box', width:'100%', height:'100px', backgroundColor:'#d9d9d975', textDecoration:'none', color:'inherit'}}>
            <div id='newsThumbnailContainer' style={{height:'100%', width:'100px', display:'flex', backgroundImage:`url(${newsItem.thumbnail ? newsItem.thumbnail : ''})`, backgroundPosition:'center', backgroundSize:'cover'}}>

            </div>
            
            <div id='newsContentContainer' style={{display:'flex', flexDirection:'column', padding:'15px', boxSizing:'border-box', justifyContent:'space-between'}}>
                <h4 style={{margin:'0px'}}>{newsItem.title}</h4>

                <div id='newsDetails' style={{width:'100%', display:'flex', flexDirection:'column'}}>
                    <span style={{fontSize:'12px'}}>{newsItem.author} {shortMonthStrings[newsItem.created.getMonth()]} {newsItem.created.getDate()}</span>
                    <span style={{fontSize:'12px'}}>9 views</span>
                </div>
            </div>
        </a>
    );
}

export default NewsItem