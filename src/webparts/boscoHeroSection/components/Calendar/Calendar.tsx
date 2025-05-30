import * as React from 'react';
import CalendarItem from './CalendarItem';
import styles from '../BoscoHeroSection.module.scss';
import { CalendarLtrRegular } from '@fluentui/react-icons';
import Modal from '../../Modal/Modal';
import { BuildResponseType, ICalendarEventProps, shortMonthStrings } from '../IBoscoHeroSectionProps';
import { useEffect, useState } from 'react';
import { useServiceContext } from '../ServiceContext';
import { useCalendarStateContext } from './CalendarContext';
import ModalButtonBar from '../../Modal/ModalActionBar';

function Calendar(){

    const[calendarEvents, setCalendarEvents] = useState<Array<ICalendarEventProps> | null>(null);

    const {svc} = useServiceContext();
    const{calendarState} = useCalendarStateContext();

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
                <Modal title='Event' titleIcon={<CalendarLtrRegular/>} open={calendarState.showModal}>
                    {calendarState.calendar && 
                    <>
                        <h2>{calendarState.calendar.startDate.getDate()} {shortMonthStrings[calendarState.calendar.startDate.getMonth()]}</h2>
                        <h4>{calendarState.calendar.subject}</h4>
                        <ModalButtonBar/>
                    </>
                    }
                </Modal>
            </>
        );
    }
}
export default Calendar