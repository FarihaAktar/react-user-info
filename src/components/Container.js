import User from './User';
import data from '../MOCK_DATA.json';
import { useState } from 'react';
import Member from './Member';


const Container = () => {
    const [members, setMember] = useState([]);

    const btnHandler = (data) =>{
        const newMember = [...members, data]
        setMember(newMember);
        // console.log(members)
    }
    return (
        <div className='container'>
            <div className="user-container">
                {
                    data.map(user => <User btnHandler={btnHandler} user={user} key={user.id}></User>)
                }
            </div>
            <div className="member-added">
                <Member members={members}></Member>
            </div>
        </div>
    );
};

export default Container;