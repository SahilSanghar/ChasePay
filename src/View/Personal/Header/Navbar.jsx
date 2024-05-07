import React from 'react';
import {useNavigate} from 'react-router-dom';
import polyline from '../../../assets/dropdown.svg';
import circle from '../../../assets/search.svg'
import '../../../scss/Header/Navbar.scss';

const Navbar = () => {

    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const navigateBusiness = () => {
        navigate('/business');
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
    <div className='mx-4'>
        <div className='d-inline-flex justify-content-start p-2' role='button'>
            <button className='btn fs-6 px-1 text-success text-decoration-underline' onClick={navigateHome}>Personal &nbsp;</button>
            <button className='btn fs-6 px-1' onClick={navigateBusiness}>Business &nbsp;</button>
            <p className='fs-6 px-1'>Commercial &nbsp;</p>
        </div>
        <div className='d-inline-flex justify-content-end p-2 ms-5 pe-2 position-absolute top-0 end-0 mx-3' role='button'>
            <p className='fs-6 px-1'>Schedule a meeting &nbsp;</p>
            <div className="btn-group">
                <button id='dropdownButton' type="button" className="btn btn-secondary dropdown-toggle fs-6" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleButtonClick}>
                    Customer service 
                    <img src={polyline} alt="My SVG" className='pb-1 ps-1' />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            See help options
                        </a>
                    </li>
                    
                    <li>
                        <a className="dropdown-item" href="#">
                            Make a payment
                        </a>
                    </li>
                    
                    <li>
                        <a className="dropdown-item" href="#">
                            Find ATM or branch
                        </a>
                    </li>
                    
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    
                    <li>
                        <a className="dropdown-item" href="#">
                            Report fraud
                        </a>
                    </li>
                </ul>
            </div>
            {/* <p className='fs-5 px-1'>Customer service &nbsp;</p> */}
            <p className='fs-6 px-1'>
                Espanol &nbsp;
                <img src={circle} alt="My SVG" className='pb-1' />
            </p>
        </div>
    </div>
)
}

export default Navbar