import * as React from 'react';

interface IUserToolTipDepartments{
    departments:string[];
}

function UserToolTipDepartments(props:IUserToolTipDepartments){

    const{
        departments
    } = props

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{margin:'0px'}}>{departments.length > 1 ? 'Departments' : 'Department'}</p>
            {departments.map((singleDepartment:string, key:number)=> (
                <p style={{margin:'0px', fontSize:'12px'}} key={key}>{singleDepartment}</p>
            ))}
        </div>
    )
}

export default UserToolTipDepartments
