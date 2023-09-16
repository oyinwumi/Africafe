import Close from "../assets/closefill.svg";

const AddcoinModal = () => {
  return (
    <div className="bg-[#000000]  ">
        <div className="bg-white w-[560px] h-[272px] border rounded-lg mx-auto opacity-70 p-5">
            <div className="flex justify-between items-center border-b">
                <h5 className="text-[24px] text-[#202223]">Add coin</h5>
                <img src={Close} alt="" />
             </div>
             <div className="mt-4">
             <label htmlFor="">Enter amount of coin</label>
             <input type="text" />
             </div>
             <div>
                <button>Cancel</button>
                <button>Save</button>
             </div>
        </div>
    </div>
  )
}

export default AddcoinModal