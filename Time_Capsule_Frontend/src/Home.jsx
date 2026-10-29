import { useNavigate } from "react-router-dom";
import movePage from "./Component/movePage";
import { SendHorizontal } from 'lucide-react';

const Home = ()=>{
    const nav = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center w-[80%] h-[80vh] bg-white rounded-2xl shadow-2xl p-10 gap-3">
            <h1 className="font-bold text-3xl">
                미래의 나에게 편지를 쓰고,
            </h1>
            <h1 className="font-bold text-3xl">
                원하는날에 이메일로 받아보세요.
            </h1>

            <button className="flex flex-row justify-center items-center gap-3 w-70 h-15 font-bold text-white bg-[#477fd8] hover:bg-[#3E72C6] rounded-2xl cursor-pointer transition"
                onClick={()=>{movePage({nav, pos : '/makeAcapsule'})}}>
                    지금 편지쓰러 가기 <SendHorizontal className="w-5 h-5"/>
                </button>
        </div>
    )
}

export default Home;
