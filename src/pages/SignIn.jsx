import { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../assets/authimg.png";

const SignIn = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSignup = () =>{
   console.log( email, password)

  }
  return (
    <div className="w-full h-full bg-[#D9D9D9] overflow-x-hidden">
    <div className="w-full h-full  py-14 flex mx-[10%]   ">
    <div className="">
      <img src={AuthImage} alt="" className=" "/>
    </div>
    <div className=" w-[730px] border rounded p-20 bg-[#FFFFFF]">
      <h2 className="text-[36px] text-[#202223] pt-10">Welcome to Africafé!</h2>
      <p className="text-[20px] pb-10">We are thrilled to see you</p>
       <form action="" className=" ">
        <label htmlFor="">Email</label><br />
        <input type="email" className=" p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
        <label htmlFor="">Password</label><br />
        <input type="password" className=" p-2 w-full h-[48px] border   border-[#A8AEB2] mt-2 mb-6 outline-none rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
        <Link to="/dashboard"><button className=" bg-[#03292C] text-[#FFFFFF] text-xl w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Sign up</button> <br /></Link>
        <button className=" text-xl tex-[#202223] w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Cancel</button> <br />

       </form>
       <p className="text-center text-[14px]">Not account yet?  <span className="text-[#A77444]"><Link to="/signup">Get started</Link></span></p>
    </div>
  </div>
  </div>
  )
}

export default SignIn