'use client'
import { useState } from 'react';
import Link from "next/link"
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    

  return (
    <nav className="flex-row  ">
  <ul className="items-center py-4 flex justify-between">
            <div className="w-[150px] flex justify-around">
            <Link href="/">
              <li className="items-start text-left"><AiOutlineSearch  size={25}/></li>
              </Link>
            </div>
      <Link href="/">
        <li className="font-semibold text-gray-800 justify-center text-3xl">GLAMGANG</li>
      </Link>
   
    <div className="flex pr-5 w-[150px] justify-around">
    <Link href="/">
        <li className="items-center text-center"><AiOutlineShoppingCart size={25}/></li>
      </Link>
      <Link href="/">
        <li className=""><AiOutlineUser  size={25}/></li>
      </Link>
      <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu size={25} />
          </button>
        </div>
    </div>
  </ul>
      <ul className="flex gap-12 text-xl border-t-[1px] text-gray-700 border-gray-600 border-b-[1px] text-center py-3 justify-center capitalize h-[50px] pr-7 pt-4 items-center">

        

      <Link href='/new'>
            <li>New Arrival</li>
        </Link>
        <Link href='/women'>
            <li>Women</li>
        </Link>
        <Link href='/men'>
            <li>Men</li>
        </Link>
        <Link href='/kids'>
            <li>Kids</li>
        </Link>
        <Link href='/shoes'>
            <li>Shoes</li>
        </Link>
        <Link href='/accessories'>
            <li>Accessories</li>
        </Link>

        
        </ul>
    </nav>

  )
}
