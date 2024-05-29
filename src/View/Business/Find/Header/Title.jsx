import React from 'react'
import arrow from '../../../../assets/Images/arrow.png'
import '../../../../scss/Find/arrow.scss'

const Title = () => {
return (
    <div className='text-center'>
        <img src={arrow} alt='arrow' className='arrow'/>
        <h2>Let us help you find what <br />
        you're looking for</h2>
        <p className='pt-3'>To get Started, tell us a little about yourself</p>
    </div>
)
}

export default Title