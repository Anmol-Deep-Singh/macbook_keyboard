import React from 'react'
import { useState } from 'react'
import { keys } from './keys'
import Key from './Key'
const Keyboard = () => {
    const[Lights,SetLights] = useState(0);
  return (
    <div className='flex flex-col justify-start items-center bg-[#272729] rounded-[42px] w-5xl h-[702px]'>
        <div className='bg-black mb-12 w-[820px] h-8'></div>
        <div className='flex flex-row justify-between items-center mb-2 w-full h-[342px]'>
            <div className='bg-[radial-gradient(circle,rgba(0,0,0,0.6)_1.3px,transparent_1px)] bg-linear-to-r from-[#1a1a1a] to-black w-[98px] h-[314px] bg-size-[8px_8px]'></div>
            <div className='flex flex-wrap gap-1 px-4 py-2 border border-black rounded-2xl w-[820px] h-full'>
                {keys.map((data, index) => (
                    <Key key={index} data={data} />
                ))}
            </div>
            <div className='bg-[radial-gradient(circle,rgba(0,0,0,0.6)_1.3px,transparent_1px)] bg-linear-to-r from-[#1a1a1a] to-black w-[98px] h-[314px] bg-size-[8px_8px]'></div>
        </div>
        <div className='mb-0.5 border-[#222224] border-2 rounded-2xl w-[410px] min-h-[255px] max-h-[255px]'></div>
        <div className='bg-linear-to-b from-black rounded-t-2xl w-[159px] min-h-[15px] max-h-[15px]'></div>
    </div>
  )
}

export default Keyboard