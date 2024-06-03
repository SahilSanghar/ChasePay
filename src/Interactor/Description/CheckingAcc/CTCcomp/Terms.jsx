import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ConLoca from '../../../../assets/Images/ConLoca.jpg'
import MobApp from '../../../../assets/Images/MobApp.jpg'
import FirBank from '../../../../assets/Images/FirBanking.jpg'
import Overdraft from '../../../../assets/Images/Overdraft.jpg'
import ZLiability from '../../../../assets/Images/ZLiability.jpg'

const Terms = () => {
return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Bank on Your Terms</h2>
    
    <style>
        {`
        .custom-carousel .carousel-control-prev-icon,
        .custom-carousel .carousel-control-next-icon {
            background-color: black;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-top: 150px;
        }

        .custom-carousel .carousel-indicators li {
            background-color: black;
        }

        .custom-carousel .carousel-indicators .active {
            background-color: blue;
        }
        `}
    </style>

    <Carousel className="custom-carousel w-full h-[200px]">
        <Carousel.Item>
        <div className="d-flex flex-column align-items-center text-center">
            <img src={ConLoca} alt='Con Loc' className='h-[200px] w-[200px] opacity-100' />
            <h3 className="text-xl font-semibold">Convenient Locations</h3>
            <p>Over 15,000 ATMs and 4,700 branches.</p>
        </div>
        </Carousel.Item>
        
        <Carousel.Item>
        <div className="d-flex flex-column align-items-center text-center">
            <img src={MobApp} alt='Mob App' className='h-[200px] w-[200px] opacity-100' />
            <h3 className="text-xl font-semibold">Chasepay Mobile® App</h3>
            <p>Manage accounts, deposit checks, transfer funds, and plan budgets from your device.</p>
        </div>
        </Carousel.Item>
        
        <Carousel.Item>
        <div className="d-flex flex-column align-items-center text-center">
            <img src={FirBank} alt='Fir Bank' className='h-[200px] w-[200px] opacity-100' />
            <h3 className="text-xl font-semibold">Chase First Banking℠</h3>
            <p>A debit card account for kids and teens with no monthly fees and digital tools for learning good money habits.</p>
        </div>
        </Carousel.Item>
        
        <Carousel.Item>
        <div className="d-flex flex-column align-items-center text-center">
            <img src={Overdraft} alt='Overdraft' className='h-[200px] w-[200px] opacity-100' />
            <h3 className="text-xl font-semibold">Chase Overdraft Assist℠</h3>
            <p>No fees if overdrawn by $50 or less at the end of the business day, or if balance is brought to $50 or less by the next business day.</p>
        </div>
        </Carousel.Item>
        
        <Carousel.Item>
        <div className="d-flex flex-column align-items-center text-center">
            <img src={ZLiability} alt='ZLiability' className='h-[200px] w-[200px] opacity-100' />  
            <h3 className="text-xl font-semibold">Zero Liability Protection</h3>
            <p>No charges for unauthorized debit card transactions if reported promptly.</p>
        </div>
        </Carousel.Item>
    </Carousel>
    </div>
);
};

export default Terms;
