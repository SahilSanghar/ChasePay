import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Find from './Find/Find'
import More from './More/More'
import Commit from './Commit/Commit'
import Processing from './CCProcessing/Processing'
import Details from './Details/Details'
import SMIcon from './SMIcons/SMIcons.jsx';
import Footer from './Footer/Footer'
import Copyright from '../Personal/Footer/Copyright/Copyright'
import Review from './Review/Review'

const Business = () => {
return (
    <div>
        <Header />
        <Banner />
        <Find />
        <More />
        <Commit />
        <br /><br /><br />
        <Processing />
        <Review />
        <Details />
        <SMIcon />
        <Footer />
        <div className='d-flex ms-5 mt-2'>
        <Copyright />
        </div>
    </div>
)
}

export default Business