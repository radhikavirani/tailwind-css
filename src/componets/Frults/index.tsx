import fruits from './../../assets/img/fruits.svg'
import Image from "next/image"

const Fruits = () => {
    return ( 
        <div className='container mx-auto flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>FRESH FRUITS FROM FARM</div>
                <div className="flex">
                    <Image alt="img" src={fruits} />
                </div>
            </div>
        </div>
    )
}
export default Fruits