import * as React from 'react';
import { useEffect, useState } from 'react';
import { BuildResponseType, INewsProps } from '../IBoscoHeroSectionProps';
import NewsItem from './NewsItem';
import NewsItemSkeleton from './NewsItemSkeleton';
import { Spinner, SpinnerProps } from '@fluentui/react-components';
import styles from '../BoscoHeroSection.module.scss';
import { useServiceContext } from '../ServiceContext';
import { ArrowSyncFilled, NewsRegular } from '@fluentui/react-icons';


function News(spinnerProps:Partial<SpinnerProps>){

    const[news, setNews] = useState<Array<INewsProps> | null | false>(null);

    const{svc} = useServiceContext();
    
    async function getNews(){
        const response:BuildResponseType = await svc.getNews();
        if(response.success){
            setNews(response.data);
        }
    }

    function refreshNews(){
        setNews(null);
        getNews();
    }

    useEffect(()=>{
        getNews();
    },[]);

    if(news === null){
        return(
            <div className={`${styles.boscoSkeletonNewsContainer}`} id='newsContainerSkeleton'>
                <div className={`${styles.boscoNewsSkeletonSpinnerContainer}`}>
                    <Spinner {...spinnerProps} />
                </div>
                    <NewsItemSkeleton/>
                    <NewsItemSkeleton/>
                    <NewsItemSkeleton/>
                    <NewsItemSkeleton/>
            </div>
        );
    }else if(news === false){
        return(
            <div className={`${styles.boscoNoNewsContainer}`} id='newsContainerSkeleton'>
                <div style={{display:'flex', boxSizing:'border-box', gap:'15px', alignItems:'center'}}>
                        <NewsRegular style={{width:'30px', height:'auto'}}/><h3 className={`${styles.boscoNewsHeading}`}>No News, you're all caught up!</h3>
                </div>
                <div className={`${styles.boscoNoNewsRefreshButton}`} onClick={refreshNews}>
                        <ArrowSyncFilled style={{width:'20px', height:'auto'}}/><span className={`${styles.boscoNewsHeading}`}>Refresh</span>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={`${styles.boscoNewsContainer}`}>
                <div className={`${styles.boscoNewsHeadingAndSeeAllContainer}`}>
                    <h2 className={`${styles.boscoNewsHeading}`}>Weekly Reflections</h2>
                    <a href='https://boscocet.sharepoint.com/_layouts/15/news.aspx?title=Weekly%20Reflections' className={`${styles.boscoNewsSeeAllButton}`}>
                        <span>See All</span>
                    </a>
                </div>
               <div id='newsContainer' className={`${styles.boscoNewsItemsContainer}`}>
                    {news.map((newsItem:INewsProps, key:number)=>{
                        return(
                            <NewsItem key={key} newsItem={newsItem}/>
                        )
                    })}
                </div> 
            </div>
        );
    }
}

export default News