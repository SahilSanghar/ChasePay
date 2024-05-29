import React, { useState } from 'react';
import building from '../../../assets/Images/Cbuilding.jpg';
import '../../../scss/BankSol/BankSol.scss';

const BankSol = () => {
const [currentSlide, setCurrentSlide] = useState(0);

const cardData = [
    {
        title: 'Commercial Real Estate',
        text: 'Capitalize on opportunities and prepare for challenges throughout the real estate cycle.',
        link: 'Learn more',
    },
    {
        title: 'Credit and Financing',
        text: 'Prepare for future growth with customized lending and financing solutions.',
        link: 'Learn more',
    },
    {
        title: 'International Banking',
        text: "Power your business' global growth and operations at every stage.",
        link: 'Learn more',
    },
    {
        title: 'Investment Banking',
        text: 'Providing investment banking solutions, including mergers and acquisitions, capital raising and risk management, for a broad range of corporations, institutions and governments.',
        link: 'Learn more',
    },
    {
        title: 'Payments',
        text: 'Your partner for commerce, receivables, cross-currency, working capital, blockchain, liquidity and more.',
        link: 'Learn more',
    },
];

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? cardData.length - 1 : currentSlide - 1);
};

const nextSlide = () => {
    setCurrentSlide(currentSlide === cardData.length - 1 ? 0 : currentSlide + 1);
};

const handleDotClick = (index) => {
    setCurrentSlide(index);
};

return (
    <div className="carousel-container container grid">
        <div className="row">
            <div className="col">
                <img src={building} alt="Building" className="building" />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="carousel-wrapper">
                    <div className="main">
                        <h2 className="heading text-center">
                            Commercial{' '}
                            <span className="BankSol">
                            Banking
                            <br />
                            solutions
                            </span>
                        </h2>
                        <div className="card-container">
                                {cardData.slice(currentSlide, currentSlide + 3).map((card, index) => (
                                    <div className="card" key={currentSlide + index}>
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <p className="card-text">{card.text}</p>
                                            <a href={card.link} className="card-link">
                                                {card.link}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            <div className="carousel-dots">
                {cardData.map((_, index) => (
            <div
                key={index}
                className={`dot ${index >= currentSlide && index < currentSlide + 3 ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
            />
            ))}
            </div>
            <button className="arrow arrow-left" onClick={prevSlide}>
                {'<'}
            </button>
            <button className="arrow arrow-right" onClick={nextSlide}>
                {'>'}
            </button>
            </div>
        </div>
    </div>
);
};

export default BankSol;