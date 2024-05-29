import React from 'react'
import NetworkImg from '../../../assets/Images/Network.jpg'
import '../../../scss/Network/Network.scss'

const Network = () => {
return (
    <div>
        <div className="row network">
            <div className="col">
                <h3 className='NetTitle pt-5'>
                    Our team, clients, <br />
                    communities and <br />
                    shareholders are at <br />
                    the <span className='NetSpan'> center of <br />
                    everything we do </span>
                </h3>
                <p className='NetText pt-5'>
                    Through our tailored solutions spanning investment and <br />
                    commercial banking, payments processing and asset <br />
                    management, we're relentlessly focused on serving our <br />
                    clients globally and driving sustainable impact for our <br />
                    communities.
                </p>
                <button className='NetBtn'>
                    LEARN MORE ABOUT US
                </button>
            </div>
            <div className="col">
                <img src={NetworkImg} alt="NetworkImg" className='NetImg' />
            </div>
        </div>
    </div>
)
}

export default Network