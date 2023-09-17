import { Link } from "react-router-dom";
import Vison1 from "../assets/vision1.png";
import Vision2 from "../assets/vision2.png";
import Line from "../assets/line.png";

const Vision = () => {
  return (
    <div className="lg:px-[90px] px-8 py-[33px] bg-[#FFFFFF]">
        <div className=" w-full flex lg:flex-row flex-col  text-[#202223]  bg-[#FFFFFF]">
            <h2 className="lg:text-[52px] text-[40px] lg:w-1/2 w-full uppercase">our vision</h2>
            <div className="lg:w-1/2 w-full">
            <p className=" text-xl lg:mt-0 mt-2">At Africa Cafe, our vision is simple: to transport you to the heart of Africa through the exquisite flavors of our cuisine, all while promoting sustainability and celebrating the continents culinary richness.</p>
            <a href="*" className="mt-6 font-semibold" >Learn more about our vision</a>
            </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 w-full my-16 ">
            <img src={Vison1} alt=""  className="lg:w-1/2 w-full object-cover" />
            <img src={Vision2} alt="" className="lg:w-1/2 w-full object-cover"  />
        </div>
        <div className="my-16 flex  w-full gap-10 items-center ">
        <img src={Line} alt=""  className=" lg:w-[45%] w-[15%] h-[1px]"/>
        <Link to=""><button className="bg-[#03292C] lg:text-xl text-sm  items-center text-[#FFFFFF] lg:w-[231px] w-[140px] h-[56px] border border-[#03292C] rounded-full">Book a reservation</button></Link>
        <img src={Line} alt="" className="lg:w-[45%] w-[15%]  h-[1px]" />

       </div>
    </div>
  )
}

export default Vision