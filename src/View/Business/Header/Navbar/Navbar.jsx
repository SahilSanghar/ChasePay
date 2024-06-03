import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import polyline from '../../../../assets/dropdown.svg';
import circle from '../../../../assets/search.svg'
import '../../../../scss/Header/Navbar.scss';

const Navbar = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const navigateBusiness = () => {
        navigate('/business');
    };

    const navigateCommercial = () => {
        navigate('/commercial-banking');
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
    <div className='mx-4'>
        <div className='d-inline-flex justify-content-start' role='button'>
            <button className='btn fs-6 px-1' onClick={navigateHome}>Personal &nbsp;</button>
            <button className='btn fs-6 px-1' onClick={navigateBusiness}><u className='NavHead'>Business</u>&nbsp;</button>
            <button className='btn fs-6 px-1' onClick={navigateCommercial}>Commercial &nbsp;</button>
        </div>
        <div className='d-inline-flex justify-content-end pt-1 ms-5 pe-2 position-absolute top-0 end-0 mx-3' role='button'>
            <p className='fs-6 px-1'>Schedule a meeting &nbsp;</p>
            <div className="btn-group">
            <Dropdown className='pe-2'>
                <Dropdown.Toggle 
                variant="secondary" 
                id="dropdown-basic"
                onClick={handleClick}
                style={{ 
                    textDecoration: 'none',
                    borderBottom: isClicked ? '2px solid blue' : 'none',
                    backgroundColor: 'transparent',
                }}
                className={isClicked ? 'clicked' : ''}>
                    Customer Service
                </Dropdown.Toggle>

                <Dropdown.Menu show={isClicked}>
                    <Dropdown.Item href="#/action-1">
                        See help options
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Make a payment
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Find ATM or branch
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                        Report fraud
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className='fs-6 px-1 pt-0'>
                Espanol &nbsp;
                <img src={circle} alt="My SVG" className='pb-1' />
            </p>
        </div>
    </div>
    </div>
)
}

export default Navbar;