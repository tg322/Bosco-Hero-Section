import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';
import CalendarItemSkeleton from '../components/CalendarItemSkeleton';
import { Spinner, SpinnerProps } from '@fluentui/react-components';

function CalendarLoading(spinnerProps:Partial <SpinnerProps>){

    return(
        <div className={`${styles.boscoCalendarContainer}`}>
            <div className={`${styles.boscoNewsSkeletonSpinnerContainer}`}>
                <Spinner {...spinnerProps} />
            </div>
            <div className={`${styles.boscoCalendarTitleContainer}`}>
                <h2 className={`${styles.boscoCalendarTitle}`}>Upcoming Events</h2>
            </div>
            <div className={`${styles.boscoCalendarItemsContainer}`}>
                <CalendarItemSkeleton/>
                <CalendarItemSkeleton/>
                <CalendarItemSkeleton/>
                <CalendarItemSkeleton/>
                <CalendarItemSkeleton/>
                <CalendarItemSkeleton/>
            </div>
        </div>  
    );
}

export default CalendarLoading