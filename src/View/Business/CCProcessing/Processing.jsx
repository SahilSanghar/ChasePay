import React from 'react'
import Details from './Details/Details'
import '../../../scss/CCProcessing/Processing.scss'
import Image from './Image/Image'
const Processing = () => {
return (
    <div className='bg grid mx-5 px-3'>
        <div className="row">
            <div className="col">
                <Details />
            </div>
            <div className="col">
                <Image />
            </div>
        </div>
    </div>
)
}

export default Processing