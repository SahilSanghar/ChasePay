import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

const carouselItems = [
    { icon: partner, title: "Schedule a meeting" },
    { icon: cscore, title: "Free credit score" },
    { icon: briefcase, title: "Business" },
    { icon: credit, title: "Credit cards" },
    { icon: check, title: "Checking" },
    { icon: plane, title: "Travel" },
    { icon: piggy, title: "Savings" },
    { icon: homeloan, title: "Home loan" },
    { icon: car, title: "Auto" },
    { icon: investment, title: "Investments" },
    { icon: building, title: "Commercial" }
];

const Options = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control left" onClick={goToPrevious}><FaChevronLeft /></button>
            <div className="carousel-items">
                {carouselItems.map((item, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <div className="icon"><img src={item.icon} alt={item.title} className="OIcons" /></div>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            <button className="carousel-control right" onClick={goToNext}><FaChevronRight /></button>
            <div className="carousel-dots">
                {carouselItems.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Options;

