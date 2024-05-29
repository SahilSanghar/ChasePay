import React from 'react'
import '../../../scss/CFooter/EFooter.scss'

const EFooter = () => {
return (
    <div className="row EFooter ms-5">
        <div className="col-6">
            <a href="#">
                Privacy &nbsp; | &nbsp;&nbsp;
            </a>
            <a href="#">
                Terms of Use &nbsp; | &nbsp;&nbsp;
            </a>
            <a href="#">
                Accessibility &nbsp; | &nbsp;&nbsp; 
            </a>
            <a href="#">
                Cookies Policy  &nbsp; | &nbsp;&nbsp; 
            </a>
            <a href="#">
                Regulatory Disclosures
            </a>
        </div>
        <div className="col copyright">
            <p>&copy; 2024 Wesley P Brewer Chasepay & Co.</p>
            <p>All rights reserved.</p>
        </div>
    </div>
)
}

export default EFooter