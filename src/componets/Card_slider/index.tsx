"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'
import card1 from './../../assets/img/card1.png'
import card2 from './../../assets/img/card2.png'
import card3 from './../../assets/img/card3.png'
import Image from 'next/image'
import 'swiper/css/navigation';
import 'swiper/css';

const cardData = [
    { img: card1, title1: '8.00 AED', title2: '18.00 AED', tx1: 'Protein Bar Chocolate', tx2: 'Fitroo by Khabib Nurmagomedov', tx3: '50g' },
    { img: card2, tx_black: '18.00 AED', tx1: 'Caramel Corn & Rice Crispbreads', tx2: 'Dr.Korner', tx3: '90g' },
    { img: card3, tx_black: '11.00 AED', tx1: 'Buckwheat Chocolate With Coconut', tx2: 'Natures own factory', tx3: '90g' },
    { img: card1, title1: '8.00 AED', title2: '18.00 AED', tx1: 'Protein Bar Chocolate', tx2: 'Fitroo by Khabib Nurmagomedov', tx3: '50g' },
    { img: card2, tx_black: '18.00 AED', tx1: 'Caramel Corn & Rice Crispbreads', tx2: 'Dr.Korner', tx3: '90g' }
]
const Card_slider = () => {
    return (
        <div className='container mx-auto flex justify-end md:mb-[60px] mb-[30px] md:mt-[60px] mt-[40px]'>
            <div className="2xl:w-[66%] xl:w-[78%] w-[100%]">
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center lg:px-0 px-5'>TOP SELLING PRODUCTS</div>
                <Swiper slidesPerView={5} spaceBetween={30} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false, }} navigation={true} modules={[Autoplay, Navigation]} breakpoints={{
                     0: { slidesPerView: 1, spaceBetween: 0, },
                     385: { slidesPerView: 2, spaceBetween: 0, },
                     600: { slidesPerView: 3, spaceBetween: 0, },
                     768: { slidesPerView: 4, spaceBetween: 0, },
                     1024: { slidesPerView: 5, spaceBetween: 0, },
                     1280: { slidesPerView: 5, spaceBetween: 0, },
                     1536: { slidesPerView: 5, spaceBetween: 0, }
                }} className="cardSwiper">
                    {cardData.map((card) =>
                        <SwiperSlide>
                            <div className="w-[180px] h-[320px] bg-box rounded-[20px] ml-3 mr-3">
                                <Image className='m-auto mt-2' alt="img" src={card.img} />
                                <div className='ml-[11px] mr-[7px] mt-2'>
                                    {card.title1 && <div className='text-red-600 Roboto_600 mb-2'>{card.title1}<span className='Roboto_400 text-[#55555582] line-through ml-[10px]'>{card.title2}</span></div>}
                                    {card.tx_black && <div className='text-[#555555] Roboto_600 mb-2'>{card.tx_black}</div>}
                                    <div className='mb-3 Roboto_500 text-sm text-[#555555] leading-[16.41px]'>{card.tx1}</div>
                                    <div className='mb-1.5 Roboto_400 text-[#555555] leading-[16.8px]'>{card.tx2}</div>
                                    <div className='mb-[17px] text-[#919191] text-sm Roboto_400 leading-[14.6px]'>{card.tx3}</div>
                                </div>
                                <button className='w-[160px] h-[40px] rounded-[10px] bg-white m-auto flex items-center justify-center Roboto_600 text-[#555555] shadow-2xl hover:bg-slate-100'>ADD TO CART</button>
                            </div>
                        </SwiperSlide>
                    )}
                    {cardData.map((card) =>
                        <SwiperSlide>
                            <div className="w-[180px] h-[320px] bg-box rounded-[20px] ml-3 mr-3">
                                <Image className='m-auto mt-2' alt="img" src={card.img} />
                                <div className='ml-[11px] mr-[7px] mt-2'>
                                    {card.title1 && <div className='text-red-600 Roboto_600 mb-2'>{card.title1}<span className='Roboto_400 text-[#55555582] line-through ml-[10px]'>{card.title2}</span></div>}
                                    {card.tx_black && <div className='text-[#555555] Roboto_600 mb-2'>{card.tx_black}</div>}
                                    <div className='mb-3 Roboto_500 text-sm text-[#555555] leading-[16.41px]'>{card.tx1}</div>
                                    <div className='mb-1.5 Roboto_400 text-[#555555] leading-[16.8px]'>{card.tx2}</div>
                                    <div className='mb-[17px] text-[#919191] text-sm Roboto_400 leading-[14.6px]'>{card.tx3}</div>
                                </div>
                                <button className='w-[160px] h-[40px] rounded-[10px] bg-white m-auto flex items-center justify-center Roboto_600 text-[#555555] shadow-2xl hover:bg-slate-100'>ADD TO CART</button>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}
export default Card_slider