import React from 'react'
import house from '../../../../assets/Images/house.png'

const Message = () => {
return (
    <div className='text-center mt-4'>
        <p>
            <span className='pe-2'>
                <img src={house} alt="house" className='opacity-100'/>
            </span>
                Equal Housing Opportunity
        </p>
    </div>
)
}

export default Message