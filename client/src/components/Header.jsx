import React,{useState} from 'react'

//logo
import Logo from "../assets/images/logoIcon.png"


const Header = () => {

    const [isBottomBorderShown, setIsBottomBorderShown] = useState(false)

   const ListStyle = "hover:text-main-red cursor-pointer font-thin"

 window.onscroll = function() {

     if(window.scrollY === 0){
        setIsBottomBorderShown(false)
     }
     else{
        setIsBottomBorderShown(true)
     }
    };

    console.log("render")

  return (
    <header className={`flex justify-between items-center py-[10px] sm:px-[80px] fixed top-[0px] left-[0px] backdrop-blur-lg w-screen z-[1000] ${isBottomBorderShown?'border-b-2':' '}`}>
      
        <div>
            <img src={Logo} alt="platform logo" className='w-[50px]'/>
        </div>
        <div>
            <nav>
                <ul className='flex gap-[20px]'>
                    <li className={ListStyle}>Pricing</li>
                    <li className={ListStyle}>Features</li>
                    <li  className={ListStyle}>Testimonials</li>
                </ul>
            </nav>
        </div>
        <div className='flex gap-[10px]'>
            <button className='primaryBtn'>Login</button>
            <button className='mainBtn'>Register</button>
        </div>
    </header>
  )
}

export default Header