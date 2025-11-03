import React from 'react'
import { useUser } from '../util/contextapi.jsx'

const Key = ({data}) => {
    const type = data.type;
    const { lights, setLights } = useUser();
    console.log(type)
    switch(type){
        case "A":
            return(                
                <button className='bg-black rounded-md w-[50px] min-h-[50px] max-h-[50px]'><h3>{data.text}</h3></button>
            )
        case "B":
            return(
                <button className='flex flex-col justify-center bg-black rounded-md w-[50px] min-h-[50px] max-h-[50px] text-[14px]'><h3 className='mb-0.5'>{data.image}</h3><h3>{data.text}</h3></button>
            )
        case "C":
            return(
                <button className={`flex flex-col justify-end text-${data.pos} p-2 bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[12px] `}><h3>{data.image}</h3><h3>{data.text}</h3></button>
            )
        case "D":
            return(
                <button className={`flex flex-col justify-center bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[10px]  p-2`}><h3 className='mb-1 text-right'>{data.image}</h3><h3 className='mb-1'>{data.text}</h3></button>
            )
        case "E":
            return(
                <button className={`flex flex-col justify-center bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[10px]  p-2`}><h3 className='mb-1 text-left'>{data.image}</h3><h3 className='mb-1'>{data.text}</h3></button>
            )             
        case "power":
            return(
                <div className='bg-black p-1.5 rounded-md w-[50px] min-h-[50px] max-h-[50px]'>
                    <button onClick={() => {
                        setLights(prev=>(!prev))
                    }} className={`border ${lights ? "border-stone-600" : "text-neutral-700"} rounded-full w-full h-full`}></button>
                </div>
            )
        case "arrow":    
            return(
                <div className='flex flex-col justify-between ml-1 rounded-md w-[154px] min-h-[50px] max-h-[50px]'>
                    <div className='flex flex-row justify-center h-1/2'>
                        <button className='bg-black rounded-md w-[50px] min-h-6 max-h-6 text-[] text-[10px]'><h3>▲</h3></button>                        
                    </div>
                    <div className='flex flex-row justify-between h-1/2'>
                        <button className='bg-black rounded-md w-[50px] min-h-6 max-h-6 text-[10px]'><h3>◀</h3></button>
                        <button className='bg-black rounded-md w-[50px] min-h-6 max-h-6 text-[10px]'><h3>▼</h3></button>
                        <button className='bg-black rounded-md w-[50px] min-h-6 max-h-6 text-[10px]'><h3>▶</h3></button>
                    </div>
                </div>
            )
    }
}

export default Key