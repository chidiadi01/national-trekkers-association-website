import left_btn from '@/assets/chevron_left.svg'
import right_btn from '@/assets/chevron_right.svg'
import downarrow from '@/assets/arrow-downwards.svg'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import About from './About/About'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    const [animClass, setAnimClass] = useState('');

    const herodot = 'w-[15px] h-[15px] rounded-[7.5px] shadow-lg list-none cursor-pointer';

    //Animate the text that is on the hero

    useEffect(
        () => {

            setAnimClass('');
            setTimeout(() => {
                setAnimClass('animate-slide opacity-100');
            }, 400);
        }
        , [heroCount]);

    return (

        <>
            <style>
                {`
                
                    @keyframes slide {
                    0% {
                        transform: translateX(-90px);
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.4;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    }

                    .animate-slide {
                    animation: slide 500ms ease-out forwards;
                    }
                `}
            </style>
            <div className='hero ml-0 md:ml-[100px] mt-[67px] max-[600px]:h-[380px] max-[600px]:pt-[30px] max-[600px]:pl-[10px] relative'>
                <div
                    className={`opacity-0 ${animClass} flex h-[303px] flex-col items-start justify-end text-[92px] uppercase text-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.5)] max-[600px]:h-[260px] max-[600px]:justify-start max-[600px]:text-[60px]`}
                    style={{ fontFamily: "'Bebas Neue', serif" }}
                >
                    <p className='m-0'>{heroData.text1}</p>
                    <p className='m-0'>{heroData.text2}</p>
                </div>
                <div className="hero-dot-play mt-[20px]">
                    <ul className='hero-dots flex align-center gap-[23px] justify-left px-0 py-0'>
                        <li onClick={() => setHeroCount(0)} className={`${herodot} ${heroCount === 0 ? 'bg-[#FFC107]' : 'bg-[#FFECB3]'}`} />
                        <li onClick={() => setHeroCount(1)} className={`${herodot} ${heroCount === 1 ? 'bg-[#FFC107]' : 'bg-[#FFECB3]'}`} />
                        <li onClick={() => setHeroCount(2)} className={`${herodot} ${heroCount === 2 ? 'bg-[#FFC107]' : 'bg-[#FFECB3]'}`} />
                    </ul>
                </div>
                <div className="explore flex max-[1000px]:hidden mx-auto">
                    <a href='#about' className='bg-white rounded-[50%] px-3 py-3 hover:brightness-[70%] shadow-lg mt-25 mx-auto'>
                        <ArrowDown className='text-black' />
                    </a>
                </div>
            </div>

        </>
    );
}

export default Hero;
