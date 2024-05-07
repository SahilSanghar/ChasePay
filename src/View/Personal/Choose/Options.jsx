import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import check from '../../../assets/Images/check.png'
import piggy from '../../../assets/Images/piggy.png'
import credit from '../../../assets/Images/credit.png'
import car from '../../../assets/Images/car.png'
import briefcase from '../../../assets/Images/briefcase.png'
import investment from '../../../assets/Images/investment.png'
import partner from '../../../assets/Images/partner.png'
import plane from '../../../assets/Images/airplane.png'
import homeloan from '../../../assets/Images/homeloan.png'
import building from '../../../assets/Images/building.png'
import cscore from '../../../assets/Images/dashboard.png'
import '../../../scss/Choose/Options.scss'

const Options = () => {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    // setIndex(selectedIndex);
    // };
return (

//     <>
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <Carousel.Caption>
//         <div className='pe-3'>
// //             <img src={partner} alt="partner" className='ms-5' />
// //             <p>Schedule a meeting</p>
// //         </div>
        
// //         <div className='pe-3'>
// //             <img src={cscore} alt="Credit score"  className='ms-5' />
// //             <p>Free credit score</p>
// //         </div>

// //         <div className='pe-3'>
// //             <img src={briefcase} alt="Buisness"  className='ms-3' />
// //             <p>Business</p>
// //         </div>

// //         <div className='pe-3'>
// //             <img src={credit} alt="creditcard"  className='ms-4' />
// //             <p>Credit cards</p>
// //         </div>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <Carousel.Caption>
//             <div className='pe-3'>
//                 <img src={check} alt="check"  className='ms-4' />
//                 <p>checking</p>
//             </div>
//                 <div className='pe-3'>
//                 <img src={plane} alt="travel"  className='ms-2' />
//                 <p>Travel</p>
//             </div>

//             <div className='pe-3'>
//                 <img src={piggy} alt="Savings"  className='ms-3' />
//                 <p>Savings</p>
//             </div>
        
//             <div className='pe-3'>
//                 <img src={homeloan} alt="Home loan"  className='ms-4' />
//                 <p>Home loan</p>
//             </div>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <Carousel.Caption>
//             <div className='pe-3'>
//                 <img src={car} alt="Auto"  className='ms-2' />
//                 <p>Auto</p>
//             </div>
//             <div className='pe-3'>
//                 <img src={investment} alt="Investments"  className='ms-4' />
//                 <p>Investments</p>
//             </div>
        
//             <div className='pe-3'>
//                 <img src={building} alt="Commercial" className='ms-4'  />
//                 <p>Commercial</p>
//             </div>
//         </Carousel.Caption>
//         </Carousel.Item>
//     </Carousel>
//     </>
    <div className='options carousel slide d-flex px-5' id="carouselExampleIndicators">

<style>
    {`
        .carousel-control-prev-icon,
        .carousel-control-next-icon,
        .carousel-indicators {
        filter: brightness(50%);
    }
    `}
</style>

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
        <div className="carousel-item active d-flex">
        <div className='pe-3'>
            <img src={partner} alt="partner" className='ms-5' />
            <p>Schedule a meeting</p>
        </div>
        
        <div className='pe-3'>
            <img src={cscore} alt="Credit score"  className='ms-5' />
            <p>Free credit score</p>
        </div>

        <div className='pe-3'>
            <img src={briefcase} alt="Buisness"  className='ms-3' />
            <p>Business</p>
        </div>

        <div className='pe-3'>
            <img src={credit} alt="creditcard"  className='ms-4' />
            <p>Credit cards</p>
        </div>

        <div className='pe-3'>
            <img src={check} alt="check"  className='ms-4' />
            <p>checking</p>
        </div>
        </div>

        <div className="carousel-item d-flex">
        <div className='pe-3'>
            <img src={plane} alt="travel"  className='ms-2' />
            <p>Travel</p>
        </div>

        <div className='pe-3'>
            <img src={piggy} alt="Savings"  className='ms-3' />
            <p>Savings</p>
        </div>
        
        <div className='pe-3'>
            <img src={homeloan} alt="Home loan"  className='ms-4' />
            <p>Home loan</p>
        </div>
        </div>
        
        <div className="carousel-item d-flex">
        <div className='pe-3'>
            <img src={car} alt="Auto"  className='ms-2' />
            <p>Auto</p>
        </div>
        <div className='pe-3'>
            <img src={investment} alt="Investments"  className='ms-4' />
            <p>Investments</p>
        </div>
        
        <div className='pe-3'>
            <img src={building} alt="Commercial" className='ms-4'  />
            <p>Commercial</p>
        </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>

)
}

export default Options