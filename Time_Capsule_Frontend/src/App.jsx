import { Routes,Route } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import NoLoginPage from './NoLoginPage';
import Home from './Home';
import MakeCapsule from './MakeCapsule/MakeCapsule';
import MyCapsules from './MyCapsule/MyCapsules';

function App() {
  const [title,setTitle] = useState("");
  const [openAt,setOpenAt] = useState("");
  const [content,setContent] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [testCapsule,setTestCapsule] = useState([{title : "미발송", openAt:"2027-04-08" ,status:'waiting'},{title : "발송완료", openAt:"2028-04-08" ,status:'sent'}])

  return(
    <div className='flex flex-row items-center w-full h-screen p-5 bg-[#F8F5EE]'>
      <NavBar isLogin={isLogin}/>
      <div className='flex flex-col justify-center items-center w-full'>
        <Routes>
          <Route path='/' element={<Home isLogin={isLogin}/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='mycapsule' element={<MyCapsules testCapsule={testCapsule}/>}/>
          <Route path='/noLogin' element={<NoLoginPage/>}/>
          <Route path='/makeAcapsule' element={<MakeCapsule setTestCapsule={setTestCapsule} setTitle={setTitle} setOpenAt={setOpenAt} title={title} openAt={openAt} content={content} setContent={setContent} isLogin={isLogin}/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default App
