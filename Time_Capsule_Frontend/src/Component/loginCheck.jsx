import movePage from "./movePage";

const loginCheck = (e,{nav})=>{
    e.preventDefault();
    console.log("로그인")
    movePage({nav, pos : '/'})

}

export default loginCheck;