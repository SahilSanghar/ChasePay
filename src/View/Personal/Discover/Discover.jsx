import React from 'react'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import Button from './components/Button'
import beach from '../../../assets/Images/beach.jpg'
import '../../../scss/Discover/Discover.scss'

const Discover = () => {
return (
<div className="container mt-3">
    <div className="row mb-5">
        <div className="col text-center pt-4 pe-0 me-5">
            <img src={beach} alt="Discover" className='Dis' />
        </div>
    <div className="col pt-4">
            <Title />
            <Description />
            <div className="pt-2">
                <Button />
            </div>
        </div>
    </div>
    <hr className='hr'/>
</div>
    
)
}

export default Discover