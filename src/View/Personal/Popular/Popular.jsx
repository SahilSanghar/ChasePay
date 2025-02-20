import React from 'react'
import Title from './components/Title'
import Description from './components/Description'
import Button from './components/Button'
import Image from './components/Image.jsx'
import enjoy from '../../../assets/Images/Enjoy.png'
import '../../../scss/Discover/Discover.scss'

const Popular = () => {
return (
<div className="container mt-3">
    <div className="row">
        <div className="col pt-4">
            <Title />
            <Description />
            <div className="pt-2">
                <Button />
            </div>
        </div>
        <div className="col text-center pt-4 pe-0 ms-5">
            <img src={enjoy} alt="Discover" className='Dis' />
        </div>
    </div>
    <br />
    <hr className='hr'/>
</div>
    
)
}

export default Popular