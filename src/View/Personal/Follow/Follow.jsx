import React from 'react'
import Title from './Title/Title'
import SMIcons from './Social-Media/SMIcons'
import '../../../scss/Follow/Follow.scss'

const Follow = () => {
return (
    <div className='follow d-flex gap-3'>
        <Title />
        <SMIcons />
    </div>
)
}

export default Follow