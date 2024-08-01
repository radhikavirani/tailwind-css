import img1 from './../../assets/img/chemicals1.png'
import img2 from './../../assets/img/chemicals2.png'
import Image from "next/image"

const Chamicals = () => {
    return (
        <div className='container mx-auto sm:flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>CHEMICALS</div>
                <div className="sm:flex">
                    <Image className='sm:w-[revert-layer] w-[100%] sm:mr-6 m-auto sm:mb-0 mb-3' alt="img" src={img1} />
                    <Image className="sm:w-[revert-layer] w-[100%] m-auto" alt="img" src={img2} />
                </div>
            </div>
        </div>
    )
}
export default Chamicals