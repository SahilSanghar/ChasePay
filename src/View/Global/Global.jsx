import React from 'react'
import Navbar from '../Commercial/Navbar/Navbar.jsx'
import CurrVio from './CurrVio/CurrVio.jsx'
import WeaMan from './WeaMan/WeaMan.jsx'
import Network from './Network/Network.jsx'
import LowCar from './LowCar/LowCar.jsx'
import ESG from './ESG/ESG.jsx'
import GOptions from './GOptions/GOptions.jsx'
import MMatters from './MMatters/MMatters.jsx'
import Footer from '../Commercial/Footer/Footer.jsx'
import EFooter from '../Commercial/Footer/EFooter.jsx'

const Global = () => {
return (
    <div>
        <Navbar />
        <CurrVio />
        <WeaMan />
        <Network />
        <LowCar />
        <ESG />
        <GOptions />
        <MMatters />
        <Footer />
        <EFooter />
    </div>
)
}

export default Global