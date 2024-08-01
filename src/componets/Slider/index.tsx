"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import slider from './../../assets/img/main_slider.png'
import p1 from './../../assets/img/p1.png'
import p2 from './../../assets/img/p2.svg'
import Image from "next/image"
import 'swiper/css/navigation';
import 'swiper/css';

const Slider = () => {
    return (
        <div className='container mx-auto md:flex xl:justify-end justify-center xl:mt-0 mt-[20px] md:mb-[60px] mb-8 lg:px-0 px-5'>
            <div className='justify-center 2xl:w-[44%] xl:w-[52%] lg:w-[65%] md:w-[65.5%]'>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} navigation={true} modules={[Autoplay,Pagination, Navigation]} className="main_slider">
                    <SwiperSlide><Image className='w-[650px] rounded-[20px]' alt="img" src={slider} /></SwiperSlide>
                    <SwiperSlide><Image className='w-[650px] rounded-[20px]' alt="img" src={slider} /></SwiperSlide>
                </Swiper>
            </div>
            <div className='justify-items-center ml-3 md:block hidden'>
                <Image className='mb-3' alt="img" src={p1} />
                <Image className='mt-3' alt="img" src={p2} />
            </div>
        </div>
    )
}
export default Slider

