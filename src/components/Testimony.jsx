import Profile1 from "../assets/profile1.svg";
import Profile2 from "../assets/profile2.svg";
import Profile3 from "../assets/profile3.svg";
import Profile4 from "../assets/profile4.svg";
import Profile5 from "../assets/profile5.svg";
import InstaLogo from "../assets/instagram.svg";
import TwitterLogo from "../assets/feTwitter0.svg";


const Testimony = () => {
  return (
    <div className='bg-[#03292C] md:px-[90px] px-8 py-[33px]'>
         <h2 className="text-[#FFFFFF] text-[52px] uppercase text-center py-10">our customers voices</h2>

         <div className="text-[#202223] font-fontb  flex gap-10 pb-20 " >

         <div className="flex flex-col gap-8 ">
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg p-5 w-[500px] h-[250px] relative">
                    <div className="flex gap-4 items-center">
                        <img src={Profile1} alt="" />
                        <p className="text-center">@janenot</p>
                    </div>
                    <p className="mt-6">This place is a hidden gem! From the moment I stepped in, I was captivated by the warm and welcoming atmosphere. {`${"Don't"}`} miss their signature breakfast as well.</p>
                    <img src={InstaLogo} alt="" className=" absolute bottom-5 right-5"/>
            </div>
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg p-5 w-[500px] h-[250px] relative">
                <div className="flex gap-4 items-center">
                    <img src={Profile4} alt="" className="" />
                    <p className="text-center">@janenot</p>
                </div>
                <p className="mt-6">This place is a hidden gem! From the moment I stepped in, I was captivated by the warm and welcoming atmosphere. {`${"Don't"}`} miss their signature breakfast as well.</p>
                <img src={InstaLogo} alt="" className=" absolute bottom-5 right-5"/>
            </div>
           
         </div>
            <div className="  bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg p-5 w-[500px] h-[532px] relative">
                <div className="flex gap-4 items-center">
                    <img src={Profile2} alt="" className=""/>
                    <p className="text-center">@janenot</p>
                </div>
                <p className="mt-6">This place is a hidden gem! From the moment I stepped in, I was captivated by the warm and welcoming atmosphere. {`${"Don't"}`} miss their signature breakfast as well.</p>
                <img src={TwitterLogo} alt=""  className=" absolute bottom-5 right-5" />
            </div>

           <div className="flex flex-col gap-8">
          
           <div className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg p-5 w-[500px] h-[180px] relative">
                    <div className="flex gap-4 items-center">
                        <img src={Profile3} alt="" className="" />
                        <p className="text-center">@janenot</p>
                    </div>
                    <p className="mt-6">This place is a hidden gem! From the moment I stepped in, I was captivated by the warm and welcoming atmosphere. {`${"Don't"}`} miss their signature breakfast as well.</p>
                    <img src={TwitterLogo} alt="" className=" absolute bottom-5 right-5" />
            </div>
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg p-5 w-[500px] h-[320px] relative">
                <div className="flex gap-4 items-center">
                    <img src={Profile5} alt="" className=""/>
                    <p className="text-center">@janenot</p>
                </div>
                <p className="mt-6">This place is a hidden gem! From the moment I stepped in, I was captivated by the warm and welcoming atmosphere. {`${"Don't"}`} miss their signature breakfast as well.</p>
                <img src={TwitterLogo} alt="" className=" absolute bottom-5 right-5"/>
            </div>
           </div>

     
         </div>
    </div>
  )
}

export default Testimony