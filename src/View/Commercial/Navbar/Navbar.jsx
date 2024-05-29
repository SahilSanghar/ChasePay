import React from 'react'
import {useNavigate} from 'react-router-dom';
import polyline from '../../../assets/dropdown.svg'
import circle from '../../../assets/search.svg'
import '../../../scss/CNav/Navbar.scss'

const Navbar = () => {

    const navigate = useNavigate();

    const navigateGlobal = () => {
        navigate('/global');
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
return (
    <div className='Bar d-flex justify-content-around sticky-top'>
        <div className='d-flex align-items-start'>
            <div className='me-3'>
            <h2 className='Name pt-2' onClick={navigateGlobal}>Wesley P Brewer</h2>
            </div>
            <p className='mt-2 pt-3 ps-3'>Solutions</p>
            <img src={polyline} alt="My SVG" className='mt-4' />
            <p className='mt-2 pt-3 ps-3'>Who We Serve</p>
            <img src={polyline} alt="My SVG" className='mt-4' />
            <p className='mt-2 pt-3 ps-3'>Insights</p>
            <img src={polyline} alt="My SVG" className='mt-4' />
            <p className='mt-2 pt-3 ps-3'>About Us</p>
            <img src={polyline} alt="My SVG" className='mt-4' />
        </div>
        
        <div className='nav d-flex pt-3'> 
            <img src={circle} alt="My SVG" className='mt-2 pt-1' />
            <p className='pt-2 ps-3'>Careers</p>
            <p className='pt-2 ps-3'>News</p>
            <p className='pt-2 ps-3'>Contact Us</p>
            <p className='pt-2 ps-3'>Login</p>
            <p className='pt-2 ps-3'>Global</p>
        </div>
    </div>
)
}

export default Navbar