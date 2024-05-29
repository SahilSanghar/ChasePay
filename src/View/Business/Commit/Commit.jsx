import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'

const Commit = () => {
return (
<div className="container mt-5">
    <div className="row mt-5">
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

export default Commit