import {HiOutlineMail} from 'react-icons/hi'

export default function Contact(){
    return (
        <>
            <div className="h-[1.5px] bg-[#1A1A1A]"/>
            <div className="py-20 flex flex-col justify-center items-center text-[#BDBDBD]">
                <h1 className='font-medium text-5xl text-center my-10'>Tell me about your next project</h1>
                <button className="m-6 p-5 px-6 rounded-md border border-[#444444] bg-[#1A1A1A] flex justify-center items-center transition-all hover:scale-90">
                Get in touch
                <HiOutlineMail className='ml-2'/>
                </button>
            </div>
        </>
        
    )
}