import movePage from "./Component/movePage";
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";
import loginCheck from "./Component/loginCheck";

const LoginPage = ()=>{
    const nav = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center w-120 h-150 p-5 bg-white rounded-2xl shadow-2xl gap-3">
            <h1 className="font-bold text-2xl">
                메일캡슐 로그인
            </h1>
            <form onSubmit={(e)=>{loginCheck(e, {nav})}} className="w-[60%] flex flex-col justify-center items-center gap-6">
                <LoginInput type={"email"} placeholder={"이메일"}/>
                <LoginInput type={"password"} placeholder={"비밀번호"}/>
                <button className="bg-[#31445A] text-white w-full h-12 rounded-2xl cursor-pointer">
                    로그인
                </button>
            </form>
            <h1>계정이 없으신가요? <span> </span> 
                <span className="text-blue-700 hover:text-blue-700 font-bold cursor-pointer" onClick={()=>{nav('/signup')}}>
                        회원가입
                </span>
            </h1>
            <h1 className="text-blue-700 hover:text-blue-800 font-bold cursor-pointer">비밀번호를 잊으셨나요?</h1>
        </div>
    )
}

export default LoginPage;