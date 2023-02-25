import {MdEmail} from 'react-icons/md';
import { useSpring, animated } from 'react-spring';


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
        delay: 130,
      });
    const linkAnimation3 = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 160,
      });
      

    return (
        <>
        <div className="py-7 px-6 flex justify-between text-[#767676]">
            <div className="mask">
                <animated.div style={logoAnimation} className="border border-[#767676] px-3 py-1 rounded-full w-fit flex justify-center items-center cursor-pointer transition-all hover:bg-[#767676] hover:text-[#161616]">
                    <MdEmail size={20} className='m-1'/>
                    <button className="text-sm">Get in touch</button>
                </animated.div>
            </div>
            <div className="mask flex justify-center items-center">
                <animated.button style={linkAnimation1} className="mx-4 hover:text-[#BDBDBD]">Twitter</animated.button>
                <p className="cursor-default">/</p>
                <animated.button style={linkAnimation2} className="mx-4 hover:text-[#BDBDBD]">TikTok</animated.button>
                <p className="cursor-default">/</p>
                <animated.button style={linkAnimation3} className="mx-4 hover:text-[#BDBDBD]">YouTube</animated.button>
            </div>
        </div>
        <div className="h-[1px] bg-[#1A1A1A]"/>
        </>
    )
}