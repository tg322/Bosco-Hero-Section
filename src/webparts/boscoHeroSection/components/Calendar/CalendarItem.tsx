import * as React from 'react';
import { ICalendarItemProps, shortMonthStrings } from '../IBoscoHeroSectionProps';
import styles from '../BoscoHeroSection.module.scss';
import { useCalendarDispatchContext } from './CalendarContext';

function CalendarItem(props:ICalendarItemProps){
    const{
        calendarEvent
    } = props

    const{calendarDispatch} = useCalendarDispatchContext();

    function openModal(){
        calendarDispatch({type:'SET_CALENDAR_EVENT', payload:calendarEvent})
        calendarDispatch({type:'TOGGLE_MODAL', payload:true})
    }

    return(
        <div className={`${styles.boscoCalendarItemContainer}`} onClick={openModal}>
            <div className={`${styles.boscoCalendarItemDateContainer}`}>
                <h3 className={`${styles.boscoCalendarItemDate}`}>{calendarEvent.startDate.getDate()} {shortMonthStrings[calendarEvent.startDate.getMonth()]}</h3>
            </div>
            
            <p className={`${styles.boscoCalendarItemSubject}`}>{calendarEvent.subject}</p>
            <p className={`${styles.boscoCalendarItemStartEndTime}`}>{calendarEvent.startTime} to {calendarEvent.endTime}</p>
        </div>
    );
}

export default CalendarItem