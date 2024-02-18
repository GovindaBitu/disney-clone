import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { HiMiniHome, HiOutlinePlus, HiMiniRadio } from "react-icons/hi2";
import { HiSearch, HiStar, HiDotsVertical } from "react-icons/hi";
import { PiFilmReelFill } from "react-icons/pi";
import HeaderItem from './HeaderItem';
const Header = () => {
const [toggle, setToggle] =useState(false);

    const menu = [
        {
            name: 'HOME',
            icon: HiMiniHome
        },
        {
            name: 'SEARCH',
            icon: HiSearch
        },
        {
            name: 'WATCHLIST',
            icon: HiOutlinePlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiMiniRadio
        },
        {
            name: 'SERIES',
            icon: PiFilmReelFill
        }
    ]
    return (
        <div className='flex items-center justify-between p-2'>
            <div className='flex items-center gap-8'>
                <img src={logo} alt='' className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem Name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden flex gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem Name={''} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem Name={''} Icon={HiDotsVertical} />
                   {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                        {menu.map((item, index) => index >2 && (
                            <HeaderItem Name={item.name} Icon={item.icon} />
                        ))}
                    </div> :null }
                </div>
            </div>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" className='w-[40px] h-[40px] ' alt="" />
        </div>
    )
}

export default Header
