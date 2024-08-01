import drink1 from './../../assets/img/drink1.png'
import drink2 from './../../assets/img/drink2.png'
import drink3 from './../../assets/img/drink3.png'
import Image from "next/image"

const Drink = () => {
    return (
        <div className='container mx-auto flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>DRINK GOOD BENERAGES</div>
                <div className="sm:flex">
                    <div className="flex justify-center sm:mb-0 mb-3">
                        <Image className='sm:w-[revert-layer] w-[50%] sm:mr-6 mr-3' alt="img" src={drink1} />
                        <Image className='sm:w-[revert-layer] w-[50%] sm:mr-6' alt="img" src={drink2} />
                    </div>
                    <Image alt="sm:w-[revert-layer] w-[100%] img" src={drink3} />
                </div>
            </div>
        </div>
    )
}
export default Drink