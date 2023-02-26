import {MdEmail} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';

export default function Footer(){
    return (
        <>
        <div className="h-[1.5px] bg-[#1A1A1A]"/>
        <div className="py-7 px-6 flex justify-between text-[#767676]">
                <p className="text-sm">© 2023 All rights reserved.</p>
                <div className="mask justify-center items-center hidden sm:flex">
                <div>
                    <button className="mx-4 hover:text-[#BDBDBD]">Twitter</button>
                </div>
                    <p className="cursor-default">/</p>
                <div>
                    <button className="mx-4 hover:text-[#BDBDBD]">TikTok</button>
                </div>
                    <p className="cursor-default">/</p>
                <div>
                    <button className="mx-4 hover:text-[#BDBDBD]">YouTube</button>
                </div>
            </div>
            <div className='flex justify-center items-center sm:hidden'>
                <BsTwitter className='mx-2'/>
                <FaTiktok className='mx-2'/>
                <BsYoutube className='mx-2'/>
            </div>
        </div>
        </>
    )
}