import { useLocation } from "react-router"
 import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Square from "../assets/square.svg";
import Info from "../assets/info.svg";
import { info } from "autoprefixer";


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
              <div className="flex w-full p-4">
                  {
                    walletData.map((item, key)=>{
                      return (<div key={key} className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-none w- gap-10">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                          <img src={Square} alt="" /><span>{item.title}</span>
                          </div>
                          <img src={Info} alt="" />
                        </div>
                        <div>
                          <p>{item.amount}</p>
                          <button>{item.action}</button>
                        </div>
                      </div>)
                    })
                  }
              </div>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Wallet