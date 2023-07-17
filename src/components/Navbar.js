import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [nav_visible, setnav_visible] = useState(false);
  useEffect(() => {
      const nav_list = document.getElementById('nav');
        if (nav_list.classList.contains('hidden') & nav_visible){
            nav_list.classList.remove('hidden');
            nav_list.style.animation = 'left_appear 1s';
        }
        else{
            nav_list.style.animation = '';
            setTimeout(() => {
                nav_list.style.animation = 'left_appear 1s reverse';
            }, 1);
            setTimeout(() => {
                nav_list.classList.add('hidden');
            }, 1000);
    }
    },)
  return (
    <>
    <header className="z-10 h-20 flex items-center text-center justify-start px-4 bg-blue-200 relative">
        <div className="md:hidden p-1 h-15 w-15 flex justify-center rounded-xl items-center cursor-pointer flex-wrap bg-white border-4 border-blue-400"
            onClick={() =>{setnav_visible((nav_visible)? false : true)}}
            >
            <span className="bg-blue-300 h-1 w-7_5 rounded-xl"></span>
            <span className="bg-blue-300 h-1 w-7_5 rounded-xl"></span>
            <span className="bg-blue-300 h-1 w-7_5 rounded-xl"></span>
        </div>
        <h1 className="font-cur md-700:text-5xl text-3xl md:mx-0 mx-4">Bakers Heaven</h1>
        <ul id="nav"
            className="hidden md:w-auto w-56 md:flex rounded-3xl border-white border-2 md:border-0 md:static absolute left-4 -bottom-52 md:z-0 -z-10 bg-inherit md:bg-transparent">
            <li
                className="md:mx-4 mx-12 md:w-auto w-32 my-5 px-2 rounded-full hover:scale-125 hover:bg-white cursor-pointer duration-700">
                <Link to={`/`}>HOME</Link></li>   
            <li
                className="md:mx-4 mx-12 md:w-auto w-32 my-5 px-2 rounded-full hover:scale-125 hover:bg-white cursor-pointer duration-700">
                <Link to={`/Menu`}>MENU</Link></li>
            <li
                className="md:mx-4 mx-12 md:w-auto w-32 my-5 px-2 rounded-full hover:scale-125 hover:bg-white cursor-pointer duration-700">
                <Link to={`/About`}>ABOUT US</Link></li>
            <li
                className="md:mx-4 mx-12 md:w-auto w-32 my-5 px-2 rounded-full hover:scale-125 hover:bg-white cursor-pointer duration-700">
                <a href={"#footer"}>CONTACT US</a></li>
        </ul>
        {/* <button className=" bg-white p-2 rounded-xl ml-auto cursor-pointer">CART</button> */}
    </header>
    </>
  )
  
}
