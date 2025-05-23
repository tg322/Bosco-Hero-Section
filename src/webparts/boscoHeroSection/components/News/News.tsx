import * as React from 'react';
import { useEffect, useState } from 'react';
import { Service } from '../../utils/Service';
import { BuildResponseType, INewsProps } from '../IBoscoHeroSectionProps';
import NewsItem from './NewsItem';

interface INewsComponentProps{
    svc:Service;
}

function News(props:INewsComponentProps){

    const[news, setNews] = useState<Array<INewsProps> | null>(null);

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
            <div id='newsContainerSkeleton' style={{display:'grid', gridTemplateColumns:'100%', gridTemplateRows:'auto', gap:'26px', width:'100%'}}>
                
            </div>
        );
    }else{
        return(
            <div id='newsContainer' style={{display:'grid', gridTemplateColumns:'100%', gridTemplateRows:'auto', gap:'26px', width:'100%'}}>
                {news.map((newsItem:INewsProps, key:number)=>{
                    return(
                        <NewsItem key={key} newsItem={newsItem}/>
                    )
                })}
            </div>
        );
    }
}

export default News