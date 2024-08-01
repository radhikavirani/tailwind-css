import kid1 from './../../assets/img/kid1.png'
import kid2 from './../../assets/img/kid2.png'
import kid3 from './../../assets/img/kid3.png'
import kid4 from './../../assets/img/kid4.png'
import Image from "next/image"

const Kid = () => {
    return ( 
        <div className='container mx-auto sm:flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>TREAT YOUR KID</div>
                <div className="sm:flex">
                    <Image className='sm:mr-3 sm:w-[revert-layer] w-[100%] m-auto sm:mb-0 mb-3' alt="img" src={kid1} />
                    <Image className='sm:ml-3 sm:w-[revert-layer] w-[100%] m-auto' alt="img" src={kid2} />
                </div>
                <div className="sm:flex sm:mt-6 mt-3">
                    <Image className='sm:mr-3 sm:w-[revert-layer] w-[100%] m-auto sm:mb-0 mb-3' alt="img" src={kid3} />
                    <Image className='sm:ml-3 sm:w-[revert-layer] w-[100%] m-auto' alt="img" src={kid4} />
                </div>
            </div>
        </div>
    )
}
export default Kid