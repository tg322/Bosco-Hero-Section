import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { ICalendarEventProps } from '../IBoscoHeroSectionProps';

interface CalendarState {
  calendar: ICalendarEventProps | null;
  showModal:boolean;
}

//The type of actions and what they expect

type Action =
  | { type: 'SET_CALENDAR_EVENT'; payload: ICalendarEventProps }
  | { type: 'RESET_CALENDAR_EVENT'; }
  | { type: 'TOGGLE_MODAL'; payload: boolean };


const initialState: CalendarState = { calendar:null, showModal:false };

//Actions and how they interact with the state

const navigationReducer = (calendarState: CalendarState, action: Action): CalendarState => {

    switch (action.type) {
        case 'SET_CALENDAR_EVENT':
            return { ...calendarState, calendar:action.payload};
        case 'RESET_CALENDAR_EVENT':
          return { ...calendarState, calendar:null};
        case 'TOGGLE_MODAL':
            return { ...calendarState, showModal:action.payload };
        default:
            return calendarState;
    }
};

//Separate state and dispatch contexts, useful for components that only need state or dispatch, reducing re-renders

const CalendarStateContext = createContext<{
    calendarState: CalendarState;
  } | undefined>(undefined);

const CalendarDispatchContext = createContext<{
  calendarDispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const useCalendarStateContext = () => {
  const context = useContext(CalendarStateContext);
  if (!context) {
    throw new Error('useCalendarStateContext must be used within a CalendarProvider');
  }
  return context;
};

export const useCalendarDispatchContext = () => {
  const context = useContext(CalendarDispatchContext);
  if (!context) {
    throw new Error('useCalendarDispatchContext must be used within a CalendarProvider');
  }
  return context;
};

//interface to allow children of type ReactNode
  
  interface CalendarProviderProps {
    children: React.ReactNode;
  }

//returning the jsx and surrounding the children with the context providers

  export const CalendarProvider: React.FC<CalendarProviderProps> = ({ children }) => {
    const [calendarState, calendarDispatch] = useReducer(navigationReducer, initialState);
  
    return (
      <CalendarDispatchContext.Provider value={{ calendarDispatch }}>
        <CalendarStateContext.Provider value={{ calendarState }}>
          {children}
        </CalendarStateContext.Provider>
      </CalendarDispatchContext.Provider>
    );
  };
  