import React, { Component } from 'react';
import './about.css'

//Written by Chidiadi Anyanwu

class About extends Component {
    render() {
        return (
            <div className='main-body' id='about'>
                <h2>What is the NTA?</h2>
                <p>The National Trekkers' Association is an organization committed to great 
                    <span style={{color:"#775d0e", textTransform:'uppercase'}}> leg</span>acy. It was born out of the need to
                     encourage people to trek more often to their destinations. It is a community of
                     enthusiastic trekkers that help by providing the skills, tools and training for enhanced trekking abilities
                       your feet, and your superior ability to move about with a natural vehicle.
               </p>

                <h2>The Trekking Man</h2>
                <div className="trekking-man"><img src="src/assets/trekking-man.jpg" alt="Stature of a man. Credits Pexels - Mike Birdy" /> </div>
                <p>In the early 5th century were two great thinkers. While their contemporaries pondered
                    on fickle and trivial matters like the mysteries of the cosmos and the purpose of man, these
                    extraordinary men were captivated by the art and philosophy of trekking. 
                    <br/>

                   <p> One of the men, Pedestrotus, with his weathered sandals and unwavering stride, believed
                     that the journey itself was the ultimate destination. He proposed that man was meant to
                     enjoy the very act of walking, and not to think about what destination he must go.
                    </p>
                    <p>
                     His philosophy is captured in this great quote of his: <blockquote>"Every step taken upon the land is 
                     a sacred communion with the land, a chance to discover hidden truths and connect with the 
                     divine essence of nature."</blockquote>
                    </p>
                    <p>
                      Footoclistus, on the other hand, believed that the use of any other means of transportation
                      was a testament to your weakness as a man. He also urged his followers to venture into the unknown.
                      He praised Alexander the Great for his adventurous mind and conquests, but criticised the fact
                      that Alexander didn't fight on barefoot. For him, barefooted victories were the mark of a real Hero
                      who could brave the stony lands and thorny wildernesses in conquest.
                    </p>
                    <p>
                      He started the School of Tarsals where he thought his philosophy of trekking. There, scholars gathered
                      from across the world to learn from his wisdom. In this sanctuary that followers from more recent centuries built the
                      famous Stature of the Trekking Man.
                    </p>


                </p>
            
            </div>
        );
    }
}

export default About;
