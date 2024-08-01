import F_logo from './../../assets/img/Flogo.svg'
import icon1 from './../../assets/img/phone.svg'
import icon2 from './../../assets/img/mail.svg'
import icon3 from './../../assets/img/location.svg'
import Image from "next/image"

const Footer_tx = [
    { title: 'Healthy sweets' },
    { title: 'Healthy snacks' },
    { title: 'Beverages' },
    { title: 'Sweets' },
    { title: 'Jams & Preserves' }
]
const Footer_tx2 = [
    { title: 'Canned & Jarred food' },
    { title: 'Fresh fruits & Vegetables' },
    { title: 'Detegrents' },
    { title: 'Teas' },
    { title: 'Sale' }
]
const Footer_tx3 = [
    { title: 'Terms of service' },
    { title: 'Refund policy' },
    { title: 'Privacy police' },
    { title: 'Shipping police' }
]
const iconsData = [
    { img: icon1, title: '+971506133510' },
    { img: icon2, title: 'info@miragt.ae' },
]

const Footer = () => {
    return (
      <div className="xl:flex justify-end 2xl:w-[100%]">
          <div className="bg-box">
            <div className="md:flex">
                <div className="pb-[30px] md:pl-[50px] md:pr-[50px] pl-[30px] pr-[30px] lg:w-auto w-[80%]">
                    <Image className="mt-[32px] mb-[50px] md:pt-0 pt-[35px]" alt="img" src={F_logo} />
                    <div className="lg:flex leading-[18.50px]">
                       <div className="xl:flex">
                       <div className="text-[#022507] pr-6">
                            <div className=" Roboto_600 pb-6">CATEGORIES</div>
                            {Footer_tx.map((tx_col1) =>
                                <div className="Roboto_400 pb-4 cursor-pointer">{tx_col1.title}</div>
                            )}
                        </div>
                        <div className="text-[#022507] sm:pr-[90px] xl:pt-[42px]">
                            {Footer_tx2.map((tx_col2) =>
                                <div className="Roboto_400 pb-4 cursor-pointer">{tx_col2.title}</div>
                            )}
                        </div>
                       </div>
                        <div className="text-[#022507]">
                            <div className=" Roboto_600 pb-6 lg:pt-0 pt-6">INFO</div>
                            {Footer_tx3.map((tx_col3) =>
                                <div className="Roboto_400 pb-4 cursor-pointer">{tx_col3.title}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-primary ml-auto pt-6 pl-[30px] 2xl:pr-[100px] pr-[30px] text-white">
                    <div className=" Roboto_600 pb-6">CONTACTS</div>
                    {iconsData.map((icon) =>
                        <div className="flex mb-6 items-start">
                            <Image className="mr-1.5" alt="img" src={icon.img} />
                            <div className=" Roboto_500 cursor-pointer">{icon.title}</div>
                        </div>
                    )}
                    <div className="flex items-start">
                        <Image className="mr-1.5 min-w-6 min-h-6" alt="img" src={icon3} />
                        <div className=" Roboto_500 pb-6">Al Khaleej Al Tejari 2 St <br className="lg:block hidden"/>Business Bay - Capital Golden Tower 11th floor, <br className="lg:block hidden"/>Dubai, UAE</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Footer