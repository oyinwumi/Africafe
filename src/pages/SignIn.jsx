import { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../assets/authimg.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 


const SignIn = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () =>{
   console.log( email, password)

   

  }

  return (
    
    <div className="w-full h-full  flex overflow-x-hidden ">
    <div className="w-1/2 lg:block hidden">
      <img src={AuthImage} alt="" className=" w-full h-full "/>
    </div>
    <div className=" lg:w-1/2 w-full h-full lg:border border-none rounded lg:px-20 px-8  bg-[#FFFFFF]">
      <h2 className="lg:text-[36px] text-[32px]  text-[#202223] pt-10">Welcome to Africafé!</h2>
      <p className="lg:text-[20px] text-sm pb-10">We are thrilled to see you</p>
       <form action="" className=" ">
        <label htmlFor="">Email</label><br />
        <input type="email" className=" p-4 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
        <div>
      <label htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="p-4 w-full h-[48px] border border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="absolute right-5 top-6">
          {showPassword ? (
            <FaEyeSlash onClick={togglePasswordVisibility} />
          ) : (
            <FaEye onClick={togglePasswordVisibility} />
          )}
        </span>
      </div>
    </div>
        <Link to="/dashboard"><button className=" bg-[#03292C] hover:bg-white hover:text-[#202223] text-[#FFFFFF] text-xl w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Sign in</button> <br /></Link>
        <Link to="/"> <button className=" hover:bg-[#03292C] hover:text-white text-xl tex-[#202223] w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Cancel</button> <br />
       </Link>
       </form>
       <p className="text-center text-[14px] ">No account yet?  <span className="text-[#A77444]"><Link to="/signup">Get started</Link></span></p>
    </div>
  </div>
  
  )
}

export default SignIn