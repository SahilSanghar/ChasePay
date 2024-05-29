import React from 'react'
import Navbar from './Navbar/Navbar'
import Service from './Service/Service'
import BankSol from './BankSol/BankSol'
import BankPro from './BankPro/BankPro'
import WServe from './WServe/WServe'
import Numbers from './Numbers/Numbers'
import Latest from './Latest/Latest'
import CResponsibility from './CResponsibilty/CResponsibility'
import BankInvest from './BankInvest/BankInvest'
import LatIns from './LatIns/LatIns'
import LCReso from './LCReso/LCReso'
import Wealth from './Wealth/Wealth'
import WAction from './WAction/WAction'
import TCLook from './TCLook/TCLook'
import Footer from './Footer/Footer'
import EFooter from './Footer/EFooter'

const Commercial = () => {
return (
    <div>
        <Navbar />
        <Service />
        <BankSol/>
        <BankPro />
        <WServe />
        <Numbers /> 
        <Latest />
        <CResponsibility />
        <BankInvest />
        <LatIns />
        <LCReso />
        <Wealth />
        <WAction />
        <TCLook />
        <Footer />
        <EFooter />
    </div>
)
}

export default Commercial