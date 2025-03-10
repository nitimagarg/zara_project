import React from "react";
import './Footer.css';
const Footer=()=>{
    const help_array=["My Zara Account","Items and Sizes","Gift Options","Shipping","Payment and Invoices","My purchases","Exchanges, returns and refunds","Zara Experiences"];
    const follow_us=["Newsletter","Instagram","Facebook","X","Pinterest","Youtube"];
    const company_array=["About us","Join Life","Offices","Stores","Work with us"];
    const policicy_array=["Privacy policy","Purchase conditions","Gift Card Conditions","Cookies Settings"];
    return(
        <div className="Footer_main">
            <div className="content2">
                <div className="HELP">
                    <h6>HELP</h6>
                    <ul className="list_footer">
                        {help_array.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="Follow us">
                    <h6>FOLLOW US</h6>
                    <ul className="list_footer">
                        {follow_us.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="company">
                    <h6>COMPANY</h6>
                    <ul className="list_footer">
                        {company_array.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="policies">
                    <h6>POLICIES</h6>
                    <ul className="list_footer">
                        {policicy_array.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;