import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

interface ITestModalProps{
    hoverElmRef:React.RefObject<HTMLDivElement>;
}

function TestModalHoverPos(props:ITestModalProps){

    const{
        hoverElmRef
    } = props

    const[top, setTop] = useState<string>('0');
    const[left, setleft] = useState<string>('0');

    const toolTipRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        //Ensure modal appears under hover element.
        if(hoverElmRef.current && toolTipRef.current){
            //Get hover element top and left position.

            //define final top/left vars
            let leftUnderHoverElm;
            let topUnderHoverElm;

            //Get hoverElement top/left values
            const hoverElmRect = hoverElmRef.current.getBoundingClientRect();
            const startTop = hoverElmRect.top;
            const startLeft = hoverElmRect.left;

            console.log({'top':startTop, 'left':startLeft});

            //Get tooltip top/left values
            const toolTipRect = toolTipRef.current.getBoundingClientRect();
            const actualTop = toolTipRect.top;
            const actualLeft = toolTipRect.left;

            console.log({'ATop':actualTop, 'ALeft':actualLeft});

            //If tooltip top/left is greater than hoverElm top/left, take hoverElm top/left from tooltip top/left, else do the reverse
            if(actualLeft > startLeft){
                leftUnderHoverElm = actualLeft - startLeft;
            }else{
                leftUnderHoverElm = startLeft - actualLeft;
            }
            if(actualTop > startTop){
                topUnderHoverElm = actualTop - startTop;
            }else{
                topUnderHoverElm =  startTop -  actualTop;
            }

            //if prop: topOffset = true...
            topUnderHoverElm = topUnderHoverElm + hoverElmRect.height;

            //Set starting top and left.
            setTop(`${topUnderHoverElm}`);
            setleft(`${leftUnderHoverElm}`);

        }
    },[])

    return(
        <div ref={toolTipRef} style={{display:'flex', flexDirection:'column', width:'350px', height:'256px', backgroundColor:'red', position:'absolute', top:`${top}px`, left:`${left}px`}}>

        </div>
    );
}

export default TestModalHoverPos
