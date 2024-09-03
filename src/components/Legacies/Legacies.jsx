import React from 'react';
import './legacies.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import footprint from '../../../public/footprint.svg';

const Legacies = () => {
    return (
        <div className='body'>
             <Navbar/>
             <div className='leg'>
                <h1>Legacies</h1>
                <p>Celebrate the great heros who have put their footprints on the sands of time. </p>
                <table className='table table-hover thead dark'>
                    
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='column'>#</th>
                                <th scope='column'>Name</th>
                                <th scope='column'>Legacy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Emeka</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;1 509 678 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Victor</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;500 000 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>Mezie</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;465 233 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>Josiah</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;334 052 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>5</th>
                                <td>John</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;330 000 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>6</th>
                                <td>Hillary</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;200 000 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>7</th>
                                <td>Joseph</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;198 994 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>8</th>
                                <td>Tunde</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;198 927 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>9</th>
                                <td>Obinna</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;105 000 km</td>
                            </tr>
                            <tr>
                                <th scope='row'>10</th>
                                <td>Greg</td>
                                <td><img src={footprint} height='24px' color='black'/> &nbsp;95 428 km</td>
                            </tr>
                        </tbody>
                </table>
                <a className='credits' href='https://dryicons.com/free-icons/footprint'> Icon by Dryicons </a>
             </div>
            
            <Footer/>
        </div>
    );
}

export default Legacies;
