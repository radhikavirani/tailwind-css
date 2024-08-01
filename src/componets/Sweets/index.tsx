import frame1 from './../../assets/img/frame1.png'
import frame2 from './../../assets/img/frame2.png'
import frame3 from './../../assets/img/frame3.png'
import frame4 from './../../assets/img/frame4.png'  
import Image from "next/image"

const Sweets = () => {
    return (
        <div className='container mx-auto flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>HEALTHY SWEETS - HEALTHIER BODY</div>
                <div className="sm:flex block lg:grid-cols-2 justify-items-center">
                    <Image className='sm:mr-3' alt="img" src={frame1} />
                    <Image className='sm:ml-3 sm:w-[revert-layer] w-[100%] sm:mt-0 mt-3' alt="img" src={frame2} />
                </div>
                <div className="sm:flex block justify-items-center sm:mt-6 mt-3">
                    <Image className='sm:mr-3 sm:w-[revert-layer] w-[100%]' alt="img" src={frame3} />
                    <Image className='sm:ml-3 sm:w-[revert-layer] w-[100%] sm:mt-0 mt-3' alt="img" src={frame4} />
                </div>
            </div>
        </div>
    )
}
export default Sweets