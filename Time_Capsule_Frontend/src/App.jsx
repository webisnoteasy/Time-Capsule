import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Sign_Up from './Sign_Up'
import { useState } from 'react';
import ViewPort from './ViewPort';
import Header from './Header';

function App() {
  const [account,setAccount] = useState([{email : "example@example.com", password : "1234", nickname : "준혁"}]);
  const [isLogined,setIsLogined] = useState(false)

  const Logined = (a)=>{
    setIsLogined(a)
  }
  const AddAccount = (newAccount)=>{
    setAccount([...account, newAccount])
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ViewPort isLogined={isLogined}/>}/>
        <Route path='/login' element={<Login Logined={Logined} account={account}/>}/>
        <Route path='/sign-up' element={<Sign_Up account={account} AddAccount={AddAccount}/>}/>
      </Routes>
    </>
  )
}

export default App
