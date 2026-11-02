const LoginInput = ({type, placeholder})=>{
    return(
        <input type={type} placeholder={placeholder}
        className="w-full h-12 border-b border-b-gray-400 placeholder:text-[15px] pl-3 focus:outline-none"/>
    )
}

export default LoginInput;