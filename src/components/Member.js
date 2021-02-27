import React from 'react';

const Member = (props) => {
    console.log(props.members);
    const members = props.members;
    const total = members.reduce((total,member) => total + member.salary,0).toFixed(2)
    return (
        <div className='total'>
            <h2>Total person added: {members.length}</h2>
            <h3>There total salary is: {total}</h3>
        </div>
    );
};

export default Member;