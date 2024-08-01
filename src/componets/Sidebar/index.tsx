"use client"
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'
import img1 from './../../assets/img/img1.svg'
import img2 from './../../assets/img/img2.svg'
import img3 from './../../assets/img/img3.svg'
import img4 from './../../assets/img/img4.svg'
import img5 from './../../assets/img/img5.svg'
import img6 from './../../assets/img/img6.svg'
import img7 from './../../assets/img/img7.svg'
import img8 from './../../assets/img/img8.svg'
import img9 from './../../assets/img/img9.svg'
import img10 from './../../assets/img/img10.svg'
import Image from "next/image"

const iconsData = [
    { img: img1, title: 'FRESH FRUITS & VEGETABLES' },
    { img: img2, title: 'HEALTHY SWEETS' },
    { img: img3, title: 'HEALTY SNACKS' },
    { img: img4, title: 'TEAS' },
    { img: img5, title: 'SWEETS' },
    { img: img6, title: 'BEVERAGES' },
    { img: img7, title: 'JAMS & PRESERVES' },
    { img: img8, title: 'CANNED & JARRED FOOD' },
    { img: img9, title: 'CHEMICALS' },
    { img: img10, title: 'SALE' },
]

const Sidebar = () => {

    const [open, setOpen] = useState(false)
    console.log(open, 'open')
    return (
        <div className='xl:sticky top-[140px] container mx-auto z-[-1] h-[145px]'>
            <Bars3Icon onClick={() => setOpen(!open)} className="w-[70px] h-[70px] xl:hidden block mt-[15px] fixed top-[80px] z-[4] bg-white p-[20px]" />
                <div className={`bg-white ${open ? '2xl:w-[360px] w-[315px] mt-[100px] pt-[68px] pl-14 fixed z-[2] left-0' : 'xl:block hidden 2xl:w-[315px] w-[225px] pr-7'}`}>
                    {iconsData.map((img_tx) =>
                        <div className='flex items-center mb-[16px]'>
                            <Image className="w-[46px] h-[46px]" alt="img" src={img_tx.img} />
                            <span className='Roboto_600 leading-[18.75px] ml-3'>{img_tx.title}</span>
                        </div>
                    )}
                </div>
        </div>
    )
}
export default Sidebar