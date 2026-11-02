import MyCapsulesHeader from "./MyCapsulesHeader";
import MyCapsulesBody from "./MyCapsulesBody";
import { useState } from "react";

const MyCapsules = ({testCapsule})=>{
    const [isActive,setIsActive] = useState(['true','false','false'])
    return(
        <div className="flex flex-col items-center w-[80%] h-[80vh] gap-7">
            <MyCapsulesHeader isActive={isActive} setIsActive={setIsActive}/>
            <MyCapsulesBody isActive={isActive} testCapsule={testCapsule}/>
        </div>
    )
}

export default MyCapsules;