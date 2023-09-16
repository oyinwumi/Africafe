import { useState } from "react"
// import AddcoinModal from "./AddcoinModal"

const MoreModal = () => {
    const [addCoin, setAddCoin] = useState(false)
  return (
   <div className="fixed z-10 ">
     <div className=' flex flex-col  gap-4 bg-#FFFFFF w-[176px] h-[88px] text-[14px] font-normal text-[#202223] border border-[#FFFFFF] rounded-lg p-5 ml-[310px] mt-20 shadow-2xl shadow-[#9e9e9e]  '>
        {/* { addCoin && <AddcoinModal/>} */}
        <p onClick={()=> setAddCoin(!addCoin)} className="">Add coin</p>
        <p>Remove coin</p>
    </div>
   </div>
  )
}

export default MoreModal