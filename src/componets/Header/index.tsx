import { MagnifyingGlassIcon} from "@heroicons/react/16/solid"
import logo from './../../assets/img/logo.svg'
import cart from './../../assets/img/cart.svg'
import log_in from './../../assets/img/login.svg'
import Image from "next/image"

const Header = () => {
    return (
        <div className="relative z-10">
            <div className="border-b-[1px] border-primary fixed top-0 left-0 right-0 bg-white lg:px-0 px-5">
                <div className="container mx-auto">
                    <div className="h-[100px] flex items-center justify-between px-5">
                        <div className="sm:relative absolute">
                            <Image className="sm:w-[168px] w-[125px]" alt="img" src={logo} />
                        </div>
                        <div className="flex ml-[20px] sm:relative absolute sm:right-[initial] right-5">
                            <label className="relative block sm:block hidden">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-[12px]">
                                    <MagnifyingGlassIcon className="w-[24px] h-[24px] text-[#4A4A4A]" />
                                </span>
                                <input className="placeholder:text-color block bg-secondary lg:w-[286px] h-[44px] w-[200px] rounded-xl py-[12.6px] pl-[48px] focus:outline-none" placeholder="Search" type="text" name="search" />
                            </label>

                            <label className="relative sm:hidden block flex items-center justify-center">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 ">
                                    <MagnifyingGlassIcon className="w-[50px] h-[44px] text-[#4A4A4A] bg-secondary p-[10px] rounded-xl" />
                                </span>
                                <input className="placeholder:rounded-xl h-[44px] w-[50px]
                                              focus:outline-none 
                                              focus:rounded-xl 
                                              focus:w-[165px] 
                                              focus:pl-[50px]
                                              focus:bg-secondary"

                                    placeholder="Search" type="text" name="search" />
                            </label>

                            <button className="flex items-center md:justify-normal justify-center bg-secondary md:w-[132px] h-[44px] w-[50px] rounded-xl md:ml-[32px] ml-[10px] md:pl-[16px]">
                                <Image alt="img" src={cart} />
                                <span className="pl-[14px] md:block hidden text-color Roboto_400">Cart</span>
                            </button>
                            <button className="flex items-center md:justify-normal justify-center bg-secondary border-2 border-primary md:w-[112px] h-[44px] w-[50px] rounded-xl md:ml-[32px] ml-[10px] md:pl-[7px]">
                                <Image alt="img" src={log_in} />
                                <span className="pl-[12px] md:block hidden text-color Roboto_400">Log in</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header