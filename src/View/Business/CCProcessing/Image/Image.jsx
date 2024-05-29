import React from 'react'
import card from '../../../../assets/Images/card.jpg'
import '../../../../scss/CCProcessing/Image.scss'

const Image = () => {
return (
    <div className='CCP'>
        <img src={card} alt="Card" />
    </div>
)
}

export default Image