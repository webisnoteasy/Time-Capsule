const movePage = ({nav, pos, isLogin})=>{
    if (isLogin){
        nav(pos)
    }else{
        nav('/noLogin')
    }
    
}

export default movePage;