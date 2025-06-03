import * as React from 'react';
import CalendarModal from '../components/CalendarModal';
import CalendarItem from '../components/CalendarItem';
import { ICalendarEventProps } from '../../IBoscoHeroSectionProps';
import styles from '../../BoscoHeroSection.module.scss';

interface ICalendarDisplayEventsProps{
    calendarEvents:ICalendarEventProps[];
}

function CalendarDisplayEvents(props:ICalendarDisplayEventsProps){

    const{
        calendarEvents
    } = props

    return(
        <>
            <div className={`${styles.boscoCalendarContainer}`}>
                <div className={`${styles.boscoCalendarTitleContainer}`}>
                    <h2 className={`${styles.boscoCalendarTitle}`}>Upcoming Events</h2>
                </div>
                <div className={`${styles.boscoCalendarItemsContainer}`}>
                    {calendarEvents.map((calendarEvent:ICalendarEventProps, key:number) => {
                        return(
                            <CalendarItem calendarEvent={calendarEvent} key={key}/>
                        )
                    })}
                </div>
            </div>
            <CalendarModal/>
        </>
    );
}

export default CalendarDisplayEvents