import * as React from 'react';
import Modal from '../../../Modal/Modal';
import { CalendarAddRegular, CalendarLtrRegular } from '@fluentui/react-icons';
import { useCalendarDispatchContext, useCalendarStateContext } from '../CalendarContext';
import ModalContent from '../../../Modal/components/ModalContent';
import { shortMonthStrings } from '../../IBoscoHeroSectionProps';
import ModalActionBar from '../../../Modal/components/ModalActionBar';
import { Button } from '@fluentui/react-components';
import styles from '../../BoscoHeroSection.module.scss';

function CalendarModal(){

    const{calendarDispatch} = useCalendarDispatchContext();
    const{calendarState} = useCalendarStateContext();

    function close(){
        calendarDispatch({type:'TOGGLE_MODAL',payload:false})
        calendarDispatch({type:'RESET_CALENDAR_EVENT'})
    }

    function handleAddToCal(){
        const addToCalUrl = `${calendarState.calendar?.webLink}`;
        window.open(addToCalUrl, '_blank');
    }

    if(calendarState.calendar){
        return(
            <Modal title='Event' size='small' titleIcon={<CalendarLtrRegular/>} open={calendarState.showModal} close={close}>
                <ModalContent>
                    <div className={`${styles.boscoCalendarModalContentContainer}`}>
                        <div className={`${styles.boscoCalendarModalDateContainer}`}>
                            <h2 style={{margin:'0px'}}>{shortMonthStrings[calendarState.calendar.startDate.getMonth()]} {calendarState.calendar.startDate.getDate()}</h2>
                        </div>
                        
                        <h3 style={{margin:'0px', fontWeight:'400'}}>{calendarState.calendar.subject}</h3>
                        <p className={`${styles.boscoCalendarItemStartEndTime}`}>{calendarState.calendar.startTime} to {calendarState.calendar.endTime}</p>
                    </div>
                </ModalContent>
                <ModalActionBar>
                    <Button appearance='primary' shape='rounded' onClick={close} style={{height:'fit-content'}}>Close</Button>
                    <button className={`${styles.boscoCalendarModalAddButton}`} onClick={handleAddToCal}>Add to calendar <CalendarAddRegular style={{width:'28px', height:'auto'}}/></button>
                </ModalActionBar>
            </Modal>
        );
    }else{
        return(
            <></>
        );
    }
}

export default CalendarModal