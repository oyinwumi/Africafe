import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardTop from "./DashboardTop"
import Sidebar from "./Sidebar"
import CreditCard from "../assets/credit_card.svg";
import Visa from "../assets/Visa.svg";
import More from "../assets/more.svg";
import Tabler from "../assets/tabler.svg";
import MoreModal from "./MoreModal";

const Customer = () => {
  const [openModal, setOpenmodal] = useState(false)

  const customerDetails = [
      { title: "Personal Information", detail1: "Email address", email: "Callista Anajama", detail2: "Phone number", numbers: "07032544785"} ,
      
  ];

  const wallet = [
    {title: "WALLET", balance: "Balance", amount:"14,000", card1:"20** **** **** **23", cardName: "Master card", card2:"20** **** **** **23", cardName2: "Visa card", }
  ];

  const coins =[
    { title: "LOYALTY COIN", balance: "Balance", amount: "140", amount2: "+200" , amount3: "+20", amount4: "+20", discount: "discount", payment: "payment"}
  ]


  return (
    <div className="flex flex-col font-fontb">
    <div className=" ">
      <DashboardTop/>
    </div>
    <div className="flex">
    <Sidebar/>
    <div className=" p-6 bg-[#F3F2F1] w-full">
      <h2 className="mt-6 pb-4 text-[#202223] text-[24px] font-bold border-b">Customers</h2>
       <div className="bg-[#FFFFFF] p-6 mt-10">
            {
              customerDetails.map((detail , key)=>{
                return (
                  <div key={key} className="border-b ">
                     <div className="flex gap-96 text-[12px] items-center mb-5">
                       <h4 className="uppercase text-[#716E79] font-bold">{detail.title}</h4>
                       <Link to="" className="text-[#A77444] font-medium">Edit</Link>
                     </div>
                     <div className="mb-5">
                        <h4 className="mb-1 text-[12px]">{detail.detail1}</h4>
                        <p className="text-[14px] text-[#A77444]">{detail.email}</p>
                     </div>
                     <div className="mb-5">
                        <h4 className="mb-1 text-[12px]">{detail.detail2}</h4>
                        <p className="text-[14px] text-[#A77444]">{detail.numbers}</p>
                     </div>
                   
                  </div>
                )
              })
            }

            {
              wallet.map((item, key)=>{
                 return(
                  <div key={key} className="border-b ">
                      <h4 className="uppercase text-[#716E79] font-bold my-5">
                         {item.title}
                      </h4>
                      <div className="mb-5">
                         <h5 className="text-[#202223] text-[12px] font-normal">{item.balance}</h5>
                         <p className="text-[14px] text-[#A77444]">{item.amount}</p>
                      </div>
                      <div className="flex gap-6 mb-5 items-center">
                        <img src={CreditCard} alt="" />
                        <div>
                          <h5 className="text-[#202223] text-[12px]">{item.card1}</h5>
                          <p className="text-[#77737C] text-[12px]">{item.cardName}</p>
                        </div>
                      </div>
                      <div  className="flex gap-6 mb-5 items-center">
                        <img src={Visa} alt="" />
                        <div>
                          <h5 className="text-[#202223] text-[12px]">{item.card2}</h5>
                          <p className="text-[#77737C] text-[12px]">{item.cardName2}</p>
                        </div>
                      </div>
                  </div>
                 )
              })
            }

            {
              coins.map((coin, key)=>{
                return (
                  <div key={key} className="border-b my-5 relative ">
                  <div className="flex gap-96 text-[12px] items-center mb-5">
                    <h4 className="uppercase text-[#716E79] font-bold">{coin.title}</h4>
                    { openModal && <MoreModal/>}
                    <div onClick={() => setOpenmodal(!openModal)} className="text-[#A77444] font-medium">
                      <img src={More} alt="" />
                    </div>
                  </div>
                  <div className="mb-5">
                     <h4 className="mb-1 text-[12px]">{coin.balance}</h4>
                     <p className="text-[14px] text-[#A77444]">{coin.amount}</p>
                  </div>
                  <div className=" flex gap-4 mb-5">
                    <img src={Tabler} alt="" />
                    <div>
                       <h5>{coin.amount2}</h5>
                       <p>{coin.discount}</p>
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-5">
                    <img src={Tabler} alt="" />
                    <div>
                       <h5>{coin.amount3}</h5>
                       <p>{coin.payment}</p>
                    </div>
                  </div>
                  <div className=" flex gap-4 mb-2">
                    <img src={Tabler} alt="" />
                    <div>
                       <h5>{coin.amount4}</h5>
                       <p>{coin.payment}</p>
                    </div>
                  </div>
                  <p className="text-center text-[#A77444] text-[12px] mb-3">See all loyalty summary</p>
               </div>
                )
              })
            }
        </div>      
    </div>
    </div>
  </div>
  )
}

export default Customer