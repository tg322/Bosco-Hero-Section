import * as React from 'react';

function NewsItemSkeleton(){
    return(
        <div style={{display:'flex', flexDirection:'row', boxSizing:'border-box', width:'100%', height:'100px', backgroundColor:'#d9d9d975', textDecoration:'none', color:'inherit', borderRadius:'6px', overflow:'hidden'}}>
            <div id='newsThumbnailContainer' style={{height:'100%', width:'100px', display:'flex', backgroundColor:'#d9d9d975'}}>

            </div>
            
            <div id='newsContentContainer' style={{display:'flex', flexDirection:'column', padding:'15px', boxSizing:'border-box', justifyContent:'space-between'}}>
                <div style={{display:'flex', width:'140px', height:'20px', backgroundColor:'#d9d9d975'}}>

                </div>

                <div id='newsDetails' style={{width:'100%', display:'flex', flexDirection:'column', gap:'4px'}}>
                    <div style={{display:'flex', width:'110px', height:'10px', backgroundColor:'#d9d9d975'}}></div>
                </div>
            </div>
        </div>
    );
}

export default NewsItemSkeleton