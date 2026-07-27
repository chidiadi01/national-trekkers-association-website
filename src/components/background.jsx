import { useEffect, useState } from 'react';

import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2-2.jpg';
import image3 from '@/assets/image3.jpg';

//Written by Chidiadi
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


const Background = ({ heroCount, isChanged }) => {
    const [animateThis, setAnimateThis] = useState('');

    //When heroCount changes, clear classes and fade-in

    useEffect(() => {
        setAnimateThis('');

        setTimeout(() => {
            setAnimateThis('fade-in');
        }, 1);
    }, [heroCount]);

    console.log(`The image url is ${slides[heroCount].url}  and the heroCount now is ${heroCount}.`);
    return (
        <>
            <style>
                {`
            
                    @keyframes fadeIn {
                        0% {opacity: 0;}
                        100% {opacity: 1;}
                    }

                    .fade-in {
                        animation: fadeIn 400ms ease-in-out;
                    }
            
                `}
            </style>
            <div className='background-container h-[80vh] md:h-[90vh] w-full z-[-5] absolute'>
                <img src={slides[heroCount].url} alt="" className={`background ${animateThis} h-full w-full mx-auto object-cover z-[5] brightness-[70%] max-[1000px]:h-[500px] max-[600px]:h-[387px] max-[600px]:brightness-[65%]`} />
            </div>

        </>
    )
}
export default Background
