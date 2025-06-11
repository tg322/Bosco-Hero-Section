import * as React from 'react';
import styles from '../UserCard.module.scss';

interface IUserCardDepartments{
    departments:string[];
}

function UserCardDepartments(props:IUserCardDepartments){

    const{
        departments
    } = props
    
    return(
        <div className={styles.UserCardDepartments}>
            <p>{departments.length > 1 ? 'Departments' : 'Department'}</p>
            {departments.map((singleDepartment:string, key:number)=> (
                <span key={key}>{singleDepartment}</span>
            ))}
        </div>
    )
}

export default UserCardDepartments
