import React from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './activities.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Activities = () => {
    const cardimg= '../../src/assets/card-image.jpg';
    return (
        <div className='body'>
            <Navbar/>
            <div className="activities">
            <h1>Activities</h1>
             <div className="card-container d-flex gap-3 flex-wrap justify-content-between">
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Trek-loss</h5>
                        <p className="card-text">Trek-loss is our yearly event where we gather 
                        at an exotic island and wander aimlessly till we're lost.</p>
                        <a href="" className="btn btn-primary">See more</a>
                    </div>
                </div>
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..."/> 
                    <div className="card-body">
                        <h5 className="card-title">TrekConf '24</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Beatae sapiente odio, corrupti eos ex recusandae molestiae ullam tempora dolorum nesciunt
                         non nam repellendus. </p>
                        <a href="" className="btn btn-primary">See more</a>
                    </div>
                </div>
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Leg-natomy</h5>
                        <p className="card-text">We frequently hold talks and lectures on the anatomy
                        of the leg and foot, and how to take care of your legs for more on-foot adventures.</p>
                        <a href="" className="btn btn-primary">See more</a>
                    </div>   
                </div>
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Brisk-Walkathon</h5>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Aut, fugiat explicabo blanditiis facere, erro</p>
                        <a href="" className="btn btn-primary">See more</a>
                    </div>
                </div>
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Foot-The-Bills</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Suscipit natus eveniet voluptatibus mollitia quidem dolorem.
                         Voluptatem recusandae consequuntur doloremque adipisci!</p>
                        <a href="" className="btn btn-primary">See more</a>
                    </div>
                </div>
                <div className='card'>
                    <img src={cardimg} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">The LEGacies Contest</h5>
                        <p className="card-text">See the great men and women who have imprinted footprints
                        in the sands of time in our famous LEGacies contest. Our current title holder is 
                        Emeka with a legacy of 6700km.</p>
                        <Link to="/legacies" className="btn btn-primary">See more</Link>
                    </div>   
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default Activities;
