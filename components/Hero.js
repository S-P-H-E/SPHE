import {FiExternalLink} from 'react-icons/fi'
import { useSpring, animated, config } from 'react-spring';

export default function Home(){
    //Hero Animation
    const h1Animation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 1800,
      });
    const h2Animation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 2100,
      });
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(130px)' },
        to: { opacity: 3, transform: 'translateY(0)' },
        delay: 2400,
      });

    return (
        <div className="flex flex-col justify-center items-center py-40 text-[#BDBDBD]">
            <div className='mask'>
                <animated.h1 style={h1Animation} className="py-3">Hi, I'm Sphe 👋🏻</animated.h1>
            </div>
            <div className='mask h-[130px]'>
                <animated.h2 style={h2Animation} className="font-medium text-6xl text-center">Building high-converting <br/> landing pages for success coaches.</animated.h2>
            </div>
            <div className='mask transition-all hover:scale-90' >
                <animated.button style={buttonAnimation} className="m-6 p-5 px-6 rounded-md border border-[#444444] bg-[#1A1A1A] flex justify-center items-center">
                    View Portfolio
                    <FiExternalLink className='ml-2'/>
                </animated.button>
            </div>
        </div>
    )
}