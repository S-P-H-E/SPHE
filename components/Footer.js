import {MdEmail} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';

import { useSpring, animated, config } from 'react-spring';

export default function Footer(){
    const logoAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 50,
      });
    const linkAnimation1 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 100,
      });
    const linkAnimation2 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 160,
      });
    const linkAnimation3 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 190,
      });

    return (
        <>
        <div className="h-[1.5px] bg-[#1A1A1A]"/>
        <div className="py-7 px-6 flex justify-between text-[#767676]">
                <p className="text-sm">© 2023 All rights reserved.</p>
            <div className="mask justify-center items-center hidden sm:flex">
                <animated.div style={linkAnimation1} onClick={() => {event.preventDefault();window.open('https://twitter.com/uisphe', "_blank");}}>
                    <button className="mx-4 hover:text-[#BDBDBD]">Twitter</button>
                </animated.div>
                    <p className="cursor-default">/</p>
                <animated.div style={linkAnimation2} onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@empire_cord', "_blank");}}>
                    <button className="mx-4 hover:text-[#BDBDBD]">TikTok</button>
                </animated.div>
                    <p className="cursor-default">/</p>
                <animated.div style={linkAnimation3} onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@PositiveMusculinity', "_blank");}}>
                    <button className="mx-4 hover:text-[#BDBDBD]">YouTube</button>
                </animated.div>
            </div>
            <div className='mask flex justify-center items-center sm:hidden'>
                <animated.div style={linkAnimation1} onClick={() => {event.preventDefault();window.open('https://twitter.com/uisphe', "_blank");}}>
                    <BsTwitter className='mx-2'/>
                </animated.div>
                
                <animated.div style={linkAnimation2} onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@empire_cord', "_blank");}}>
                    <FaTiktok className='mx-2'/>
                </animated.div>
                 
                <animated.div style={linkAnimation3} onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@PositiveMusculinity', "_blank");}}>
                    <BsYoutube className='mx-2'/>
                </animated.div>
            </div>
        </div>
        </>
    )
}