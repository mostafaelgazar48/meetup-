import React from 'react';

const MeetupDetail = (props) => {
    return (
        <>
            <img src={props.image} />
            <h2> {props.title}</h2>
            <address> {props.address}</address>
            <p> {props.description}</p>
        </>
    );
};

export default MeetupDetail;