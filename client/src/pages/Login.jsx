import React,{useState} from "react";

//react-router-dom
import { Link } from "react-router-dom";

//components
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";


//assets
import Logo from "../assets/images/logoIcon.png";

//icons
import {EyeIcon,EyeSlashIcon} from "@heroicons/react/24/outline"


const inputClass =
"mt-[5px] mb-[8px] outline-none w-full border border-gray-400 rounded-md p-[8px] text-black   ";







var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
};


const Login = () => {


  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {setIsPasswordVisible(!isPasswordVisible)}
   



  return (
    <>
      <div className="flex flex-center max-h-screen overflow-hidden">
        <div className="hidden sm:block">
        <Carousel settings={settings} >
          <div className=" w-[50vw] h-[100vh]">
            <CarouselItem
              image={"carouselOne.jpg"}
              text={
                " Our expense tracker platform empowers you to take control of your finances effortlessly. With user-friendly features and intuitive functionality"
              }
              slogan={"Take Control of Your Finances with Ease"}
            />
          </div>
          <div className=" w-[50vw] h-[100vh]">
            <CarouselItem
              image={"carouselTwo.jpg"}
              text={
                "Simplify your expense tracking process and pave the way for better financial success with our platform. By automating the import of transaction data from your financial accounts, categorizing expenses, and generating insightful reports"
              }
              slogan={"Streamline Your Expense Tracking for Better Financial Success"}
            />
          </div>
          <div className=" w-[50vw] h-[100vh]">
            <CarouselItem
              image={"carouselThree.jpg"}
              text={
                "Stay informed, stay in control, and stay ahead of your finances with our comprehensive expense tracker platform. Through real-time expense tracking"
              }
              slogan={"Stay Informed, Stay in Control, Stay Ahead"}
            />
          </div>
        </Carousel>
        </div>
      
        <div className="font-arial flex justify-center items-center w-screen sm:w-[50vw] h-[100vh]">
          <div className="z-[100] w-[90vw] sm:w-[80%]  h-[350px] bg-white rounded-md flex flex-col justify-center items-start gap-[10px] px-[10px] sm:px-[40px] ">
            <div className="relative">
                <img src={Logo} alt="platform logo" className="w-[50px]"/>
            
            </div>

            <h1 className="text-[25px] font-bold">Log In</h1>
            <form className="w-full">
              <div>
                <label>Email : </label>
                <br />
              
                <input
                  type="text"
                  className={inputClass}
                  placeholder="email"
                ></input>
              </div>
              <div>
                <label>Password :</label>
                <div className={inputClass+ " flex focus-within:border-main-red"}>

                
                <input
                  type={isPasswordVisible?"text":"password"}
                  className={"border-none outline-none w-full" }
                  placeholder="password"
              
                />
                {isPasswordVisible?<EyeSlashIcon onClick={togglePasswordVisibility} className="h-[20px] w-[20px] cursor-pointer"/>:<EyeIcon onClick={togglePasswordVisibility} className="h-[20px] w-[20px] cursor-pointer"/>}
                
                </div>
              
              
               
              </div>

              <a
                
                className="mainBtn w-full block text-center mt-[10px] cursor-pointer"
              >
                Login
              </a>
            </form>
            <div className="text-center">
                <p>Don't have an account ? <Link className="text-main-red underline" to="/register">Create an account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


