import React from 'react'
import facebook from '../../../../assets/Images/facebook.png'
import instagram from '../../../../assets/Images/instagram.png'
import linkedinLogo from '../../../../assets/Images/linkedin-logo.png'
import pinterest from '../../../../assets/Images/pinterest-logo.png'
import twitter from '../../../../assets/Images/twitter.png'
import youtube from '../../../../assets/Images/youtube.png'
import '../../../../scss/Follow/icons.scss'

const SMIcons = () => {
return (
    <div className='mt-1 d-flex'>
        <a href="https://www.facebook.com/profile.php?id=61559006381108" target='_blank'>
            <img src={facebook} alt='facebook'/>
        </a>
        <a href="https://www.instagram.com/chase__pay/" target='_blank'>
        <img src={instagram} alt='instagram'/>
        </a>
        <a href="https://twitter.com/ChasePay97699" target='_blank'>
        <img src={twitter} alt='twitter'/>
        </a>
        <a href="https://www.youtube.com/channel/UCTnq7VLSPcW-pTqHmPJ9v5Q" target='_blank'>
        <img src={youtube} alt='youtube'/>
        </a>
        <a href="https://www.linkedin.com/in/chase-pay-125261307/" target='_blank'>
        <img src={linkedinLogo} alt='linkedin-logo'/>
        </a>
        <a href="https://in.pinterest.com/chasepaybywesleypbrewer/" target='_blank'>
        <img src={pinterest} alt='pinterest-logo'/>
        </a>
    </div>
)
}

export default SMIcons