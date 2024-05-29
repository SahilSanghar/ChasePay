import React from 'react'
import Name from './Name/Name'
import About from './About/About'

const Footer = () => {
return (
    <div className='grid mt-5 mx-5 ps-2'>
        <div className="row">
            <div className="col">
                <Name />
            </div>
            <div className="col">
                <About />
            </div>
        </div>
    </div>
)
}

export default Footer