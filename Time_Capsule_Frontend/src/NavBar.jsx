import { House, Hourglass, UserRound, Settings, CalendarClock, MailPlus, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import movePage from "./Component/movePage";
import HeaderButton from "./Component/HeaderButton";

const NavBar = ({isLogin}) => {
    const nav = useNavigate();
    return (
        <div className="w-[25%] h-[90vh] bg-white shadow-2xl rounded-2xl flex flex-col items-center p-8 gap-3">
            <h1 className="flex items-center gap-3 w-full h-20 p-5 font-bold text-3xl text-left">
                <CalendarClock/>메일캡슐
            </h1>
            <hr className="border-0.5 w-full border-gray-400" />
            <div className="flex flex-col justify-end items-baseline w-full gap-5  ">
                <HeaderButton sentence='홈' icon={<House/>} onClick={()=>{nav('/')}}/>
                <HeaderButton sentence='메일캡슐 만들기' icon={<MailPlus/>} onClick={()=>{movePage({nav, pos :'/makeAcapsule', isLogin})}}/>
                <HeaderButton sentence='내 타임캡슐' icon={<Hourglass/>} onClick={()=>{movePage({nav, pos :'/mycapsule', isLogin})}}/>
                <HeaderButton sentence='마이페이지' icon={<UserRound/>} onClick={()=>{movePage({nav, pos :'/mypage', isLogin})}}/>
                <HeaderButton sentence='설정' icon={<Settings/>} onClick={()=>{movePage({nav, pos :'/settings', isLogin})}}/>
                {!isLogin ? <HeaderButton sentence='로그인' icon={<UserRound/>} onClick={()=>{nav('/login')}}/> 
                    : <HeaderButton sentence='로그아웃' icon={<LogOut/>}/>} 
            </div>
        </div>
);
};

export default NavBar;
