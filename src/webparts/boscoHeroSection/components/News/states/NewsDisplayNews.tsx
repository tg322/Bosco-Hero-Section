import * as React from 'react';
import NewsItem from '../components/NewsItem';
import { INewsProps } from '../../IBoscoHeroSectionProps';
import styles from '../../BoscoHeroSection.module.scss';

interface INewsDisplayNewsProps{
    news:INewsProps[];
}

function NewsDisplayNews(props:INewsDisplayNewsProps){

    const{
        news
    } = props

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

export default NewsDisplayNews
