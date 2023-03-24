import {BsCardHeading} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {FaDollarSign} from 'react-icons/fa'

import { useSpring, animated, config } from 'react-spring';

export default function Offer(){
    const headingAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 4000,
      });

    return (
        <div className="flex justify-center">
            
       <div className='text-[#BDBDBD] justify-center py-28'>
        <animated.h1 style={headingAnimation} className='font-medium text-2xl text-center py-5'>Transform your digital vision into reality</animated.h1>
        <div className="gap-6 hidden sm:flex">
            <div className="py-10">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <BsCardHeading size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">UX & UI</h1>
                    <p className="text-[#767676] text-sm">Creating user interfaces that are easy to understand, perform tasks efficiently, and provide a pleasant experience for the user.</p>
                </div>
            </div>

            <div className="py-10">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <MdWork size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">Development</h1>
                    <p className="text-[#767676] text-sm">Utilizing the latest technology and design trends to bring your unique vision to fruition.</p>
                </div>
            </div>

            <div className="py-10">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <FaDollarSign size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">Conversion</h1>
                    <p className="text-[#767676] text-sm">Using the art of copywriting to craft compelling website content that drives conversions and achieves your business goals.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center md:hidden'>
            <div className="py-5">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <BsCardHeading size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">UX & UI</h1>
                    <p className="text-[#767676] text-sm">Creating user interfaces that are easy to understand, perform tasks efficiently, and provide a pleasant experience for the user.</p>
                </div>
            </div>

            <div className="py-5">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <MdWork size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">Development</h1>
                    <p className="text-[#767676] text-sm">Utilizing the latest technology and design trends to bring your unique vision to fruition.</p>
                </div>
            </div>

            <div className="py-10">
                <div className="flex flex-col bg-[#1A1A1A] w-[300px] h-[300px] rounded-md border border-[#444444] p-4">
                    <div className="h-24 my-1 rounded-md"/>
                    <FaDollarSign size={30}/>
                    <h1 className="text-xl font-medium my-2 text-white">Conversion</h1>
                    <p className="text-[#767676] text-sm">Using the art of copywriting to craft compelling website content that drives conversions and achieves your business goals.</p>
                </div>
            </div>
        </div>
       </div>
       </div>
    )
}