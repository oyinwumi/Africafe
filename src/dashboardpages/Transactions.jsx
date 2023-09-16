import DashboardTop from "./DashboardTop";
import Sidebar from "./Sidebar";
import Visa from "../assets/Visa.svg";
import Creditcard from "../assets/credit_card.svg"
import Tabler from "../assets/tabler.svg";


const img1 = <img src={Visa} alt="" />
const img2 = <img src={Creditcard} alt="" />
const img3 = <img src={Tabler} alt="" />


const Transactions = () => {
   const transactionDetails = [
     {id: '8837620', amount:'14,000', status:'Processed', method: img1, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Pending', method: img3, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Failed', method: img2, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Pending', method: img1, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Pending', method: img1, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Processed', method: img1, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Processed', method: img1, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Failed', method: img2, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Processed', method: img2, date: '28.08.2023,07:40'},
     {id: '8837620', amount:'14,000', status:'Processed', method: img3, date: '28.08.2023,07:40'},


   ];
  return (
    <div className="flex flex-col font-fontb">
    <div className=" ">
      <DashboardTop/>
    </div>
    <div className="flex">
    <Sidebar/>
    <div className=" p-6 bg-[#F3F2F1] w-full">
    <h2 className="mt-6 pb-4 text-[#202223] text-[24px] font-bold border-b">Transactions</h2>
    <div className="flex gap-4 py-8">
           <select name="" id="" className="border rounded text-center py-1 px-2 outline-none">
              <option value="">20.03.2023</option>
           </select>
           <select name="" className="border rounded text-center py-1 px-2 outline-none">
             <option value="" className="">Time</option>
           </select>
           <select name="" className="border rounded-l text-center py-1 px-2 outline-none">
            <option value="">Payment method</option>
           </select>
           <div className="border rounded text-center py-1 px-2 outline-none">
           <h4 className="border-1">Transaction ID</h4>
           {/* <span className="border w-20 rounded-r-"></span> */}
           </div>
        </div>
      <div className="bg-[#FFFFFF] p-6 ">
         <table className=" w-full text-[#202223]" >
         <thead >
            <tr className="flex justify-between border-b items-center py-3 font-bold">
               <th className=""> Transaction ID</th>
                <th className="" >Amount</th>
                <th className="">Status</th>
                <th>Method</th>
                <th>Date</th>
              </tr>
             </thead>
             <tbody>
              {
              transactionDetails.map((detail, key)=>{
                return(
                  <tr key={key} className="  flex justify-between items-center  text-[14px] py-3 border-b">
                    <td className="font-bold">{detail.id}</td>
                    <td className="font-medium">{detail.amount}</td>
                    <td  className="font-medium"><button className="">{detail.status}</button></td>
                    <td  className="font-medium">{detail.method}</td>
                    <td  className="font-medium">{detail.date}</td>
                  </tr>
                )
              })
              }
             </tbody>
         </table>
      </div>
    </div>
    </div>
  </div>  )
}

export default Transactions;