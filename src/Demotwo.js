import React, { useRef } from 'react';
import './Demotwo.css';
import { useState } from 'react';


function Demotwo(){
    
//     const[datap, setdatap] = useState(0);

//    let i=0;

//     function addbtn(){
        
//          i++;
         
//          setdatap(i)
        
//     }
//     function minusbtn(){
       
//         i--;
       
//         setdatap(i)
//    }
    const value = useRef();
    const para = useRef();
    function click(){
        const refValue = value.current.value;
        console.log(refValue);
       
        para.current.innerText = refValue;
        // if(refValue>=4){
        //     console.log(value.current);
        //     value.current.style.border = '1px solid red';
        // }
        // else if(refValue<4){
        //     value.current.style.border = '1px solid green';
        // }

    }

    return(
        <div className="demo2 d-flex flex-column align-items-center justify-content-center">
           {/* <p className='demo-para text-center'>{datap}</p>
           <div className='w-100 d-flex flex-wrap justify-content-between'>
            <button className='btn btn-success' onClick={addbtn}>Add</button>
            <button className='btn btn-danger' onClick={minusbtn}>Minus</button>
           </div> */}
           <input ref={value} type="text" placeholder='input value' />
           <button className='btn btn-danger' onClick={click}>Click</button>
           <p ref={para}></p> 
           

        </div>
    )
}
export default Demotwo;