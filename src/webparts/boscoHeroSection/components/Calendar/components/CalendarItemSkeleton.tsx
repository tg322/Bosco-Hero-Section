import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';

function CalendarItemSkeleton(){

    return(
        <div className={`${styles.boscoCalendarItemContainer}`}>
            <div className={`${styles.boscoCalendarItemDateContainer}`}>
                <div className={`${styles.boscoCalendarSkeletonDate}`}></div>
            </div>
            
            <div className={`${styles.boscoCalendarSkeletonSubject}`}></div>
            <div className={`${styles.boscoCalendarSkeletonTime}`}></div>
        </div>
    );
}

export default CalendarItemSkeleton