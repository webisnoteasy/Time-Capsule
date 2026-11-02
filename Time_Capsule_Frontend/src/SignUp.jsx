import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import signUpCheck from "./Component/signUpCheck";

const SignUp = ()=>{
    const nav = useNavigate()
    return(
        <div className="flex flex-col justify-center items-center w-120 h-150 p-5 bg-white rounded-2xl shadow-2xl gap-5">
            <h1 className="font-bold text-2xl">
                메일캡슐 회원가입
            </h1>
            <form onSubmit={(e)=>{signUpCheck(e, {nav})}} className="w-[60%] flex flex-col justify-center items-center gap-3">
                <LoginInput type={"email"} placeholder={"이메일"}/>
                <LoginInput type={"password"} placeholder={"비밀번호"}/>
                <LoginInput type={"password"} placeholder={"비밀번호 확인"}/>
                <button className="bg-[#31445A] text-white w-full h-12 rounded-2xl cursor-pointer">
                    회원가입
                </button>
                <h1>이미 계정이 있으신가요?
                    <span> </span>
                    <span className="text-blue-700 hover:text-blue-700 font-bold cursor-pointer" onClick={()=>{nav('/login')}}>
                        로그인
                    </span>
                </h1>
            </form>
        </div>
    )
}

export default SignUp;