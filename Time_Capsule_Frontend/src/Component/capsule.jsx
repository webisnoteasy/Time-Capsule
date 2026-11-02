const capsule = (e, day, {nav, setTestCapsule, title, openAt, content, setTitle, setContent, setOpenAt, setPastDate})=>{
    e.preventDefault();
    
    const year = day.getFullYear(); // 오늘 년도
    const month = String(day.getMonth() + 1).padStart(2, "0"); // 오늘 월
    const date = String(day.getDate()).padStart(2, "0"); // 오늘 일
    const today = `${year}-${month}-${date}`; // yyyy-mm-dd 형식
    const dateInput = e.currentTarget.elements.namedItem("openAt");
    const isPastDate = today >= openAt;
    const newCasule = {
        title : title,
        openAt : openAt,
        status : 'waiting'
    }

    setPastDate(isPastDate);
    dateInput.setCustomValidity(isPastDate ? `${today} 이후로 날짜를 설정해주세요!` : "");

    if (isPastDate) {
        dateInput.reportValidity();
        return;
    }
    setTestCapsule(prev => [...prev, newCasule])
    setTitle("")
    setContent("")
    setOpenAt("")
    nav('/mycapsule')
}

export default capsule;
