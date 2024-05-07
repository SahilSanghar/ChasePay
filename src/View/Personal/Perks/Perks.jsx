import React from 'react'
import Business from './Business'
import ChaseFree from './ChaseFree'
import PaySol from './PaySol'

const Perks = () => {
return (
    <div className='container text-center'>
        <div className="row">
            <div className="col"><Business /></div>
            <div className="col"><ChaseFree /></div>
            <div className="col"><PaySol /></div>
            <hr className='mt-5' />
        </div>
    </div>
)
}

export default Perks