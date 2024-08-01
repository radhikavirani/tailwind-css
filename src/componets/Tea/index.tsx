import tea from './../../assets/img/tea.svg'
import Image from "next/image"

const Tea = () => {
    return (
        <div className='container mx-auto flex xl:justify-end justify-center sm:mb-[60px] mb-8 lg:px-0 px-5'>
            <div>
                <div className='Roboto_600 sm:leading-[37.5px] sm:text-[32px] text-[20px] mb-[32px] sm:text-left text-center'>THE MOST HEALTHY TEA</div>
                <div className="flex">
                    <Image alt="img" src={tea} />
                </div>
            </div>
        </div>
    )
}
export default Tea