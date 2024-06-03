import React, { useState, useEffect } from 'react';
import '../../../scss/Option/Options.scss';

const Dropdown = () => {
const [openDropdown, setOpenDropdown] = useState(null);

const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
};

const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
    setOpenDropdown(null);
    }
};

useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
    document.removeEventListener('click', handleClickOutside);
    };
}, []);

return (
    <div className="dropdown">
            <ul className='d-flex list-unstyled m-2 px-4 pb-3 pt-1'>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(1)}>Checking</a>
                    {openDropdown === 1 && (
                        <ul className="dropdown-section list-unstyled">
                            <a href="/personal/checking"><li>Choose a checking account</li></a>
                            <li>Debit card for kids</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(2)}>Savings & CDs</a>
                    {openDropdown === 2 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Choose a savings account</li>
                            <li>CDs</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(3)}>Credit cards</a>
                    {openDropdown === 3 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Explore credit cards</li>
                            <hr />
                            <li>Personal credit cards</li>
                            <li>Business credit cards</li>
                            <li>Sign in for offers</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(4)}>Home loans</a>
                    {openDropdown === 4 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Buy a home</li>
                            <li>Refinance your mortgage</li>
                            <li>Apply for a mortgage</li>
                            <hr />
                            <li>Access calculators and tools</li>
                            <li>See current rates</li>
                            <li>Manage account</li>
                            <li>Homebuying 101</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(5)}>Auto</a>
                    {openDropdown === 5 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Finance a car</li>
                            <li>Shop for a car</li>
                            <li>Manage your car</li>
                            <hr />
                            <li>Prequalify for financing</li>
                            <li>Explore auto options</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(6)}>Investing by Wesly P Brewer</a>
                    {openDropdown === 6 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Explore investing</li>
                            <li>Work with our advisors</li>
                            <li>Invest on your own</li>
                            <hr />
                            <li>Wealth Plan</li>
                            <li>Plan your retirement</li>
                            <li>Education planning</li>
                            <li>Top stories</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(7)}>Education & goals</a>
                    {openDropdown === 7 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Education center</li>
                            <li>Free credit score</li>
                            <li>Financial goals</li>
                            <li>Security Center</li>
                        </ul>
                    )}
                </li>
                <li className='me-5 OHead'>
                    <a onClick={() => toggleDropdown(8)}>Travel</a>
                    {openDropdown === 8 && (
                        <ul className="dropdown-section list-unstyled">
                            <li>Travel</li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
);
};

export default Dropdown;