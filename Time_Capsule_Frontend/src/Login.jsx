import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const [Email, setEmail] = useState("")
    const [Password, setPasssword] = useState("")

    const EmailRef = useRef();
    const PassRef = useRef();
    const Login = ()=>{
        if (Email === ""){
            EmailRef.current.focus()
        }else if(Password === ""){
            PassRef.current.focus()
        }else if (Email == "example@example.com" && Password == "1234"){
            navi("/")
        }else{
            alert("이메일 또는 비밀번호가 틀렸습니다.")
        }
        
    }
    const navi = useNavigate();
    return(
        
        <>
            <div className="flex flex-col">
                <input ref={(EmailRef)} className="border-2" type="email" placeholder="example@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input ref={(PassRef)} className="border-2" type="password" placeholder="password" onChange={(e)=>{setPasssword(e.target.value)}} />
                <button onClick={()=>Login()}>로그인</button>
                <button>계정이 없으신가요? <span onClick={()=>{navi("/sign-up")}}>계정 만들기</span></button>
            </div>
        </>
    )
}

export default Login;