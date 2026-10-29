import { House, Hourglass, UserRound, Settings, CalendarClock, MailPlus } from "lucide-react";
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
                <HeaderButton sentence='홈' icon={<House/>} onClick={()=>{movePage({nav, pos :'/'})}}/>
                <HeaderButton sentence='메일캡슐 만들기' icon={<MailPlus/>} onClick={()=>{movePage({nav, pos :'/makeAcapsule'})}}/>
                <HeaderButton sentence='내 타임캡슐' icon={<Hourglass/>} onClick={()=>{movePage({nav, pos :'/mycapsule'})}}/>
                <HeaderButton sentence='마이페이지' icon={<UserRound/>} onClick={()=>{movePage({nav, pos :'/mypage'})}}/>
                <HeaderButton sentence='설정' icon={<Settings/>} onClick={()=>{movePage({nav, pos :'/settings'})}}/>
                <HeaderButton sentence='로그인' icon={<UserRound/>} onClick={()=>{movePage({nav, pos :'/login'})}}/>
                
                {/* <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer">
                    <LogOut/>로그아웃
                </button> */}
            </div>
        </div>
);
};

export default Header;
