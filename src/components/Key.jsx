import React from 'react'

const Key = ({data}) => {
    const type = data.type;
    console.log(type)
    switch(type){
        case "A":
            return(                
                <button className='bg-black rounded-md w-[50px] min-h-[50px] max-h-[50px] text-white'><h3>{data.text}</h3></button>
            )
        case "B":
            return(
                <button className='flex flex-col justify-center bg-black rounded-md w-[50px] min-h-[50px] max-h-[50px] text-[14px] text-white'><h3 className='mb-0.5'>{data.image}</h3><h3>{data.text}</h3></button>
            )
        case "C":
            return(
                <button className={`flex flex-col justify-center bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[14px] text-white`}><h3>{data.image}</h3><h3>{data.text}</h3></button>
            )
        case "D":
            return(
                <button className={`flex flex-col justify-center bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[10px] text-white p-2`}><h3 className='mb-1 text-right'>{data.image}</h3><h3>{data.text}</h3></button>
            )
        case "E":
            return(
                <button className={`flex flex-col justify-center bg-black rounded-md ${data.w} min-h-[50px] max-h-[50px] text-[10px] text-white p-2`}><h3 className='mb-1 text-left'>{data.image}</h3><h3>{data.text}</h3></button>
            )             
        case "power":
            return(
                <div className='bg-black p-1.5 rounded-md w-[50px] min-h-[50px] max-h-[50px]'>
                    <button className='border border-red-600 rounded-full w-full h-full'></button>
                </div>
            )
    }
}

export default Key