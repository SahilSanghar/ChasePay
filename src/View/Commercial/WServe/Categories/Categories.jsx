import React, { useState } from 'react';
import InnovationImg from '../../../../assets/Images/Innovation.png'
import MidsizeImg from '../../../../assets/Images/Midsize.jpg'
import LargeImg from '../../../../assets/Images/Large.jpg'
import EstateImg from '../../../../assets/Images/Estate.png'
import IndustryImg from '../../../../assets/Images/Industry.jpg'
import '../../../../scss/WServe/Category.scss'

const Categories = () => {
const [activeComponent, setActiveComponent] = useState(1);

const renderComponent = (componentNumber) => {
    setActiveComponent(componentNumber);
};

const renderActiveComponent = () => {
    switch (activeComponent) {
    case 1:
        return <Innovation />;
    case 2:
        return <Midsize />;
    case 3:
        return <Large />;
    case 4:
        return <Estate />;
    case 5:
        return <Industries />;
    default:
        return null;
    }
};

return (
    <div className='categories'>
    <div className='headings d-flex'>
        <h5 className={activeComponent === 1 ? 'active' : ''} onClick={() => renderComponent(1)}>Innovation economy</h5>
        <hr className={activeComponent === 1 ? 'active-hr' : ''} />
        <h5 className={`ms-5 ${activeComponent === 2 ? 'active' : ''}`} onClick={() => renderComponent(2)}>Midsize businesses</h5>
        <hr className={activeComponent === 2 ? 'active-hr' : ''} />
        <h5 className={`ms-5 ${activeComponent === 3 ? 'active' : ''}`} onClick={() => renderComponent(3)}>Large corporations</h5>
        <hr className={activeComponent === 3 ? 'active-hr' : ''} />
        <h5 className={`ms-5 ${activeComponent === 4 ? 'active' : ''}`} onClick={() => renderComponent(4)}>Commercial real estate</h5>
        <hr className={activeComponent === 4 ? 'active-hr' : ''} />
        <h5 className={`ms-5 ${activeComponent === 5 ? 'active' : ''}`} onClick={() => renderComponent(5)}>Industries</h5>
        <hr className={activeComponent === 5 ? 'active-hr' : ''} />
    </div>
    <div>
        {renderActiveComponent()}
    </div>
    </div>
);
};

const Innovation = () => 
    <div className='CBody'>
        <div className="row">
            <div className="col">
                <h3 className='CHeading'>Innovation economy</h3>
                <p className='CText'>Wesley P Brewer Chasepay has the expertise and financial
                solutions to support your business from early stage to
                IPO— and everything in between.</p>
                <button className='CBtn'>LEARN MORE</button>
            </div>
            <div className="col">
                <img src={InnovationImg} alt="Innovation Img" className='CImg' />
            </div>
        </div>
    </div>;

const Midsize = () =>
    <div className='CBody'>
        <div className="row">
            <div className="col">
                <h3 className='CHeading'>Midsize businesses</h3>
                <p className='CText'>Seize growth opportunities with our custom banking solutions and global resources designed for middle market businesses and specialized industries.</p>
                <button className='CBtn'>LEARN MORE</button>
            </div>
            <div className="col">
                <img src={MidsizeImg} alt="Midsize Img" className='CImg' />
            </div>
        </div>
    </div>;

const Large = () =>
    <div className='CBody'>
        <div className="row">
            <div className="col">
                <h3 className='CHeading'>Large corporations</h3>
                <p className='CText'>From complex operations to global competition, we're here to help. Leverage the power of Wesley P Brewer Chasepay to solve your business challenges.</p>
                <button className='CBtn'>LEARN MORE</button>
            </div>
            <div className="col">
                <img src={LargeImg} alt="Innovation Img" className='CImg' />
            </div>
        </div>
    </div>;

const Estate = () =>
    <div className='CBody'>
        <div className="row">
            <div className="col">
                <h3 className='CHeading'>Commercial real estate</h3>
                <p className='CText'>Get the strategic support to be successful throughout market and real estate cycles with insights, hands-on service, comprehensive financial solutions and unrivaled certainty of execution.</p>
                <button className='CBtn'>LEARN MORE</button>
            </div>
            <div className="col">
                <img src={EstateImg} alt="Innovation Img" className='CImg' />
            </div>
        </div>
    </div>;

const Industries = () =>
    <div className='CBody'>
        <div className="row">
            <div className="col">
                <h3 className='CHeading'>Industries</h3>
                <p className='CText'>Our commercial and investment banking specialists draw on their expertise across industries to help manage your finances and grow your business.</p>
                <button className='CBtn'>LEARN MORE</button>
            </div>
            <div className="col">
                <img src={IndustryImg} alt="Innovation Img" className='CImg' />
            </div>
        </div>
        
    </div>;

export default Categories;
