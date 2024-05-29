import React from 'react'
import WP1 from '../../../assets/Images/WP1.jpg'
import WP2 from '../../../assets/Images/WP2.jpg'
import '../../../scss/BankInvest/BankInvest.scss'

const Wealth = () => {
return (
    <div className='grid BIMain'>
        <div className="row">
        <div className="col">
            <div class="card">
                    <img class="card-img-top" src={WP1} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">WEALTH PLANNING</h5>
                    <p class="card-text">You can't always get what you want: Talking with children about wealth and entitlement</p>
                    <h6 class="card-subtitle mb-2">May 22, 2024</h6>
                    <a href="#" class="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>

        <div className="col">
        <div class="card">
                    <img class="card-img-top" src={WP2} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">REAL ESTATE</h5>
                    <p class="card-text">Innovative financing for workforce housing</p>
                    <h6 class="card-subtitle mb-2">May 22, 2024</h6>
                    <a href="#" class="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>

            <div className="col">
                <div>
                    <p>WEALTH PLANNING</p>
                    <p>Wesley P Brewer Summer <br />
                    Reading List 2024</p>
                    <button>Read more</button>
                </div>

                <div>
                    <p>WEALTH PLANNING</p>
                    <p>How to successfully gift to <br />
                    heirs</p>
                    <button>Read more</button>
                </div>

                <div>
                    <p>REAL ESTATE</p>
                    <p>How to use the debt <br />
                    service coverage ratio in <br />
                    real estate</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Wealth