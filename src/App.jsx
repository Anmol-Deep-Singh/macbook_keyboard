import React from 'react'
import { UserProvider } from './util/contextapi'
import Keyboard from './components/Keyboard'

function App(){
  return (
    <UserProvider>
      <div className='flex justify-center items-center bg-black w-full h-screen'>
        <Keyboard />
      </div>
    </UserProvider>
  )
}

export default App