const HeaderButton = ({sentence, icon: Icon, onClick})=>{
    return(
        <button className="flex items-center gap-3 w-full h-20 font-sans rounded-2xl text-2xl hover:bg-[#31445A] hover:text-white  text-left p-5 transition cursor-pointer"
        onClick={onClick}>
            {Icon} {sentence}
        </button>
    )
}

export default HeaderButton;