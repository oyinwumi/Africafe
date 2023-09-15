import DashboardTop from "./DashboardTop";
import Sidebar from "./Sidebar";
import FilterIcon from "../assets/filter.svg";
import Search from "../assets/searchs.svg"


const Dashboard = () => {
  const walletDatas = [
    { title: 'total customers', amount: '715' , percent: '+8%'},
    { title: 'total sales', amount: '71' , percent: '+8%'},

  ];
  const customerList =[
    {id: "A", email1: "anajamacallista@gmail.com" , number1: "07071223456", email2: "anajamacallista@gmail.com" , number2: "07071223456", email3: "anajamacallista@gmail.com" , number3: "07071223456", email4: "anajamacallista@gmail.com" , number4: "07071223456"},
    {id: "B", email1: "anajamacallista@gmail.com" , number1: "07071223456", email2: "anajamacallista@gmail.com" , number2: "07071223456", email3: "anajamacallista@gmail.com" , number3: "07071223456", email4: "anajamacallista@gmail.com" , number4: "07071223456"},
  ];
  return (
  

        
        <div className="flex flex-col font-fontb">
          <div className=" ">
            <DashboardTop/>
          </div>
          <div className="flex">
          <Sidebar/>
          <div className=" p-6 bg-[#F3F2F1] w-full">
             <div className="mb-10">
                <h2 className="font-fontb text-[24px] text-[#202223] mb-1">Customers</h2>
               <p className="text-[#716E79]">Here’s what’s happening in your store</p>
             </div>

             <div className="flex gap-10"> 
                {
                  walletDatas.map((data, key)=>{
                    return (<div key={key} className="flex  flex-col gap-6 border rounded bg-[#FFFFFF] p-4 w-[240px] text-[12px]">
                      <div>
                        <h5 className="uppercase  text-[#535353]font-medium">{data.title}</h5>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#202223] font-bold">{data.amount}</p>
                        <p className="text-[#1FAF38] font-medium">{data.percent}</p>
                      </div>
                    </div>)
                  })
                }
             </div>

            <div className="bg-[#FFFFFF] border p-6 mt-8 rounded overflow-y-scroll  scroll-my-6 snap-y  ">
               <div className="flex justify-between items-center">
                <h3>All Customers</h3>
                <div className="flex gap-4">
                  <div className="relative">
                    <img src={Search} alt="" className="absolute top-3 left-3" />
                  <input type="text" placeholder="Search by name or phone number" className=" placeholder:pl-8 border px-4  rounded h-[40px]  w-[354px]" />
                  
                  </div>
                  <img src={FilterIcon} alt="" />
                </div>
               </div>

               <div>
                  {
                    customerList.map((item , key)=>{
                      return (
                        <div key={key}>
                          <h4>{item.id}</h4>
                          <div className="my-6 text-[#202223]">
                              <div  className="mb-4">
                                <p >{item.email1}</p>
                                <p className="text-[14px] text-[#535353]">{item.number1}</p>
                              </div>
                              <div className="mb-4">
                                <p>{item.email2}</p>
                                <p className="text-[14px] text-[#535353]">{item.number2}</p>
                              </div>
                              <div className="mb-4">
                                <p>{item.email3}</p>
                                <p className="text-[14px] text-[#535353]">{item.number3}</p>
                              </div>
                              <div className="mb-4">
                                <p>{item.email4}</p>
                                <p className="text-[14px] text-[#535353]">{item.number4}</p>
                              </div>
                          </div>
                        </div>
                      )
                    })
                  }
               </div>
            </div>
          </div>
          </div>
        </div>
  
  )
}

export default Dashboard