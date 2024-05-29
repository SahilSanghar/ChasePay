import React from 'react'
import '../../../../scss/BankPro/Main.scss'
import connect from '../../../../assets/connect.svg'

const Main = () => {
return (
    <div className="Pmain grid">
        <div className="row">
            <div className="col ccol text-left">
                <h2 className='fs-1'>Commercial</h2>
                <h2 className='fs-1'>Banking</h2>
                <h2 className='Product fs-1'>Products</h2>
                <div>
                    <button type="button" class="btn btn-info">
                        LEARN MORE
                    </button>
                </div>
            </div>
            <div className="col ccol">
                <div className='CBorder border border-light'>
                <div className='CConnect'>
                    <img src={connect} alt="Chase Connect" className='CImg' />
                    <h4 className='CTitle'>Chase Connect®</h4>
                    <p>Connect to all your accounts through one unified, easy-to-navigate portal. Get your loans, cards and merchant services accounts in one place with Chase Connect®.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Main