import React from 'react'
import piggy from '../../../../assets/Images/piggy.png'
import '../../../../scss/Components/Image.scss'
const Image = () => {
return (
    <div className='NChase'>
        <img src={piggy} alt='piggy' className='savings'/>
    </div>
)
}

export default Image