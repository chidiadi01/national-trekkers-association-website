import './hero.css'
import left_btn from '../../assets/chevron_left.svg'
import right_btn from '../../assets/chevron_right.svg'
import downarrow from '../../assets/arrow-downwards.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../About/About'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
    const [animClass, setAnimClass] = useState('');
    useEffect(
        ()=>{
            if(heroCount===0){
                setAnimClass('');
                console.log(animClass);
                setTimeout(() => {
                    setAnimClass('animate-text');
                    console.log(animClass);
                }, 400);
                
            } else if(heroCount===1){
                setAnimClass('');
                console.log(animClass);

                setTimeout(() => {
                    setAnimClass('animate-text');
                    console.log(animClass);
                }, 400);
            }else if(heroCount===2){
                setAnimClass('');
                console.log(animClass);

                setTimeout(() => {
                    setAnimClass('animate-text');
                    console.log(animClass);
                }, 400);
            }
        }
        , [heroCount]);

        return (
            <div className='hero'>
                <div className={`hero-text ${animClass}`}>
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className="hero-dot-play">
                    <ul className='hero-dots'>
                        <li onClick={()=>setHeroCount(0)} className={heroCount===0? 'hero-dot orange': 'hero-dot white'} ></li>
                        <li onClick={()=>setHeroCount(1)} className={heroCount===1? 'hero-dot orange': 'hero-dot white'} ></li>
                        <li onClick={()=>setHeroCount(2)} className={heroCount===2? 'hero-dot orange': 'hero-dot white'} ></li>
                    </ul>
                </div>
                <div className="explore"> 
                    <a href='#about'>
                    <img src={downarrow} alt="" />
                    </a>
                </div>
            </div>
        );
    }

export default Hero;
