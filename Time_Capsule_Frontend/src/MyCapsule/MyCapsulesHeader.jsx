import { useState } from "react";

const MyCapsulesHeader = ({isActive, setIsActive})=>{
    const [segment,SetSegment] = useState(['전체','미발송','발송완료'])

    const changeActive = (i)=>{
        for(let j = 0; j<=2; j++){
            setIsActive(prev=>prev.map((value,index) =>(index === j ? 'false' : value)))
        }
        setIsActive(prev=>prev.map((value,index) =>(index === i ? 'true' : value)))
    }

    return(
        <div className="flex flex-col justify-center items-center w-full h-[20vh] bg-white rounded-2xl shadow-2xl p-5 gap-3">
            <h1 className="w-full text-left font-bold">
                내 메일캡슐 목록
            </h1>
            <div className="flex flex-row w-full gap-7">
                {segment.map((a,i)=>{
                    return(
                        <button key={a}
                        onClick={()=>changeActive(i)}
                        className={`flex justify-center items-center w-30 font-bold cursor-pointer border-b transition ${isActive[i] === 'true'? ' border-b-gray-500': 'border-b-gray-300'}`}>
                            {a}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default MyCapsulesHeader;