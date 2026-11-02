const CapsuleInput = ({type, placeholder, onChange, value, onCompositionEnd, maxLength, name, isInvalid})=>{
    return(
        <input type={type} placeholder={placeholder} value={value} maxLength={maxLength }
        className="w-full h-12 placeholder:text-12 font-bold border
        border-gray-500 rounded-2xl p-3 focus:outline-none
        [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-datetime-edit]:text-gray-500"
        onChange={onChange}
        onCompositionEnd={onCompositionEnd}
        name={name}
        aria-invalid={isInvalid || undefined} // 개봉일 설정할때 현재 년도월일 보다 전인지 확인할떄 씀
        required
        />
    )
}

export default CapsuleInput;
