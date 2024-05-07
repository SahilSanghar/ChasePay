import React from 'react'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import Button from './components/Button'

const Discover = () => {
return (
<div className="container mt-3">
    <div className="row">
        <div className="col text-center pt-4 pe-0">
            <Image />
        </div>
    <div className="col pt-4">
            <Title />
            <Description />
            <div className="pt-2">
                <Button />
            </div>
            
        </div>
    </div>
    <hr className='mt-5 pt-2'/>
</div>
    
)
}

export default Discover