import * as React from 'react';

function ModalButtonBar(){
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <button style={{backgroundColor:'#006f89', padding:'8px 20px', borderRadius:'4px', cursor: 'pointer', color:'white', fontWeight:'600', border:'none'}}>Close</button>
        </div>
    );
}

export default ModalButtonBar