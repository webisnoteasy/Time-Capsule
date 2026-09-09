import { useNavigate } from "react-router-dom";

const ViewPort = ({isLogined})=>{
    const navi = useNavigate();
    return(
        <>
        {isLogined ? <button>LogOut</button> : <button onClick={()=>{navi("/login")}}>Login</button>}
        </>
    )
}

export default ViewPort