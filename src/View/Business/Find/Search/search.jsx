import React from 'react'
import '../../../../scss/Header/Navbar.scss';
import '../../../../scss/Find/Search.scss'
const Search = () => {

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

return (
    <div className='pt-4'>
        <div className='d-flex justify-content-start input'>
            <h3 className='mt-1'>I am looking for </h3>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle ps-4 fs-3" type="button" id='dropdownButton' onClick={handleButtonClick} data-bs-toggle="dropdown" aria-expanded="false">
                Choose an option
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Guidance and tools</a></li>
                <li><a className="dropdown-item" href="#">A checking or savings account</a></li>
                <li><a className="dropdown-item" href="#">A credit card</a></li>
                <li><a className="dropdown-item" href="#">Payment processing and merchant services</a></li>
                <li><a className="dropdown-item" href="#">Loan or line of credit</a></li>
                <li><a className="dropdown-item" href="#">Business services</a></li>
                <li><a className="dropdown-item" href="#">Product support</a></li>
                <li><a className="dropdown-item" href="#">Banking solutions for high-growth startups</a></li>
                </ul>
        </div>
        </div>
        <div className='input d-flex justify-content-start'>
            <h3 className='to mt-1'>to </h3>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle ps-4 fs-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose an option
                </button>
            </div>
        </div>
        <button type="button" className="show btn btn-secondary" disabled>Show me my solutions</button>
        <hr className='mt-5' />
        <p className='ms-5 ps-5'>Recommendations will show up here once your selections are made. Some or all documents, services, web pages or correspondence may be available in English only.</p>
    </div>
)
}

export default Search