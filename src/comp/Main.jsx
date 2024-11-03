import React, { useState } from 'react'

function Main() {
    const [counter, setCounter] =useState(0);
    const [multipyer, setMultipyer] =useState(2);
    const [ total, setTotal]= useState( counter+multipyer)
    const increseCounter = ()=>{
        setCounter(counter+1)
    }
    const decCounter=()=>{
        
        if(counter<=0){
            alert("num cant be less than 0")
        }
        else{
            setCounter(counter-1)
        }
    
    }
    const incMultiplyer=()=>{
        setMultipyer(multipyer*2)
    }
    const decMultiplyer=()=>{
        setMultipyer(multipyer/2)
    }
    const findTotal=()=>{
        setTotal(counter+multipyer)
    }








  return (<>
    <div className=' flex justify-center'>
        <button className=' rounded-lg m-2 p-1  font-bold text-red-900  bg-red-100' onClick={increseCounter}>Increase</button>
        <div className='  m-4 p-2 text-lg'>{counter}</div>
        <button className=' rounded-lg m-2 p-1 font-bold text-red-900  bg-red-100' onClick={decCounter}>Decrease</button>

    </div>
    <div className='flex justify-center'>
        <button className='border m-2 p-4 bg-red-200 font-bold text-red-800' onClick={incMultiplyer}>multiply</button>
        <div className='border m-4 p-4 text-lg'>{multipyer}</div>
        <button className='border m-2 p-4 bg-red-200 font-bold text-red-800 ' onClick={decMultiplyer} > divide</button>
    </div>
    <button className='border m-2 p-4 bg-red-200 font-bold text-red-800 ' onClick={findTotal} > total</button>
    <p className=' flex border m-4 justify-center p-2'>value = {total}</p>
 </> )
}

export default Main