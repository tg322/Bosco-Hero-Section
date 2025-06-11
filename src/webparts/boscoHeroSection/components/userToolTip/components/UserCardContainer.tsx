import * as React from 'react';
import styles from '../UserCard.module.scss';
import { useEffect, useRef, useState } from 'react';

interface IUserToolTipContainerProps{
    children:React.ReactNode;
    overflowLeft:string;
    overflowTop:string;
    hover:boolean;
}

function UserToolTipContainer(props:IUserToolTipContainerProps){

    const{
        children,
        overflowLeft,
        overflowTop,
        hover
    } = props

    const tooltipTimeout = useRef<number | null>(null);

    const[showToolTip, setShowToolTip] = useState<boolean>(false);

    useEffect(() => {
        if (hover) {
            tooltipTimeout.current = window.setTimeout(() => {
            setShowToolTip(true);
            }, 600);
        } else {
            if (tooltipTimeout.current !== null) {
                clearTimeout(tooltipTimeout.current);
                tooltipTimeout.current = null;
            }
            setShowToolTip(false);
        }
    }, [hover]);

    if(showToolTip){
        return(
            <div className={styles.UserCardWrapper} style={{top:`${overflowTop}px`, left:`${overflowLeft}px`, paddingTop:`${overflowTop === '0' ? '25px' : '0px'}`, paddingBottom:`${overflowTop === '0' ? '0px' : '25px'}`, justifyContent:`${overflowTop === '0' ? 'flex-start' : 'flex-end'}`}} onClick={(e)=> e.stopPropagation()}>
                <div className={styles.UserCardContainer}>
                    {children}
                </div>
            </div>
        );
    }else{
        return(
            <></>
        );
    }
}

export default UserToolTipContainer
