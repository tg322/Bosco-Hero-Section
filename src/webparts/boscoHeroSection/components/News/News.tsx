import * as React from 'react';
import { useEffect, useState } from 'react';
import { BuildResponseType, INewsProps } from '../IBoscoHeroSectionProps';
import { useServiceContext } from '../ServiceContext';

import NewsLoading from './states/NewsLoading';
import NewsNoNews from './states/NewsNoNews';
import NewsDisplayNews from './states/NewsDisplayNews';


function News(){

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
            <NewsLoading/>
        );
    }else if(news === false){
        return(
            <NewsNoNews refreshNews={refreshNews}/>
        );
    }
    else{
        return(
            <NewsDisplayNews news={news} />
        );
    }
}

export default News