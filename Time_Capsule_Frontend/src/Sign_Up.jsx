import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sign_Up= ()=>{
    const navi = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPasssword] = useState("")
    const [PasswordCheck, setPassswordCheck] = useState("")
    const [Nickname, setNickname] = useState("")

    const Signup = () =>{
        if (!Email){
            alert("이메일 칸이 비었습니다!")
        }else if (!Password){
            alert("비밀번호 칸이 비었습니다!")
        }else if (!PasswordCheck){
            alert("비밀번호 확인 칸이 비었습니다!")
        }else if (!Email){
            alert("이메일 칸이 비었습니다!")
        }else{
            console.log(1)
        }
    }

    return(
        <>
            <div>
                <input className="border-2" type="email" placeholder="example@example.com"/>
                <input className="border-2" type="password" placeholder="password" />
                <input className="border-2" type="password" placeholder="password" />
                <button onClick={()=>Signup()}>계정 만들기</button>
                
            </div>
        </>
    )
}

export default Sign_Up;