import React from 'react'
import '../../../scss/Numbers/Numbers.scss'

const Numbers = () => {
return (
    <div className='grid numbers'>
        <div className="row">
            <div className="col pe-5 me-5">
                <h1 className='Hund'>100+</h1>
                <p className='NumText'>COUNTRIES WHERE COMMERCIAL BANKING OPERATES</p>
            </div>
            <div className="col ps-5 ms-5">
                <h1 className='Fif'>~55K</h1>
                <p className='NumText'>NUMBER OF COMMERCIAL BANKING CLIENTS</p>
            </div>
        </div>
    </div>
)
}

export default Numbers