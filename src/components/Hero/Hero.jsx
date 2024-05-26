import './hero.css'
import left_btn from '../../assets/chevron_left.svg'
import right_btn from '../../assets/chevron_right.svg'
import downarrow from '../../assets/arrow-downwards.svg'
const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
        return (
            <div className='hero'>
                <div className="hero-text">
                    <p>{heroData.text1}</p>
                    <p>{heroData.text2}</p>
                </div>
                <div className="hero-dot-play">
                    <ul className='hero-dots'>
                        <li onClick={()=>setHeroCount(0)} className={heroCount===0? 'hero-dot orange': 'hero-dot white'}></li>
                        <li onClick={()=>setHeroCount(1)} className={heroCount===1? 'hero-dot orange': 'hero-dot white'}></li>
                        <li onClick={()=>setHeroCount(2)} className={heroCount===2? 'hero-dot orange': 'hero-dot white'}></li>
                    </ul>
                </div>
                <div className="explore"> 
                    <img src={downarrow} alt="" />
                </div>
            </div>
        );
    }

export default Hero;
