const LoginInput = ({type, placeholder})=>{
    return(
        <input type={type} placeholder={placeholder} className="w-full h-12 border rounded-2xl placeholder:text-[15px] pl-3"/>
    )
}

export default LoginInput;