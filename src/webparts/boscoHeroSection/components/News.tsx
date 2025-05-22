import * as React from 'react';
import { useEffect, useState } from 'react';
import { Service } from '../utils/Service';
import { BuildResponseType, INewsProps } from './IBoscoHeroSectionProps';

interface INewsComponentProps{
    svc:Service;
}

function News(props:INewsComponentProps){

    const[news, setNews] = useState<Array<INewsProps>>();

    const{
        svc
    } = props

    async function getNews(){
        const response:BuildResponseType = await svc.getNews();
        if(response.success){
            setNews(response.data)
        }
    }

    useEffect(()=>{
        getNews();
    },[])

    useEffect(()=>{
        console.log(news);
    },[news])

    return(
        <div id='newsContainer' style={{display:'grid', gridTemplateColumns:'100%', gridTemplateRows:'auto', gap:'26px', width:'100%'}}>
            
        </div>
    );

}

export default News