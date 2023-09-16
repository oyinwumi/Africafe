import Closefill from "../assets/close_fill.svg";

const AddcoinModal = () => {
  return (
    <div className="bg-[#5d5a5a] w-full h-screen pt-[20%] relative">
        <div className="bg-white w-[560px] h-[272px] border rounded-lg mx-auto  flex flex-col p-5 opacity-100">
            <div className="flex justify-between items-center border-b">
                <h5 className="text-[24px] text-[#202223] opacity-100">Add coin</h5>
                <img src={Closefill} alt="" />
             </div>
             <div className="mt-4">
             <label htmlFor="" >Enter amount of coin</label><br />
             <input type="text" className="border rounded w-full outline-none px-2 py-1 mt-1" />
             </div>
             <div className=" flex gap-4 mt-6  ml-[70%]">
                <button className="text-center border rounded-3xl  w-[85px] h-[40px]" >Cancel</button>
                <button className="text-center border rounded-3xl  bg-[#03292C] text-white w-[85px] h-[40px]">Save</button>
             </div>
        </div>
    </div>
  )
}

export default AddcoinModal

