import food from './../../assets/img/food.svg'
import Image from "next/image"

const Food = () => {
    return (
        <div className='container mx-auto flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>CHANNED & JARED FOOD</div>
                <div className="flex">
                    <Image alt="img" src={food} />
                </div>
            </div>
        </div>
    )
}
export default Food