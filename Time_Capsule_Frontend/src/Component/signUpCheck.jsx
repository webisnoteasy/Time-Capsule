import movePage from "./movePage";

const signUpCheck = (e,{nav})=>{
    e.preventDefault();
    console.log("회원가입 완료함")
    movePage({nav, pos : '/login'})

}

export default signUpCheck;