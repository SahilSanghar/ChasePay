import React from 'react';
import linkedinLogo from '../../../assets/Images/linkedin-logo.png'
import twitter from '../../../assets/Images/twitter.png'
import facebook from '../../../assets/Images/facebook.png'
import instagram from '../../../assets/Images/instagram.png'
import youtube from '../../../assets/Images/youtube.png'
import '../../../scss/CFooter/Footer.scss'

function Footer() {
    return (
        <div className="container CFCon grid">
            <div className="row">
                <div className="col CFCol d-flex flex-column">
                    <h6>SOLUTIONS</h6>
                    <a href="#">Asset Management</a>
                    <a href="#">Commercial Banking</a>
                    <a href="#">Credit and Financing</a>
                    <a href="#">Investment Banking</a>
                    <a href="#">Markets</a>
                    <a href="#">Payments</a>
                    <a href="#">Prime Services</a>
                    <a href="#">Private Banking</a>
                    <a href="#">Securities Services</a>
                    <a href="#">Wealth Management</a>
                </div>
                <div className="col CFCol d-flex flex-column">
                    <h6>CAREERS</h6>
                    <a href="#">Experienced Professionals</a>
                    <a href="#">Students</a>
                    <br />
                    <h6>HELPFUL LINKS</h6>
                    <a href="#">About Us</a>
                    <a href="#">Apps</a>
                    <a href="#">Events and Conferences</a>
                    <a href="#">Impact</a>
                    <a href="#">Industries</a>
                    <a href="#">Insights</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Media Center</a>
                    <a href="#">News and Announcements</a>
                    <a href="#">Newsletters</a>
                </div>
                <div className="col CFCol d-flex flex-column">
                    <h6>WESLEY P BREWER SITES</h6>
                    <a href="#">Chasepay</a>
                    <a href="#">Wesley P Brewer Chasepay & Co.</a>
                    <a href="#">Payments Partner Network</a>
                    <br />
                    <h6>CONNECT WITH US</h6>
                    <a href="#">Alumni Network</a>
                    <a href="#">Client Login</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col CFCol">
                    <h3>WESLEY P BREWER</h3>
                    <div className='mt-1 d-flex'>
                        <a href="https://www.linkedin.com/in/chase-pay-125261307/" target='_blank'>
                            <img src={linkedinLogo} alt='linkedin-logo'/>
                        </a>
                        <a href="https://twitter.com/ChasePay97699" target='_blank'>
                            <img src={twitter} alt='twitter'/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61559006381108" target='_blank'>
                            <img src={facebook} alt='facebook'/>
                        </a>
                        <a href="https://www.instagram.com/chase__pay/" target='_blank'>
                            <img src={instagram} alt='instagram'/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCTnq7VLSPcW-pTqHmPJ9v5Q" target='_blank'>
                            <img src={youtube} alt='youtube'/>
                        </a>
                    </div>
                </div>
                {/* <div className="col"></div> */}
            </div>
        </div>
    );
}

export default Footer;
