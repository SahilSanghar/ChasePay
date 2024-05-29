import React from 'react'
import Review from '../../../../assets/Images/Review.jpg'
import '../../../../scss/Review/Review.scss'

const Left = () => {
return (
    <div>
        <img src={Review} alt='Review' className='review' />
    </div>
)
}

export default Left