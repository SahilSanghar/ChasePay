import React from 'react'
import house from '../../../../assets/Images/house.png'
import '../../../../scss/Footer/Message.scss'

const Message = () => {
return (
    <div className='text-center mt-4'>
        <p className='message'>
            <span className='pe-2'>
                <img src={house} alt="house" className='opacity-100 house'/>
            </span>
                Equal Housing Opportunity
        </p>
    </div>
)
}

export default Message