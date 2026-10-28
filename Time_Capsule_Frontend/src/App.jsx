import { Routes,Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './Header';
import LoginPage from './LoginPage';

function App() {
  return(
    <div className='flex flex-row items-center w-full h-screen p-5 bg-[#F8F5EE]'>
      <Header/>
      <div className='flex flex-col justify-center items-center w-full'>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </div>
    </div>

  )
}

export default App
