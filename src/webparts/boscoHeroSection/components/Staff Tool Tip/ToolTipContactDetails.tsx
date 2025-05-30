import * as React from 'react';

interface IToolTipContactDetailsProps{
    icon:React.ReactNode;
    text:string;
    iconColor:string;
}

function ToolTipContactDetails(props: IToolTipContactDetailsProps){

    const{
        icon,
        text,
        iconColor
    } = props

    return(
        <div style={{display:'flex', flexDirection:'row', gap:'5px'}}>
            <span style={{color:`${iconColor}`}}>
                {icon}
            </span>
            <p style={{margin:'0px', fontSize:'12px'}}>{text}</p>
        </div>
    )
}

export default ToolTipContactDetails