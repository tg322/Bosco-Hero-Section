import * as React from 'react';
import CalendarItem from './CalendarItem';
import styles from '../BoscoHeroSection.module.scss';
import { BuildResponseType, ICalendarEventProps } from '../IBoscoHeroSectionProps';
import { useEffect, useState } from 'react';
import { useServiceContext } from '../ServiceContext';
import CalendarModal from './CalendarModal'

function Calendar(){

    const[calendarEvents, setCalendarEvents] = useState<Array<ICalendarEventProps> | null | false>(null);

    const {svc} = useServiceContext();

    async function getCalendarEvents(){
        const response:BuildResponseType = await svc.getCalendar();
        if(!response.success){
            console.log(response);
        }else{
            setCalendarEvents(response.data);
        }
        
    }

    useEffect(()=>{
        getCalendarEvents();
    },[])
    if(!calendarEvents){
        return(
            <h1>Hello World</h1>
        );
    }else{
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
}
export default Calendar