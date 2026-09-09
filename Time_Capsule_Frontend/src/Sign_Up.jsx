import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sign_Up= ({account,AddAccount})=>{
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
        }else if (!Nickname){
            alert("닉네임 칸이 비었습니다!")
        }else{
            if (Password === PasswordCheck){
                if(account.some((a)=>{if(a.email === Email){return(true)}})){
                    alert("이미 존재하는 이메일입니다!")
                }else {
                    AddAccount({email: Email, password: Password, nickname: Nickname})
                    navi("/login")
                }

            }else{
                alert("비밀번호 확인이 틀렸습니다!")
            }
        }
    }

    return(
        <>
            <div>
                <input  type="email" placeholder="example@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input  type="text" placeholder="Nickname" onChange={(e)=>{setNickname(e.target.value)}}/>
                <input  type="password" placeholder="password" onChange={(e)=>{setPasssword(e.target.value)}}/>
                <input  type="password" placeholder="password again" onChange={(e)=>{setPassswordCheck(e.target.value)}}/>
                <button onClick={()=>Signup()}>계정 만들기</button>
                
            </div>
        </>
    )
}

export default Sign_Up;
