import React from 'react'
import FaceBookSvg from '../../../assets/images/icon-facebook.svg'
import YoutubeSvg from '../../../assets/images/icon-youtube.svg'
import Tweeter from '../../../assets/images/icon-twitter.svg'
import Pinterest from '../../../assets/images/icon-pinterest.svg'
import InstaGram from '../../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div>
        <footer className="bg-veryDarkBlue">
   
         <div
           className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
           <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
             <div className="mx-auto my-6 text-center text-white md:hidden">
               Copyright &copy; 2022, All Rights Reserved
             </div>
             
             <div>
               <img src="img/logo-white.svg" className="h-8" alt="" />
             </div>
        
             <div className="flex justify-center space-x-4">
               <a href="#">
                 <img src={FaceBookSvg} alt="" className="h-8" />
               </a>
               <a href="#">
                 <img src={YoutubeSvg} alt="" className="h-8" />
               </a>
               <a href="#">
                 <img src={Tweeter} alt="" className="h-8" />
               </a>              
               <a href="#">
                 <img src={Pinterest} alt="" className="h-8" />
               </a>
               <a href="#">
                 <img src={InstaGram} alt="" className="h-8" />
               </a>
             </div>
           </div>
           <div className="flex justify-around space-x-32">
             <div className="flex flex-col space-y-3 text-white">
               <a href="#" className="hover:text-brightRed">Home</a>
               <a href="#" className="hover:text-brightRed">Pricing</a>
               <a href="#" className="hover:text-brightRed">Products</a>
               <a href="#" className="hover:text-brightRed">About</a>
             </div>
             <div className="flex flex-col space-y-3 text-white">
               <a href="#" className="hover:text-brightRed">Careers</a>
               <a href="#" className="hover:text-brightRed">Community</a>
               <a href="#" className="hover:text-brightRed">Privacy Policy</a>
             </div>
           </div>

           <div className="flex flex-col justify-between">
             <form>
               <div className="flex space-x-3">
                 <input
                   type="text"
                   className="flex-1 px-4 rounded-full focus:outline-none"
                   placeholder="Updated in your inbox"
                 />
                 <button
                   className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                 >
                   Go
                 </button>
               </div>
             </form>
             <div className="hidden text-white md:block">
               Copyright &copy; 2022, All Rights Reserved
             </div>
           </div>
         </div>
    </footer>
    </div>
  )
}

export default Footer