import React from 'react';
import compresor from '../img/compresor.jpg';
import '../styles/Banner.css';

const Banner =()=>{


    return(
        <div className='container'>
        <span className='wrap_img'>
            <img className="round_img" src={compresor} alt="round img" />
        </span>

           <h2 className='title_img'>Lorem ipsum dolor sit amet.</h2>
       </div>
    )
}

export default Banner