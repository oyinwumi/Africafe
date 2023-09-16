import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import Testimony from "../components/Testimony"
import Vision from "../components/Vision";
import NavImg from "../assets/navimg.png"


const LandingPage = () => {
  return (
    <div className='w-full h-full relative '>
      <div className='fixed w-full z-0'>
      <img src={NavImg} alt="" className='w-full object-cover ' />

      </div>
      <div className=' w-full absolute z-50'>
        <Navbar/>
        <Hero/>
        <Vision/>
        <Testimony/>
        <Location/>
        <Footer/>
    </div>
    </div>

  )
}

export default LandingPage