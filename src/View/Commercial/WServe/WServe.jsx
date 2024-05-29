import React from 'react'
import Title from './Title/Title'
import Discover from './Discover/Discover'
import Categories from './Categories/Categories'
import '../../../scss/WServe/WServe.scss'

const WServe = () => {
return (
    <div className='gap-5 WServe'>
        <div className="row">
            <div className="col">
                <Title />
            </div>
            <div className="col">
                <Discover />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Categories />
            </div>
        </div>
    </div>
)
}

export default WServe