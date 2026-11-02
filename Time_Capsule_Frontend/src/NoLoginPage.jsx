import lockImage from "./자물쇠.jpeg";
import movePage from "./Component/movePage";
import { useNavigate } from "react-router-dom";

const NoLoginPage = ()=>{
    const nav = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center w-[80%] h-[80vh] bg-white rounded-2xl shadow-2xl p-10">
            <img src={lockImage} alt="자물쇠" className="w-60 h-60 object-contain" />
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-2xl font-bold">
                    로그인 후에 이용해주세요!
                </h1>
                <button className="w-70 h-15 font-bold text-white bg-[#477fd8] hover:bg-[#3E72C6] rounded-2xl cursor-pointer transition"
                onClick={()=>{nav('/login')}}>
                    로그인하러 가기
                </button>
                <button className="w-70 h-15 font-bold text-[#31445A] bg-white border-2 border-[#31445A] hover:bg-[#dfe1e4] rounded-2xl cursor-pointer transition"
                onClick={()=>{nav('/')}}>
                    이전페이지로 돌아가기
                </button>
            </div>
        </div>
    )
}

export default NoLoginPage;
