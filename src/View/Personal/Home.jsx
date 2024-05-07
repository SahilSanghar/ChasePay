import Banner from './Banner/Banner'
import Choose from './Choose/Choose'
import Details from './Details/Details'
import Discover from './Discover/Discover'
import Follow from './Follow/Follow'
import { Footer } from './Footer/Footer'
import Logo from './Header/Logo'
import Navbar from './Header/Navbar'
import Options from './Header/Options'
import Perks from './Perks/Perks'
import Popular from './Popular/Popular'
import Savings from './Saving/Savings'

import React from 'react'

const Home = () => {
return (
    <>
        <Navbar />
        <Logo />
        <Options />
        <Banner />
        <Choose />
        <Perks />
        <Discover />
        <Popular />
        <Savings />
        <Follow />
        <Details />
        <Footer />
    </>
)
}

export default Home