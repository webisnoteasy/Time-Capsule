import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './Login'
import Sign_Up from './Sign_Up'

function App() {
  const navi = useNavigate();

  return (
    <>
      <button onClick={()=>{navi("/login")}}>Login</button>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Sign_Up/>}/>
      </Routes>
    </>
  )
}

export default App
