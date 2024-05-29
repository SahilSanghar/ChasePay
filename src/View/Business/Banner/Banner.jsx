import React from 'react'
import Heading from './Heading/Heading'
import '../../../scss/Details/details.scss';
import Background from './Description/Background/Background';

const Banner = () => {
return (
    <div  className='details'>
        <hr />
        <Heading />
        <Background />
    </div>
)
}

export default Banner