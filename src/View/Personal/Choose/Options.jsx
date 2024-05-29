import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import check from '../../../assets/Images/check.png';
import piggy from '../../../assets/Images/piggy.png';
import credit from '../../../assets/Images/credit.png';
import car from '../../../assets/Images/car.png';
import briefcase from '../../../assets/Images/briefcase.png';
import investment from '../../../assets/Images/investment.png';
import partner from '../../../assets/Images/partner.png';
import plane from '../../../assets/Images/airplane.png';
import homeloan from '../../../assets/Images/homeloan.png';
import building from '../../../assets/Images/building.png';
import cscore from '../../../assets/Images/dashboard.png';
import '../../../scss/Choose/Options.scss';

const Options = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            title: (
                <div>
                    <img src={partner} alt="Partner" className="OIcons" />
                    <p>Schedule a meeting</p>
                    <img src={partner} alt="Partner" className="OIcons" />
                    <p>Schedule a meeting</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={cscore} alt="Credit score" className="OIcons" />
                    <p>Free credit score</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={briefcase} alt="Business" className="OIcons" />
                    <p>Business</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={credit} alt="Credit cards" className="OIcons" />
                    <p>Credit cards</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={check} alt="Checking" className="OIcons" />
                    <p>Checking</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={plane} alt="Travel" className="OIcons" />
                    <p>Travel</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={piggy} alt="Savings" className="OIcons" />
                    <p>Savings</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={homeloan} alt="Home loan" className="OIcons" />
                    <p>Home loan</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={car} alt="Auto" className="OIcons" />
                    <p>Auto</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={investment} alt="Investments" className="OIcons" />
                    <p>Investments</p>
                </div>
            ),
        },
        {
            title: (
                <div>
                    <img src={building} alt="Commercial" className="OIcons" />
                    <p>Commercial</p>
                </div>
            ),
        },
    ]);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
        setCarouselItems(prevItems => {
            const newItems = [...prevItems.slice(selectedIndex), ...prevItems.slice(0, selectedIndex)];
            return newItems;
        });
    };

    const renderCarouselItems = () => {
        return carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
                <div className="carousel-item-content">
                    {item.title}
                </div>
            </Carousel.Item>
        ));
    };

    return (
        <div className="carousel-container">
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                {renderCarouselItems()}
            </Carousel>
        </div>
    );
};

export default Options;
