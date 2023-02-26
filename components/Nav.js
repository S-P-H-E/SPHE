import {MdEmail} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';
import { useSpring, animated, config } from 'react-spring';


export default function Nav(){

    // Navbar Animation
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

    const email = 'sphe.g.personal@gmail.com';

    const emailBTN = () => {
        window.location.href = `mailto:${email}`;
    };
      

    return (
        <>
        <div className="py-7 px-6 flex justify-between text-[#767676]">
            <div className="mask transition-all">
                <animated.div style={logoAnimation} onClick={emailBTN} className="border border-[#767676] px-3 py-1 rounded-full w-fit flex justify-center items-center cursor-pointer transition-all hover:bg-[#767676] hover:text-[#161616]">
                    <MdEmail size={20} className='m-1'/>
                    <button className="text-sm">Get in touch</button>
                </animated.div>
            </div>
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
        <div className="h-[1px] bg-[#1A1A1A]"/>
        </>
    )
}