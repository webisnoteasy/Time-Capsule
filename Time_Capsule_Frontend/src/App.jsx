import { Routes,Route } from 'react-router-dom'
import Header from './Component/Header';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import NoLoginPage from './NoLoginPage';
import Home from './Home';
import MakeCapsule from './MakeCapsule';

function App() {
  return(
    <div className='flex flex-row items-center w-full h-screen p-5 bg-[#F8F5EE]'>
      <Header/>
      <div className='flex flex-col justify-center items-center w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/noLogin' element={<NoLoginPage/>}/>
          <Route path='/makeAcapsule' element={<MakeCapsule/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
