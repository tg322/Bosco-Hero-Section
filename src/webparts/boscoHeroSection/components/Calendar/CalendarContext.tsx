// NavigationContextProvider.tsx
import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { ICalendarContextEventProps, ICalendarEventProps } from '../IBoscoHeroSectionProps';

//Define the interface for the useReducer, this is the state value so whatever you intend to put inside it will be the type, using a string array here.

interface CalendarState {
  calendar: ICalendarContextEventProps;
  showModal:boolean;
}

//The actions to be run, this still confuses me.

type Action =
  | { type: 'SET_CALENDAR_EVENT'; payload: ICalendarEventProps }
  | { type: 'RESET_CALENDAR_EVENT'; }
  | { type: 'TOGGLE_MODAL'; payload: boolean };

const initialState: CalendarState = { calendar: {calendarEvent:null}, showModal:false };


//Create the reducer function (I hate all the const functions wtf is this all about.)
const navigationReducer = (calendarState: CalendarState, action: Action): CalendarState => {

//Switch statement for actions and their... actions?
    switch (action.type) {
        case 'SET_CALENDAR_EVENT':
            return { ...calendarState, calendar: {calendarEvent:action.payload} };
        case 'RESET_CALENDAR_EVENT':
          return { ...calendarState, calendar: {calendarEvent:null} };
        case 'TOGGLE_MODAL':
            return { ...calendarState, showModal:action.payload };
        default:
            return calendarState;
    }
};

//Create the context function (Another one...)
const CalendarContext = createContext<{
    calendarState: CalendarState;
    calendarDispatch: React.Dispatch<Action>;
  } | undefined>(undefined);
  
//Create the context instance

  export const useCalendarContext = () => {
    const context = useContext(CalendarContext);
    if (!context) {
      throw new Error('useCalendarContext must be used within a CalendarProvider');
    }
    return context;
  };

  //Interface to give children a type of ReactNode (A JSX component) as any will cause sticky bugs later down the line.
  
  interface CalendarProviderProps {
    children: React.ReactNode;
  }

  //Create the localised context wrapper (All components wrapped by this component can access the context.)
  export const CalendarProvider: React.FC<CalendarProviderProps> = ({ children }) => {
    const [calendarState, calendarDispatch] = useReducer(navigationReducer, initialState);
  
    return (
      <CalendarContext.Provider value={{ calendarState, calendarDispatch }}>
        {children}
      </CalendarContext.Provider>
    );
  };
  