import React, { useEffect, useState } from "react";
import './Membership.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




const Membership = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className='body'>
            <Navbar/>
            <div className='membership-content'>
                <h1>Membership</h1>

                <p style={{color:"green", fontWeight:"bold"}}>The names here are drawn from an API. Also, I know this page is poorly designed.
                    There should be a place to join the association.
                </p>

                    <table className='table table-hover thead dark'>
                        <thead>
                        <tr>
                            <th scope="column" >Name</th>
                            <th scope="column" >City</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr  key={user.id}>
                            <td scope="row">{user.name}</td>
                            <td>{user.address.city}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

             </div>
            <Footer/>
        </div>
    );
}

export default Membership;
