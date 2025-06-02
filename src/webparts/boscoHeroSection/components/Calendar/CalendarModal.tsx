import * as React from 'react';
import Modal from '../../Modal/Modal';
import { CalendarLtrRegular } from '@fluentui/react-icons';
import { useCalendarDispatchContext, useCalendarStateContext } from './CalendarContext';
import ModalContent from '../../Modal/components/ModalContent';
import { shortMonthStrings } from '../IBoscoHeroSectionProps';
import ModalActionBar from '../../Modal/components/ModalActionBar';
import { Button } from '@fluentui/react-components';

function CalendarModal(){

    const{calendarDispatch} = useCalendarDispatchContext();
    const{calendarState} = useCalendarStateContext();

    function close(){
        calendarDispatch({type:'TOGGLE_MODAL',payload:false})
        calendarDispatch({type:'RESET_CALENDAR_EVENT'})
    }

    if(calendarState.calendar){
        return(
            <Modal title='Event' size='small' titleIcon={<CalendarLtrRegular/>} open={calendarState.showModal} close={close}>
                <ModalContent>
                    <h2 style={{margin:'0px'}}>{shortMonthStrings[calendarState.calendar.startDate.getMonth()]}</h2>
                    <h2 style={{margin:'0px'}}>{calendarState.calendar.startDate.getDate()}</h2>
                    <h3 style={{margin:'0px', fontWeight:'400'}}>{calendarState.calendar.subject}</h3>
                </ModalContent>
                <ModalActionBar>
                    <Button appearance='primary' shape='rounded' onClick={close}> Close</Button>
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