import React from 'react'
import CurrViol from '../../../assets/Images/CurrVio.jpg'
import '../../../scss/CurrVio/CurrVio.scss'

const CurrVio = () => {
return (
    <div>
        <div className="row">
            <div className="col CurrVio">
                <h3 className='CVHeading'>
                Currency volatility: Will US <br />
                dollar strength continue? 
                </h3>
                <p className='CVText'>
                In light of improving global growth and repricing of Fed <br />
                expectations, will the U.S. dollar sustain its strength in 2024? <br />
                And what's the outlook for other major currencies?
                </p>
                <button className='CVBtn'>
                    FIND OUT
                </button>
            </div>
            <div className="col">
                <img src={CurrViol} alt="Curr Vio" className='CurrVioImg' />
            </div>
        </div>
    </div>
)
}

export default CurrVio