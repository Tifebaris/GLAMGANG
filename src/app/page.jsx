
'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import CountdownTimer from "./Components/CountdownTimer"
import ImageWithHover from "./Components/Hover"



 
  const kids = [

    { id: 1,  imageUrl: '/k1.jpeg', hoverImageUrl: '/k2.jpeg' },
    { id: 2,  imageUrl: '/k3.jpeg', hoverImageUrl: '/k4.jpeg' },
    { id: 3,  imageUrl: '/k5.jpeg', hoverImageUrl: '/k6.jpeg' },
  ]
  const men = [

    { id: 1,  imageUrl: '/m1.jpeg', hoverImageUrl: '/m4.jpeg' },
    { id: 2,  imageUrl: '/m2.jpeg', hoverImageUrl: '/h1.jpeg' },

  ]


export default function page() {
  return (
    <div>
       <div className="bg-[url(/back.png)] bg-no-repeat md:bg-[url(/background.png)] h-[80vh] mt-5  mix-blend-darken">
       <div className="flex flex-col justify-center  items-center h-screen row">
 <div className="hidden md:block">
 <h2 className="capitalize font-semibold text-4xl py-2 h-9 my-2">Shop authentic Nigerian brands</h2>
            <p className="capitalize text-2xl py-2 h-9 my-2">Embrace contemporary elegance</p>
 </div>
         <div className="hidden md:block">
         <a className="bg-white text-black text-sm font-bold py-3  px-2 mt-4  my-2 rounded">Shop Now</a>
         </div>
          
        </div>
       </div>
<div className="text-gray-900">
<h1 className="font-bold text-2xl text-gray-800 pt-6 pb-3">Shop New Arrivals</h1>
<div className="grid gap-1 md:grid-cols-4  grid-rows-1 px-8 ">
 <div className="flex flex-col ">
  <a className="h-[100%] w-[100%]" href="">
  <Image src='/img9.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
  </a>
  <a href="">
  <p className="text-[18px]">HERTUNBA Rolly Firefly Dress</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦32,000</p>
  </a>
 </div>
 <div className="flex flex-col">
     <a className="h-[100%] w-[100%]" href="">
     <Image src='/img10.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
     </a>
  <a href="">
  <p className="text-[18px]">MEDLIN Couture Jacket</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦45,000</p>
  </a>
 </div>
 <div className="flex flex-col">
 <a  className="h-[100%] w-[100%]" href="">
 <Image src='/img17.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
 </a>
  <a href="">
  <p className="text-[18px]">RAY & ROY Jazzy Dress</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦60,000</p>
  </a>
 </div>
 <div className="flex flex-col">
 <a className="h-[100%] w-[100%]" href="">
 <Image src='/img16.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
 </a>
  <a href="">
  <p className="text-[18px]">ASHLUXE Floral Prints</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦30,000</p>
  </a>
 </div>
 
</div>
<div className="mb-5">
<a href="" className="bg-slate-900 text-white text-sm font-bold py-3 px-3 mt-2 rounded ">View All</a>
</div>
</div>


{/* row 2 */}
<div className="text-gray-900">
<h1 className="font-bold text-2xl text-gray-800 pt-6 pb-3">Shop Women's Collection</h1>
<div className="grid gap-1 md:grid-cols-4 grid-rows-1 px-8 ">
 <div className="flex flex-col ">
  <a className="h-[100%] w-[100%]" href="">
  <Image src='/pic6.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
  </a>
  <a href="">
  <p className="text-[18px]">NIOVO Tonia Dress</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦120,000</p>
  </a>
 </div>
 <div className="flex flex-col">
     <a className="h-[100%] w-[100%]" href="">
     <Image src='/pic3.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
     </a>
  <a href="">
  <p className="text-[18px]">NIOVO Zuri Dress</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦45,000</p>
  </a>
 </div>
 <div className="flex flex-col">
 <a  className="h-[100%] w-[100%]" href="">
 <Image src='/pic7.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
 </a>
  <a href="">
  <p className="text-[18px]">LIV & EVE Custom Piece</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦245,000</p>
  </a>
 </div>
 <div className="flex flex-col">
 <a className="h-[100%] w-[100%]" href="">
 <Image src='/pic2.jpeg' width={300} height={300} className="h-[100%] w-[100%]"/>
 </a>
  <a href="">
  <p className="text-[18px]">MEDLIN Couture Suit</p>
  </a>
  <a href="">
  <p className="text-[18px]">₦95,000</p>
  </a>
 </div>
 
</div>
<div className="mb-5">
<a href="" className="bg-slate-900 text-white text-sm font-bold py-3 px-3 mt-2 rounded ">View All</a>
</div>
</div>
<div>
<CountdownTimer/>
       </div>
{/* row3 */}
       <div>
       <h1 className="font-bold text-2xl text-gray-800 pt-6 pb-3">Shop Men's Collection</h1>
       <div className="grid md:grid-cols-2 gap-8 md:items-center px-8">
  {men.map((item) => (
        <div key={item.id} className=" flex items-center justify-center px-8 flex-col pl-10">
          <ImageWithHover className="h-[100%] w-[100%] border-solid  border-4  border-cyan-500"  width={300} height={300} imageUrl={item.imageUrl} hoverImageUrl={item.hoverImageUrl} />
          <a href="">
  <p className="text-[18px]">High Fashion Bunny Hoodie & Pants </p>
  </a>
  <a href="">
  <p className="text-[18px]">135,000</p>
  </a>
        </div>
      ))}


    </div>
    <div className="mb-5 mt-4 items-center">
<a href="" className="bg-slate-900 items-center text-white text-sm font-bold py-3 px-3 mt-2 rounded ">View All</a>
</div>

      
      
       </div>


{/* row4 */}
<div>
  <h1 className="font-bold text-2xl text-gray-800 pt-6 pb-3">Shop kid's Collection</h1>
  <div className="grid md:grid-cols-3 gap-4 md:items-center px-8">
  {kids.map((item) => (
        <div key={item.id} className=" flex flex-col pl-10">
          <ImageWithHover className="h-[100%] w-[100%]"  width={300} height={300} imageUrl={item.imageUrl} hoverImageUrl={item.hoverImageUrl} />
          <a href="">
  <p className="text-[18px]">High Fashion Bunny Hoodie & Pants </p>
  </a>
  <a href="">
  <p className="text-[18px]">135,000</p>
  </a>
        </div>
      ))}
    </div>

    <div className="mb-5 mt-4">
<a href="" className="bg-slate-900 text-white text-sm font-bold py-3 px-3 mt-2 rounded ">View All</a>
</div>


    </div>
   
  </div>
 








    
    
  )
}




