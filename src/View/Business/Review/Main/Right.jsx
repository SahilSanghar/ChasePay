import React from 'react'
import path from '../../../../assets/arrow-right.svg'

const Right = () => {
return (
    <div className='mt-5'>
        <p className='pt-5 fs-5'>Chase for Business customer</p>
        <h3 className='pt-2'>Eileen Ray, Co-Founder, Little <br />
        Seed Farm</h3>
        <br /><br />
        <p className='fs-5'>"Whether it's for personal or business, we trust Chase for <br />
        all our financial needs. Our banker is interested in our <br />
        business and provides us the guidance and products we <br />
        need to grow our business."</p>
        <br />
        <p className='fs-5'>
        <u>Read the story</u>
        <img src={path} className='arrow-r'/>
        </p>
    </div>
)
}

export default Right