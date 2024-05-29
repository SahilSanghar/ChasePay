import React from 'react';
import '../../../scss/TCLook/TCLook.scss';
import TCLookBg from '../../../assets/Images/TCLookBg.jpg'


const TCLook = () => {
return (
    <div className="container">
    <div className="row">
        <div className="col-md-4">
            <img
            className="background-img"
            src={TCLookBg}
            alt="Background"
            />
        </div>
        <div className="col-md-8">
        <div className="content">
            <h1>Take a <span className='CSpan'>closer look</span></h1>
            <div className="row">
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        Our impact
                    </h5>
                    <p className="card-text">Discover how we help strengthen <br />
                    communities.</p>
                    <a href="#">Learn more</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Our newsletters</h5>
                    <p className="card-text">Access economic and industry <br />
                    insights.</p>
                    <a href="#">Subscribe</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Out podcasts</h5>
                    <p className="card-text">Hear discussions on research, <br />
                    treasury and more.</p>
                    <a href="#">Listen now</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Transacting with us</h5>
                    <p className="card-text">Use these methods to initiate <br />
                    financial transactions when our <br />
                    primary methods are unavailable</p>
                    <a href="#">Learn more</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">News and <br />
                    announcements</h5>
                    <p className="card-text">Keep up what's happening at <br />
                    Wesley P Brewer Chasepay</p>
                    <a href="#">Read the latest</a>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Contact us</h5>
                    <p className="card-text">Our team can answer questions <br />
                    and provide more information.</p>
                    <a href="#">Reach out</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default TCLook;
