import React from 'react'
import Left from './Left'
import Right from './Right'
import Bottom from './Bottom'

const Main = () => {
return (
    <div className='grid'>
        <div className="row">
            <div className="col">
                <Left />
            </div>
            <div className="col">
                <Right />
            </div>
        </div>
    </div>
)
}

export default Main