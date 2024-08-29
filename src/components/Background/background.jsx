import { useEffect, useState } from 'react';
import './background.css'

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2-2.jpg';
import image3 from '../../assets/image3.jpg';


const slides = [
    {
        title: "img1",
        url: image1
    },
    {
        title: "img2",
        url: image2
    },
    {
        title: "img3",
        url: image3
    }
];


const Background = ({heroCount, isChanged}) => {
    const [animateThis, setAnimateThis] = useState('');
    useEffect(
        ()=>{
            if(heroCount===0){
                setAnimateThis('');
                setTimeout(() => {
                    setAnimateThis('fade-in');
                    console.log(animateThis);
                }, 1);
            }else if(heroCount===1){
                setAnimateThis('');
                setTimeout(() => {
                    setAnimateThis('fade-in');
                    console.log(animateThis);
                }, 1);
            }else if(heroCount===2){
                setAnimateThis('');
                setTimeout(() => {
                    setAnimateThis('fade-in');
                    console.log(animateThis);
                }, 1);
            }
        }
        ,[heroCount]);
    console.log(`The image url is ${slides[heroCount].url}  and the heroCount now is ${heroCount}.`);
    return(
        <div className='background-container'>
            <img src={slides[heroCount].url} alt="" className={`background ${animateThis}`} />
        </div>        
    )
  }
  export default Background
  