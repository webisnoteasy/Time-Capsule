import CapsuleAll from "./CapusleAll";
import CapsuleWait from "./CapsuleWait";
import CapsuleSent from "./CapsuleSent";

const MyCapsulesBody = ({isActive, testCapsule})=>{
    return(
        <div className="flex flex-col justify-center items-center w-full h-full bg-white rounded-2xl shadow-2xl p-10 gap-3">
            {isActive[0] === 'true' ? <CapsuleAll testCapsule={testCapsule}/>
            : isActive[1] === 'true' ? <CapsuleWait testCapsule={testCapsule}/>
            : <CapsuleSent testCapsule={testCapsule}/>}
        </div>
    )
}

export default MyCapsulesBody;