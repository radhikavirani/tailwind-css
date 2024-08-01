import jems1 from './../../assets/img/jems1.png'
import jems2 from './../../assets/img/jems2.png'
import jems3 from './../../assets/img/jems3.png'
import Image from "next/image"

const Jams = () => {
    return (
        <div className='container mx-auto sm:flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>FANTASTIC JAMS & PRESEEVES</div>
                <div className="sm:flex">
                    <Image className='sm:w-[revert-layer] w-[100%] sm:mr-6 sm:mb-0 mb-3' alt="img" src={jems1} />
                    <div className="flex">
                        <Image className='sm:w-[revert-layer] w-[70%] sm:mr-6 mr-3 mb-0' alt="img" src={jems2} />
                        <Image className='sm:w-[revert-layer] w-[40%]' alt="img" src={jems3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jams