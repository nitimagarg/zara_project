import React from "react";
import './Help.css';
import img4 from './images1/img4.jpeg'
const Help=()=>{
    const my_zara_account=["REGISTRATION AND LOG IN","MANAGING MY PROFILE","MY FAVOURITES"]
    const items_sizes=["ITEMS AVAILABILITY","WHAT’S MY SIZE?","COMPOSITION AND CARE"]
    const gift_options=["GIFT CARD","GIFT PACKAGING"];
    const shipping=["SHIPPING METHODS, TIMES AND COSTS","ORDERS IN SEVERAL SHIPMENTS","WHERE DO WE SHIP?"];
    const payments_invoices=["PAYMENT METHODS","PAYMENT SECURITY","INVOICES"];
    const my_purchase=["ONLINE SHOPPING","ORDER STATUS","CHANGE OR CANCEL AN ONLINE ORDER"];
    const exchange_refund=["HOW TO RETURN","HOW TO EXCHANGE","REFUNDS"];
    const experience=["OUR USED CLOTHING COLLECTION PROGRAMME","STORE MODE IN THE APP","NEWSLETTER"];
    const frequent_questions=["RETRIEVE MY STORE RECEIPT","HOW TO RETURN","REFUNDS","ITEM AVAILABILITY","ORDER STATUS"]
    return(
        <>
        <div className="Main_container">
            <div className="back_img_container">
                <img src={img4} className="back_img"/>
            </div>
            <div className="Help_search">
                <input type='text' placeholder="Search.." className="search_box"/>
            </div>

        </div>
        <div className="next_page">
            <div className="help_box">
                <div className="frequent">
                    <h7>FREQUENTLY ASKED QUESTIONS</h7>
                    <div className="frequent_buttons">
                        <ul className="list_frequent">
                            {frequent_questions.map((ques,index)=>(
                                <li key={index} className="list_buttons"><button className="question">{ques}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="all_help">
                    <h7>ALL THE TOPICS OF THE SHOPPING GUIDE</h7>
                </div>
                <div className="grid_box">
                    <nav className="box">
                        <h7 className="h7">MY ZARA ACCOUNT</h7>
                        <ul className="ul">
                            {my_zara_account.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">ITEMS AND SIZES</h7>
                        <ul className="ul">
                            {items_sizes.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">GIFT OPTIONS</h7>
                        <ul className="ul">
                            {gift_options.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">SHIPPING</h7>
                        <ul className="ul">
                            {shipping.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">PAYMENTS AND INVOICES</h7>
                        <ul className="ul">
                            {payments_invoices.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">MY PURCHASES</h7>
                        <ul className="ul">
                            {my_purchase.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">EXCHANGES, RETURNS AND REFUNDS</h7>
                        <ul className="ul">
                            {exchange_refund.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="box">
                        <h7 className="h7">ZARA EXPERIENCES</h7>
                        <ul className="ul">
                            {experience.map((item,index)=>(
                                <li key={index} className="box_items">{item}</li>
                            ))}
                        </ul>
                        
                    </nav>
                </div>
            </div>

        </div>
        </>
    )

};
export default Help;