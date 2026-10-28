import LoginInput from "./LoginInput";

const LoginPage = ()=>{
    return(
        <div className="flex flex-col justify-center items-center w-120 h-150 p-5 bg-white rounded-2xl shadow-2xl gap-5">
            <h1 className="font-bold text-2xl">
                메일캡슐 로그인
            </h1>
            <form onSubmit={()=>{}} className="w-[60%] flex flex-col justify-center items-center gap-3">
                <LoginInput type={"email"} placeholder={"이메일"}/>
                <LoginInput type={"password"} placeholder={"비밀번호"}/>
                <button className="bg-[#31445A] text-white w-full h-12 rounded-2xl cursor-pointer">
                    로그인
                </button>
            </form>
        </div>
    )
}

export default LoginPage;