import * as React from 'react';
import styles from '../UserCard.module.scss';

interface IUserDetailsWrapperProps{
    children:React.ReactNode
}

function UserDetailsWrapper(props:IUserDetailsWrapperProps){

    const{
        children
    } = props

    return(
        <div className={styles.UserDetailsWrapper}>
            {children}
        </div>
    );
}

export default UserDetailsWrapper
