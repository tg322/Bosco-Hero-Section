import * as React from 'react'
import { ArrowSyncFilled, NewsRegular } from '@fluentui/react-icons';
import styles from '../../BoscoHeroSection.module.scss';

interface INewsNoNewsProps{
    refreshNews: ()=>void;
}

function NewsNoNews(props:INewsNoNewsProps){

    const{
        refreshNews
    } = props

    return(
        <div className={`${styles.boscoNoNewsContainer}`} id='newsContainerSkeleton'>
            <div style={{display:'flex', boxSizing:'border-box', gap:'15px', alignItems:'center'}}>
                    <NewsRegular style={{width:'30px', height:'auto'}}/><h3 className={`${styles.boscoNewsHeading}`}>No news, you're all caught up!</h3>
            </div>
            <div className={`${styles.boscoNoNewsRefreshButton}`} onClick={refreshNews}>
                    <ArrowSyncFilled style={{width:'20px', height:'auto'}}/><span className={`${styles.boscoNewsHeading}`}>Refresh</span>
            </div>
        </div>
    );
}

export default NewsNoNews