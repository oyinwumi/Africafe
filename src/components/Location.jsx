import { Link } from "react-router-dom";
import Line from "../assets/line.png";

// const src = "https://www.youtube.com/watch?v=MxWEVRRvCu0";


const Location = () => {
  return (
    <div className="my-20">
    <div className=" w-full  text-[#202223]  bg-[#FFFFFF]  ">
        <h2 className="text-[52px] text-center uppercase ">our locations</h2>
        <div className="flex justify-between py-10 md:px-[90px] px-8 ">
           <div>
            <h4 className="text-lg mb-2"> 25, Mafolkwu street, Apapa,  Lagos</h4>
            <a href="" className="text-[#A77444] underline hover:text-[#5b432d]">View in map</a>
           </div>
           <div>
            <h4 className="text-lg mb-2">200 Kayode street, Apapa,  Abuja</h4>
            <a href="" className="text-[#A77444] underline hover:text-[#5b432d]">View in map</a>
           </div>
           <div>
            <h4 className="text-lg mb-2 ">200 Kayode street, Apapa,  Abuja</h4>
            <a href="" className="text-[#A77444] underline hover:text-[#5b432d]">View in map</a>
           </div>
        </div>
       
       </div>
       <div className="py-10 md:px-[90px] px-8]">
        <iframe  className="w-full h-[700px] py-16" src="https://www.youtube.com/embed/MxWEVRRvCu0?si=Pdsi17XL_JQOu9F3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
  
    <div className="my-16 flex w-full gap-10 items-center md:px-[90px] px-8  ">
    <img src={Line} alt=""  className="w-[45%] h-[1px]"/>
    <Link to=""><button className="bg-[#03292C] text-xl items-center text-[#FFFFFF] w-[231px] h-[56px] border border-[#03292C] rounded-full">Book a reservation</button></Link>
    <img src={Line} alt="" className="w-[45%]  h-[1px]" />

   </div>
</div>
  )
}

export default Location