import * as React from 'react';
import { BuildResponseType, ICalendarEventProps } from '../IBoscoHeroSectionProps';
import { useEffect, useState } from 'react';
import { useServiceContext } from '../ServiceContext';
import CalendarDisplayEvents from './states/CalendarDisplayEvents';
import CalendarLoading from './states/CalendarLoading';
import CalendarNoEvents from './states/CalendarNoEvents';

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

    function refreshCalendar(){
        setCalendarEvents(null);
        getCalendarEvents();
    }

    useEffect(()=>{
        getCalendarEvents();
    },[])
    
    if(calendarEvents === null){
        return(
            <CalendarLoading/>
        );
    }else if(calendarEvents === false){
        return(
            <CalendarNoEvents refreshCalendar={refreshCalendar}/>
        );
    }else{
        return(
            <CalendarDisplayEvents calendarEvents={calendarEvents}/>
        );
    }
    
}
export default Calendar