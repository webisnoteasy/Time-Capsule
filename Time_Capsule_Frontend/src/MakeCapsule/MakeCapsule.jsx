import CapsuleInput from "./CapsuleInput";
import { useState } from "react";
import capsule from "../Component/capsule";
import { useNavigate } from "react-router-dom";

const MakeCapsule = ({setTestCapsule, setTitle, setOpenAt, setContent, title, openAt, content})=>{
    const day = new Date();
    const maxTitleLength = 50;
    const maxContentLength = 1000;
    const [isPastDate, setPastDate] = useState(false);
    const nav = useNavigate();

    return(
        <form onSubmit={(e)=>{capsule(e, day, {nav, setTestCapsule, title, openAt, content, setTitle, setContent, setOpenAt , setPastDate})}} className="flex flex-col justify-center items-center w-[80%] h-[80vh] bg-white rounded-2xl shadow-2xl p-10 gap-3">

            <h1 className="font-bold text-3xl">
                미래의 나에게 편지를 써보세요
            </h1>
            <div className="flex flex-row w-full h-3">
                <label htmlFor="title" className="w-full pl-3 text-sm font-bold">
                    편지의 제목
                </label>
                <label htmlFor="title" className="w-full pl-3 text-sm font-bold">
                    편지를 열어볼 날짜
                </label>

            </div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
                <div className="flex flex-row gap-3 w-full">
                <CapsuleInput type={"text"} placeholder={"편지의 제목을 적어주세요"} maxLength={maxTitleLength} onChange={(e)=>{setTitle(e.target.value)}} value={title}
                    onCompositionEnd={(e) => {
                    setTitle(e.target.value.slice(0, maxTitleLength))}}/>

                <CapsuleInput type={"date"} name="openAt" placeholder={""} isInvalid={isPastDate}
                    onChange={(e)=>{
                        setOpenAt(e.target.value);
                        setPastDate(false);
                        e.currentTarget.setCustomValidity("");
                    }} value={openAt}/>
            </div>

            <div className="flex flex-row w-full">
                <p className="w-full text-sm text-right text-gray-500 pr-3">
                    {title.length}/{maxTitleLength}자
                </p>

                <p className="w-full text-sm text-right text-gray-500 pr-3">
                    개봉일
                </p>
            </div>

            <textarea value={content} maxLength={maxContentLength} placeholder="미래의 나에게 보낼 내용을 적어주세요."
                className="w-full h-full border text-12 font-bold border-gray-500 rounded-2xl p-4 resize-none focus:outline-none"
                onChange={(e)=>{setContent(e.target.value)}}
                required
                onCompositionEnd={(e) => {
                setContent(e.currentTarget.value.slice(0, maxContentLength))}}/>

            <p className="w-full text-right text-gray-500 pr-3 text-sm">
                {content.length}/{maxContentLength}자
            </p>

            <button className="w-full h-20 font-bold text-xl text-white bg-[#477fd8] hover:bg-[#3E72C6] rounded-2xl cursor-pointer transition">
                미래의 나에게 편지 보내기
            </button>
            </div>
        </form>
    )
}

export default MakeCapsule;
