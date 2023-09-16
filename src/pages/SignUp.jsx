import { useState } from "react";
import AuthImage from "../assets/authimg.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 


const SignUp = () => {
  const[fullname, setFullname] = useState("");
   const[email, setEmail] = useState("");
   const[phoneNumber, setPhoneNumber] = useState("");
   const[password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const handleSignup = () =>{
    console.log(fullname, email, phoneNumber, password)
   }

  return (
   
      <div className="w-screen h-screen  flex overflow-hidden">
      <div className="w-1/2">
        <img src={AuthImage} alt="" className="w-full"/>
      </div>
      <div className=" w-1/2 border rounded p-20 bg-[#FFFFFF]">
        <h2 className="text-[36px] text-[#202223] pt-10">Welcome to Africafé!</h2>
        <p className="text-[20px] pb-10">We are thrilled to see you</p>
         <form action="" className=" ">
         <label htmlFor="">Full name</label><br />
          <input type="text" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={fullname} onChange={(e) => setFullname(e.target.value)}/><br />
          <label htmlFor="">Email</label><br />
          <input type="email" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
          <label htmlFor="">Phone Number</label><br />
          <input type="text" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/><br />
          <div>
      <label htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="p-2 w-full h-[48px] border border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl"
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
        <button className=" bg-[#03292C] text-[#FFFFFF] text-xl w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Sign up</button> <br />
        <Link to="/"> <button className=" text-xl tex-[#202223] w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Cancel</button> <br />
</Link>
         </form>
         <p className="text-center text-[14px]">By clicking sign up you agree to Africafé <span className="text-[#A77444]">Terms and Condition</span></p>
      </div>
    </div>
    
  
  )
}

export default SignUp