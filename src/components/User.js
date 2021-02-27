import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const User = (props) => {
    const { first_name, last_name, email, occupation, country, phone, city, salary, image } = props.user;
    const btnHandler = props.btnHandler;
    return (
        <div className='user'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="user-info">
                <h4>First Name:  <span className='text'>{first_name}</span></h4>
                <h4>Last Name:  <span className='text'>{last_name}</span></h4>
                <h4>Country:  <span className='text'>{country}</span></h4>
                <h4>City:  <span className='text'>{city}</span></h4>
                <h4>Occupation:  <span className='text'>{occupation}</span></h4>
                <h4>Salary:  <span className='text'> ${salary}</span></h4>
                <h4>Email:  <span className='text'>{email}</span></h4>
                <h4>Phone:  <span className='text'>{phone}</span></h4>
                <button onClick={() => btnHandler(props.user)} className='btn'> <FontAwesomeIcon icon={faUserPlus}/>Add</button>

            </div>
        </div>
    );
};

export default User;