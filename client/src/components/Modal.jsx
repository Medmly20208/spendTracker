import React from 'react'

const Modal = (props) => {
  return (
    <>
    <div className='fixed top-0 right-0 w-screen h-screen bg-black opacity-10 z-[1000] cursor-pointer' onClick={props.onClose}></div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10000]'>
           {props.children}
      </div>
    </>
    
      
    
  )
}

export default Modal