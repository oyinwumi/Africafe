import { Link } from "react-router-dom";
import Coffee from "../assets/coffe.png";
import Snack from "../assets/snack.png";
import Icecream from "../assets/icecream.png";
import Line from "../assets/line.png";


const Hero = () => {
  return (
    <div className="bg-[#F2EFE8] text-[#202223]  text-center pt-20">
       <h1 className="uppercase md:text-[60px] font-normal  mx-auto">experience the rich flavors of <br /> africa at africafé</h1>
       <p className="text-[24px] mt-2">Try one of our salads today and see for yourself!</p>
       <h2 className="mt-32 mb-14 uppercase text-[#000000] text-5xl text-center">explore the café menu</h2>
       <div className="md:px-[90px] px-8 flex w-full gap-10 text-xl">
          <div className="bg-[#FFFFFF] border rounded-b-[5px] w-1/3">
            <img src={Coffee} alt="" className="w-full" />
            <p className="text-center py-5 ">Coffee blends</p>
          </div>
          <div className="bg-[#FFFFFF] border rounded-b-[5px] w-1/3">
            <img src={Snack} alt="" className="w-full"/>
            <p className="text-center py-5 ">Pastries</p>
          </div>
          <div className="bg-[#FFFFFF] border rounded-b-[5px] w-1/3">
            <img src={Icecream} alt="" className="w-full" />
            <p className="text-center py-5 ">Smoothies</p>
          </div>
       </div>
       <div className="my-16 md:px-[90px] px-8 flex w-full gap-10 items-center pb-16">
        <img src={Line} alt=""  className="w-[45%] h-[1px]"/>
        <Link to=""><button className="text-xl bg-[#03292C] items-center text-[#FFFFFF] w-[105px] h-[56px] border border-[#03292C] rounded-full">Shop</button></Link>
        <img src={Line} alt="" className="w-[45%]  h-[1px]" />

       </div>
    </div>
  )
}

export default Hero