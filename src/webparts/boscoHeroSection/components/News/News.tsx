import * as React from 'react';
import { useEffect, useState } from 'react';
import { Service } from '../../utils/Service';
import { BuildResponseType, INewsProps } from '../IBoscoHeroSectionProps';
import NewsItem from './NewsItem';
import NewsItemSkeleton from './NewsItemSkeleton';
import { Spinner, SpinnerProps } from '@fluentui/react-components';
import styles from '../BoscoHeroSection.module.scss';

interface INewsComponentProps{
    svc:Service;
}

function News(props:INewsComponentProps, spinnerProps:Partial<SpinnerProps>){

    const[news, setNews] = useState<Array<INewsProps> | null>(null);

    let array = [1,2,3,4]

    const{
        svc
    } = props

    async function getNews(){
        const response:BuildResponseType = await svc.getNews();
        if(response.success){
            setNews(response.data);
        }
    }

    useEffect(()=>{
        getNews();
    },[]);

    if(!news){
        return(
            <div className={`${styles.boscoNewsContainerSkeleton}`} id='newsContainerSkeleton'>
                <div className={`${styles.boscoNewsSkeletonSpinnerContainer}`}>
                    <Spinner {...spinnerProps} />
                </div>
                {array.map((number:number, key:number) => {
                    return(
                        <NewsItemSkeleton key={key}/>
                    );
                })}
            </div>
        );
    }else{
        return(
            <div className={`${styles.boscoNewsContainer}`}>
                <div className={`${styles.boscoNewsHeadingAndSeeAllContainer}`}>
                    <h3 className={`${styles.boscoNewsHeading}`}>Weekly Reflections</h3>
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