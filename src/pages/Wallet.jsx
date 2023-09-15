import { useLocation } from "react-router"
 import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Square from "../assets/square.svg";
import Info from "../assets/info.svg";
import Circle from "../assets/circle.svg";


const Wallet = () => {
    const location = useLocation();

    const {pathname} = location
    let backgroundColor = '#F2EFE8]';
    if(pathname === "/wallet"){
     backgroundColor = '#FFFFFFF]';

    }

  const walletData = [
    { title: 'Wallet balance', amount: '10,000' , action: 'Top up wallet'},
    { title: 'Coin balance', amount: '10,000' , action: 'Redeem loyalty card'},

  ];
  const recentActivities = [
    {action: 'Wallet top up' , date: '14.09.2023' , amount: '+7000'},
    {action: 'Loyalty redemption' , date: '14.09.2023' , amount: '+100'},
    {action: 'Payment' , date: '14.09.2023' , amount: '+700'},
    {action: 'Payment' , date: '14.09.2023' , amount: '+2000'},
    {action: 'Wallet top up' , date: '14.09.2023' , amount: '+8000'},

  ]


  return (
    <div className={`${backgroundColor} text-[#000000]`}>
        <Navbar/>
        <div className="border-t ">
           <div className="my-14 ml-[360px]">
            <h5 className="text-[24px] mb-1">Hello Callista,</h5>
            <p>See all activities on your account</p>
           </div>
           <div className="bg-[#D9D9D9] w-[1123px] h-[723px] mx-auto boreder border-[#D9D9D] mb-20">
              <div className="flex gap-10 w-full p-6">
                  {
                    walletData.map((item, key)=>{
                      return (<div key={key} className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-none w-1/2 p-5">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                          <img src={Square} alt="" /><span className="text-[18px]">{item.title}</span>
                          </div>
                          <img src={Info} alt="" />
                        </div>
                        <div className="flex justify-between mt-10">
                          <p className="text-[24px]">{item.amount}</p>
                          <button className="bg-[#D9D9D9] p-2 text-center rounded text-[14px]">{item.action}</button>
                        </div>
                      </div>)
                    })
                  }
              </div>
              <div className="p-6  mt-10">
                 <table className="w-full">
                    <thead>
                      <tr className="flex justify-between my-6">
                      <th>Recent Activities</th>
                        <th>View all</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        recentActivities.map((activity, key)=>{
                          return <tr key={key} className="flex justify-between "> 
                             <div className="flex gap-2 items-center">
                              <img src={Circle} alt="" />
                              <div className="flex flex-row gap-2" >
                              <td >{activity.action}</td>
                              <td >{activity.date}</td>
                              </div>
                              
                             </div>
                             
                             <td>{activity.amount}</td>
                          </tr>
                        })
                      }
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Wallet