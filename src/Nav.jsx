

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Header from './Header';
import HomeSlider from './Slider';
import ParaCard from './ParaCard';
import  Gallery  from './Gallery';
import Footers from './Footer';

const Nav = () => {

  return (
    <>
    <hr/>
      <Header/>
      <div className="flex justify-between items-center px-6 py-2 max-h-20 mt-3 h-screen bg-gray-100">
        {/* Left side (FRONTEND text) */}
        <div className="text-xl max-w-xs ms-48">
          <span className="text-red-500 font-bold ">FRONT</span>
         
          <span className="text-gray-700 font-bold ">END</span>
          <div> <p className='text-xs text-gray-500'>METRONIC CORPORATE</p></div>
        </div>

        {/* Right side (navigation list) */}
        <ul className="flex space-x-5 text-gray-700 me-8">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Pages</li>
          <li className="hover:text-blue-500 cursor-pointer">Multilevel</li>
          <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          <li className="hover:text-blue-500 cursor-pointer">Mega Menu</li>
          <li className="hover:text-blue-500 cursor-pointer">Admin Theme</li>

          <li className="flex items-center">
            
            <AiOutlineSearch className="ml-2 text-xl text-gray-600 hover:text-blue-500 cursor-pointer" />
          </li>
        </ul>
       
      </div>
      <HomeSlider/>
      <ParaCard/>
      <Gallery/>
      <Footers/>
      
    </>
  );
};

export default Nav;
