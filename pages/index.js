import React from 'react';
import MeetupList from '../components/meetups/MeetupList'
const dummmy= [
    {
    id:"1",
    title:"meetup for  javascript",
    image:"https://picsum.photos/id/237/200/300",
    address:"tanta saed st",
    description:"this is a meetup  to related things about js "
},{
    id:"2",
    title:"meetup for  javascript",
    image:"https://picsum.photos/id/237/200/300",
    address:"tanta saed st",
    description:"this is a meetup  to related things about js "
},{
    id:"3",
    title:"meetup for  javascript",
    image:"https://picsum.photos/id/237/200/300",
    address:"tanta saed st",
    description:"this is a meetup  to related things about js "
}]

const HomePage = (props) => {
  
    return (
        <>
        <h2> hello  mariomty i wanna say  that i love you too much ❤❤</h2>
          {/* <MeetupList meetups={props.meetups}/>   */}
        </>
    );
};

export async function getStaticProps(){
    return{
        props:{
            meetups:dummmy
        }
    }
}

export default HomePage;