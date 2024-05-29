import React from 'react'
import MakingSense from '../../../assets/Images/MakingSense.jpg'
import mic from '../../../assets/mic.svg'
import play from '../../../assets/play.svg'
import file from '../../../assets/file.svg'
import '../../../scss/MMatters/MMatters.scss'

const MMatters = () => {
return (
    <div className='MMatter'>
        <p className="MMSpan">
            <img src={mic} alt="Mic" className='Mic' /> &nbsp; | &nbsp; 17:23
        </p>
        <h3 className='fw-normal mb-3'>
            Market Matters | Data Assets & Alpha Group: An equities dip to be bought?
        </h3>
        <a href="#" className='Mlink'>Click for more podcasts</a>
        <div className='row mt-5'>
            <div className="col-3">
                <p className='fs-5 ps-2'>Wesley P Brewer</p>
                <p className='fs-3 ps-2'>Making <span className="MSSpan">Sense</span></p>
                <img src={MakingSense} alt="MakingSense" className='MSImg' />
            </div>
            <div className="col pe-5 ms-2 me-3">
                <p className='MMDetails'>
                    Learn more about possible reasons for recent equity weakness, the macro and micro backdrop, the extent to which positioning levels have fallen, resulting market and sector opportunities, and key catalysts to watch. Andrew Tyler, Head of U.S. Market Intelligence, and John Schlegel, Head of Global Positioning Intelligence, are in discussion with Eloise Goulder, Head of the Global Data Assets & Alpha Group.
                </p>
                <div className='PBox'>
                    <img src={play} alt="Play" className='play' />
                </div>
                <p className='mt-4'>
                    <img src={file} alt="File" className='file' />
                    <a href="#" className='VLink'>VIEW TRANSCRIPT</a>
                </p>
            </div>
        </div>
    </div>
)
}

export default MMatters