import * as React from 'react';

function Calendar(){

    return(
        <div id='calendarContainer' style={{display:'grid', gridTemplateColumns:'160px 160px 160px', gridTemplateRows:'160px 160px', gap:'10px'}}>
            <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'15px', width:'160px', height:'160px', backgroundColor:'#5a5a5a75', justifyContent:'space-between'}}>
            <div id='date' style={{display:'flex', flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'center'}}>
                <h2 style={{margin:'0px'}}>22 Jul</h2>
            </div>
            
            <p style={{margin:'0px', fontSize:'14px', fontWeight:'500'}}>DSL: Network Meeting</p>
            <p style={{margin:'0px', fontSize:'12px'}}>8:30 am to 9:30 am</p>
            </div>
            
        </div>

    );
}

export default Calendar