import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';
import { ArrowSyncFilled, CalendarLtrRegular } from '@fluentui/react-icons';

interface ICalendarNoEventsProps{
    refreshCalendar:()=>void;
}

function CalendarNoEvents(props:ICalendarNoEventsProps){

    const{
        refreshCalendar
    } = props

    return(
        <div className={`${styles.boscoCalendarContainer}`} style={{height:'100%'}}>
            <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%', alignItems:'center', justifyContent:'flex-end', gap:'20px'}}>
                <div style={{display:'flex', boxSizing:'border-box', gap:'15px', alignItems:'center'}}>
                        <CalendarLtrRegular style={{width:'30px', height:'auto'}}/><h3 className={`${styles.boscoNewsHeading}`}>No events, you're all caught up!</h3>
                </div>
                <div className={`${styles.boscoNoNewsRefreshButton}`} onClick={refreshCalendar}>
                        <ArrowSyncFilled style={{width:'20px', height:'auto'}}/><span className={`${styles.boscoNewsHeading}`}>Refresh</span>
                </div>
            </div>
        </div>  
    );
}

export default CalendarNoEvents