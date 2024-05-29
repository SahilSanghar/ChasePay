import React from 'react'
import Title from './components/Title'
import Description from './components/Description'
import Button from './components/Button'
import Image from './components/Image.jsx'


const Saving = () => {
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
    <hr className='hr'/>
</div>
    
)
}

export default Saving