import React from 'react'
import '../../../scss/perks/card.scss'

const Business = () => {
return (
    <div className="card">
            <h5 className="card-header">
                Business <br />
                Complete <br />
                Checking
            </h5>
        <div className="card-body">
            <h5 className="card-title">
                $300 for new buisness <br />
                checking customers 
            </h5>
            <p className="card-text">
                Get $300 when you open a Chasepay Business
                Complete Checking&reg; account. <i>Qualifying
                activities apply.</i>
            </p>
            <a href="#" className="btn btn-primary">Open now</a>
        </div>
    </div>
)
}

export default Business