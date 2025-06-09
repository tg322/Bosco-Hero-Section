import * as React from 'react';
import styles from '../StaffToolTip.module.scss';
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
            <div className={styles.StaffDirectoryDetailsToolTipWrapper} style={{top:`${overflowTop}px`, left:`${overflowLeft}px`, opacity:'1', color:'#323130', paddingTop:`${overflowTop === '0' ? '15px' : '0px'}`, cursor:'default', paddingBottom:`${overflowTop === '0' ? '0px' : '25px'}`}}>
                <div className={styles.StaffDirectoryDetailsToolTipContainer} style={{borderRadius:'4px'}}>
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
