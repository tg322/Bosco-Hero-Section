import * as React from 'react';
import styles from '../UserCard.module.scss';

interface IUserContactInfoContainer{
    children:React.ReactNode;
}

function UserInfoContainer(props: IUserContactInfoContainer){

    const{
        children
    } = props

    return(
        <div className={styles.UserInfoWrapper}>
            <div className={styles.UserInfoContainer}>
                {children}
            </div>
        </div>
    );

}

export default UserInfoContainer
