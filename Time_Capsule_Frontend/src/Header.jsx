import { House, Hourglass, UserRound, Settings, CalendarClock, MailPlus, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import movePage from "./movePage";
import HeaderButton from "./HeaderButton";

const Header = () => {
    const nav = useNavigate();
    return (
        <div className="w-[25%] h-[90vh] bg-white shadow-2xs rounded-2xl flex flex-col items-center p-8 gap-3">
            <h1 className="flex items-center gap-3 w-full h-20 p-5 font-bold text-3xl text-left">
                <CalendarClock/>메일캡슐
            </h1>
            <hr className="border-0.5 w-full border-gray-400" />
            <div className="flex flex-col justify-end items-baseline w-full gap-5  ">
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <House/>홈
                </button>
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <MailPlus/>메일캡슐 만들기
                </button>
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <Hourglass/>내 메일캡슐
                </button>
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <UserRound/>마이페이지
                </button>
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <Settings/>설정
                </button>
                <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer"
                onClick={()=>{movePage({nav, pos : '/login'})}}>
                    <UserRound/>로그인
                </button>
                {/* <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <LogOut/>로그아웃
                </button> */}
            </div>
            {/* <hr className="border-0.5 w-full border-gray-400" /> */}
        </div>
);
};

export default Header;
