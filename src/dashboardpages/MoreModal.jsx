import { Link } from "react-router-dom"
const MoreModal = () => {
  return (
   <div className="fixed z-10 ">
     <div className=' flex flex-col  gap-4 bg-#FFFFFF w-[176px] h-[88px] text-[14px] font-normal text-[#202223] border border-[#FFFFFF] rounded-lg p- ml-[310px] mt-20 shadow-2xl shadow-[#9e9e9e]  '>
        <Link to="/addcoinmodal" className="">Add coin</Link>
        <Link to="">Remove coin</Link>
    </div>
   </div>
  )
}

export default MoreModal