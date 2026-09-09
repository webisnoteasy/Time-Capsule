import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({Logined, account})=>{
    const [Email, setEmail] = useState("")
    const [Password, setPasssword] = useState("")
    

    const EmailRef = useRef();
    const PassRef = useRef();
    const Login = ()=>{
        if (Email === ""){
            EmailRef.current.focus()
            alert("이메일 칸이 비었습니다!")
        }else if(Password === ""){
            PassRef.current.focus()
            alert("비밀번호 칸이 비었습니다!")
        }else if (account.some((a)=>{if (Email === a.email && Password === a.password){return true}})){
            Logined(true)
            navi("/")
        }else{
            alert("이메일 또는 비밀번호가 틀렸습니다.")
        }
        
    }
    const navi = useNavigate();
    return(
        
        <div className="flex justify-center items-center w-screen h-screen bg-gray-300">
            <div className="flex flex-col p-5 w-80 h-55 border-1 bg-white justify-around rounded-2xl">
                <input ref={(EmailRef)} className="border-1 rounded-2xl" type="email" placeholder="   example@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input ref={(PassRef)} className="border-1 rounded-2xl" type="password" placeholder="   password" onChange={(e)=>{setPasssword(e.target.value)}} />
                <button className="border-1 rounded-2xl hover:bg-amber-50" onClick={()=>Login()}>로그인</button>
                <button>계정이 없으신가요? <span className="hover:text-blue-500 text-blue-700" onClick={()=>{navi("/sign-up")}}>계정 만들기</span></button>
                <button className="hover:text-blue-500 text-blue-700">비밀번호 찾기</button>
            </div>
        </div>
    )
}

export default Login;