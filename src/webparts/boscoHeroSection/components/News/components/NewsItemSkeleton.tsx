import * as React from 'react';
import styles from '../../BoscoHeroSection.module.scss';

function NewsItemSkeleton(){
    return(
        <div className={`${styles.boscoSkeletonNewsItemContainer}`}>
            <div className={`${styles.boscoSkeletonNewsItemThumbnail}`}>

            </div>
            
            <div className={`${styles.boscoSkeletonNewsItemContentContainer}`}>
                <div className={`${styles.boscoSkeletonNewsItemTitle}`}>

                </div>

                <div className={`${styles.boscoSkeletonNewsItemDetailsContainer}`}>
                    <div className={`${styles.boscoSkeletonNewsItemDetails}`}></div>
                </div>
            </div>
        </div>
    );
}

export default NewsItemSkeleton
