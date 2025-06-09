import * as React from 'react';
import styles from '../StaffToolTip.module.scss';

interface IUserContactInfoContainer{
    children:React.ReactNode;
}

function UserContactInfoContainer(props: IUserContactInfoContainer){

    const{
        children
    } = props

    return(
        <div className={styles.StaffDirectoryDetailsToolTipFurtherDetailsContainer}>
            {children}
        </div>
    );

}

export default UserContactInfoContainer
