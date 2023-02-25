import Image from "next/image";
import Link from "next/link";
import {MdEmail} from 'react-icons/md';

export default function Footer(){
    return (
        <>
        <div className="h-[1.5px] bg-[#1A1A1A]"/>
        <div className="py-7 px-6 flex justify-between text-[#767676]">
                <p className="text-sm">© 2023 All rights reserved.</p>
            <div className="flex justify-center items-center">
                <button className="mx-4 hover:text-[#BDBDBD]">Twitter</button>
                <p className="cursor-default">/</p>
                <button className="mx-4 hover:text-[#BDBDBD]">TikTok</button>
                <p className="cursor-default">/</p>
                <button className="mx-4 hover:text-[#BDBDBD]">YouTube</button>
            </div>
        </div>
        </>
    )
}