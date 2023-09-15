import DashboardTop from "./DashboardTop"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  return (

    // const datas = [
    //   { title: 'total customers', amount: '715' , action: '+8%'},
    //   { title: 'total sales', amount: '71' , action: '+8%'},
  
    // ];

  <div>
        <div className="flex flex-col">
          <div className=" ">
            <DashboardTop/>
          </div>
          <div className="flex">
          <Sidebar/>
          <div className=" p-8 bg-[#F3F2F1] w-full">
             <div className="mb-10">
                <h2 className="font-fontb text-[24px] text-[#202223] mb-1">Customers</h2>
               <p className="text-[#716E79]">Here’s what’s happening in your store</p>
             </div>
             <div>
                {
              
                }
             </div>
          </div>
          </div>
        </div>
  </div>
  )
}

export default Dashboard