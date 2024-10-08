import React, { Component } from 'react';
import './about.css'
import trekimage from '../../assets/trekking-man.jpg'
import FictionModal from '../Modal/modal';

//Written by Chidiadi Anyanwu

class About extends Component {
    render() {
        return (
            <div className='main-body' id='about'>
                <h2>What is the NTA?</h2>
                <p><i>The National Trekkers' Association</i> is an organization committed to great 
                    <span style={{color:"#775d0e", textTransform:'uppercase'}}> leg</span>acy. It was born out of the need to
                     encourage people to trek more often to their destinations. It is a community of
                     enthusiastic trekkers that help by providing the skills, tools and training to enhance trekking abilities
                     and foster the superior ability to move about with your God-given vehicle.
               </p>

                <h2>The Trekking Man</h2>
                <div className="trekking-man"><img src={trekimage} alt="Stature of a man. Credits Pexels - Mike Birdy" /> </div>
                <p>Pedestro and Footilius were two great thinkers. In the early 5th century, they walked the surface of the earth.
                  While their contemporaries pondered on fickle and trivial matters like the meaning of life and the mysteries of the cosmos, 
                  these men were enthralled by the profound wonders of trekking.
                    <br />
                    <br />

                   <p>Pedestro, with his well-trodden sandals and bony legs, believed
                     that the journey itself was the ultimate destination. He proposed that man was meant to
                     enjoy the very act of walking, and not to think of what destination he must go.
                    </p>
                    <p>
                     His philosophy is captured in this great quote of his: <blockquote>"Every step taken upon the land is 
                     a sacred communion with the land, a chance to discover hidden truths and connect with the 
                     divine essence of nature."</blockquote>
                    </p>
                    <p>
                      Footilius, on the other hand, believed that the use of any other means of transportation
                      was a testament to your weakness as a man. He also urged his followers to venture into the unknown.
                      He praised Alexander the Great for his adventurous mind and conquests, but suggested that his heroism was greatly diminished
                      because he wore sandals which prevented him from planting his footprints in the sands of time.
                      For Footilius, barefooted victories were the mark of a real Hero who could brave the stony lands and thorny wildernesses in conquest.
                    </p>
                    <p>
                      He started the <i>School of Trudgery</i> where he thought his philosophy of trekking. There, scholars gathered
                      from across the world to learn from his wisdom. It was in this sanctuary that followers erected the
                      famous <i>Stature of the Trekking Man.</i>
                    </p>


                </p>
                <FictionModal />
            </div>
        );
    }
}

export default About;
