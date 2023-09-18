import DashboardTop from "./DashboardTop";
import Sidebar from "./Sidebar";

const EditCoin = () => {
  return (
<div className="flex flex-col font-fontb relative">
      <div>
        <DashboardTop />
      </div>
      <div className="flex text-[#202223]">
        <Sidebar />
        <div className="p-6 bg-[#F3F2F1] w-full">
          <h2 className="mt-6 py-4 text-[24px] font-bold border-b ">Edit Africoin program</h2>
          <div className="border-b p-5 w-full relative">
            <button className="bg-[#03292C] float-right text-white border rounded-3xl w-[156px] h-[34px]">Edit Africoin program</button>
          </div>
       

          <div className="bg-[#FFFFFF] h-[564px] p-6 mt-10">
           <h4>Set Africoin rule</h4>
           <div className="mt-4">
            <label htmlFor="">Amount #</label><br />
            <input type="text" placeholder="100" className="w-[550px] h-[48px] p-2 rounded border mb-6 mt-1"/><br />
            <label htmlFor="">Coin equivalent #</label><br />
            <input type="text" placeholder="100" className="w-[550px] h-[48px] p-2 rounded border mt-1"/><br />
           </div>
           <div className="mt-10">
            <h4 className="text-lg">Notification method</h4>
            <p className="sm">Select how users get notified when they receive an Africoin</p>
            <input type="radio" className="text-sm mb-6 mt-6" /> <span className="">Email</span><br />
            <input type="radio" className="text-sm mb-4" /> <span>Phone Number</span>
           </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default EditCoin