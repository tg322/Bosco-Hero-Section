import * as React from 'react'
import { Spinner, SpinnerProps } from '@fluentui/react-components';
import styles from '../../BoscoHeroSection.module.scss';
import NewsItemSkeleton from '../components/NewsItemSkeleton';


function NewsLoading(spinnerProps:Partial<SpinnerProps>){
    return(
        <div className={`${styles.boscoSkeletonNewsContainer}`} id='newsContainerSkeleton'>
            <div className={`${styles.boscoNewsSkeletonSpinnerContainer}`}>
                <Spinner {...spinnerProps} />
            </div>
                <NewsItemSkeleton/>
                <NewsItemSkeleton/>
                <NewsItemSkeleton/>
                <NewsItemSkeleton/>
        </div>
    );
}

export default NewsLoading