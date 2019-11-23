import React from 'react'
import { BASE_URL } from '../static_data/constants'

function ProductSpecification(props) {    
    return (
        <div className="_1HmYoV _35HD7C col-8-12" style={{padding:"0px 0px 0px 24px"}}>
            <div className="_1HmYoV hCUpcT" style={{padding:"0px 0px 8px 0px"}}>
                <div className="bhgxx2" style={{flexGrow:1, overflow:"auto"}}>
                    <div className="_1joEet">
                        <div className="_1HEvv0">
                            <a className="_1KHd47" href="/?otracker=product_breadCrumbs_Home">Home</a>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_2XP0B_">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_24NaUy"></path>
                            </svg>
                        </div>
                        <div className="_1HEvv0">
                            <a className="_1KHd47" href="/audio-video/pr?sid=0pm&amp;marketplace=FLIPKART&amp;otracker=product_breadCrumbs_Audio+%26+Video">Audio &amp; Video</a>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_2XP0B_">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_24NaUy"></path>
                            </svg>
                        </div>
                        <div className="_1HEvv0">
                            <a className="_1KHd47" href="/audio-video/headphones/pr?sid=0pm,fcn&amp;marketplace=FLIPKART&amp;otracker=product_breadCrumbs_Headphones">Headphones</a>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_2XP0B_">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_24NaUy"></path>
                            </svg>
                        </div>
                        <div className="_1HEvv0">
                            <a className="_1KHd47" href="/audio-video/headphones/boat~brand/pr?sid=0pm,fcn&amp;marketplace=FLIPKART&amp;otracker=product_breadCrumbs_boAt+Headphones">boAt Headphones</a>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_2XP0B_">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_24NaUy"></path>
                            </svg>
                        </div>
                        <div className="_1HEvv0">
                            <div className="_3Lv0nZ _1KHd47 Bomkwu">
                                <div className="_3aS5mM">
                                    <p>boAt Rockerz 255F Bluetooth Headset with Mic (Active Black, In the Ear)</p>
                                </div>
                            </div>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_2XP0B_">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_24NaUy"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="bhgxx2 col-12-12">
                <div className="_29OxBi">
                    <div>
                        <h1 className="_9E25nV">
                            {/* <span className="_35KyD6">boAt Rockerz 255F Bluetooth Headset with Mic&nbsp;&nbsp;(Active Black, In the Ear)</span> */}
                            <span className="_35KyD6">{props.product.name}</span>
                        </h1>
                    </div>
                    <div className="">
                        <div className="_3ors59">
                            <div className="niH0FQ _2nc08B">
                                <span id="productRating_LSTACCF6SZ8EFWFEPZ6WFAW4Y_ACCF6SZ8EFWFEPZ6_" className="_2_KrJI">
                                    <div className="hGSR34">4.3
                                        <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="_2lQ_WZ" />
                                    </div>
                                </span>
                                <span className="_38sUEc">
                                    <span>
                                        <span>2,05,481 Ratings&nbsp;</span>
                                        <span className="_1VpSqZ">&amp;</span>
                                        <span>&nbsp;21,025 Reviews</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <span className="_3V7-QV _55FW5e">
                            <img alt="" height="21" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" className="gYMg9u" />
                        </span>
                    </div>
                    <div className="_2XDAh9">
                        <span>Special price</span>
                    </div>
                    <div className="_3iZgFn">
                        <div className="_2i1QSc">
                            <div className="_1uv9Cb">
                                <div className="_1vC4OE _3qQ9m1">₹{props.product.price}</div>
                                <div className="_3auQ3N _1POkHg">
                                    ₹2,990
                                </div>
                                <div className="VGWI6T _1iCvwn"><span>{props.product.discount}% off</span></div>
                            </div>
                        </div>
                        <div className="_1-ZND6">
                            <img alt="" className="_3VW0yj" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_ea3ba2.svg" 
                            id="price-info-icon" />
                        </div>
                    </div>
                </div>
            </div>       
            <div className="bhgxx2 col-12-12">
                <div className="_1wg1IU">
                    <div className="edKlv2">Available offers</div>
                </div>
                <div className="_3nSGUy">
                    <div className="_2RzXYa">
                        <div className="_3D89xM">
                            <span className="_7g_MLT row">
                                <img alt="" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" />
                                <li className="_2-n-Lg col">
                                    <span className="_2YJn2R">Bank Offer</span>
                                    <span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
                                    <div className="_20yN1P _3eQYiv">
                                        <span className="MBd8C2">T&amp;C</span>
                                    </div>
                                </li>
                            </span>
                            <span className="_7g_MLT row">
                                <img alt="" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" />
                                <li className="_2-n-Lg col">
                                    <span className="_2YJn2R">Bank Offer</span>
                                    <span>Extra 5% off* with Axis Bank Buzz Credit Card</span>
                                    <div className="_20yN1P _3eQYiv"><span className="MBd8C2">T&amp;C</span></div>
                                </li>
                            </span>
                            <span className="_7g_MLT row">
                                <img alt="" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" className="_3Amlen" />
                                <li className="_2-n-Lg col">
                                    <span className="_2YJn2R">Special Price</span>
                                    <span>Get extra 6% off (price inclusive of discount)</span>
                                    <div className="_20yN1P _3eQYiv">
                                        <span className="MBd8C2">T&amp;C</span>
                                    </div>
                                </li>
                            </span>
                            <span className="_7g_MLT row">
                                <img alt="" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" className="_3Amlen" />
                                <li className="_2-n-Lg col">
                                    <span>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹4499</span>
                                    <div className="_20yN1P _3eQYiv">
                                        <span className="MBd8C2">T&amp;C</span>
                                    </div>
                                </li>
                            </span>
                        </div>
                        {/* <button className="_1Q_hL_">
                            <div className="row">
                                <div className="_2lY4Z6">
                                    <span>View 1 more offer</span>
                                </div>
                            </div>
                        </button> */}
                    </div>
                </div>
            </div>          
            <div className="bhgxx2 col-12-12">
                <div className="row _3BQX6v">
                    <div className="col col-12-12">
                        {/* <div className="_20aOSn">
                            <div className="_6xSBsc">Delivery</div>
                            <div className="xVBsIm">
                                <div className="_3Oywxf zIWjRA">
                                    <div className="_2CeYHY _1udgbK"></div>
                                    <div className="_2my7m5">
                                        <div className="_2IqPSX _1L003Y">
                                            <svg width="12" height="12" viewBox="0 0 9 12" className="_3VH2pM" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#2874f0" className="_16TkYi" d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" fillRule="evenodd"></path>
                                            </svg>
                                            <form autocomplete="off" className="EJrIpC">
                                                <input type="text" className="_3X4tVa" placeholder="Enter Delivery Pincode" value="" 
                                                maxLength="6" id="pincodeInputId" />
                                            </form>
                                            <div className="_2VTdOs _2VB0Iw _1udgbK">
                                                <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                    <circle stroke="#0057e7" className="_1VgS7d" cx="50" cy="50" r="10" fill="none" strokeWidth="3" strokeMiterlimit="10"></circle>
                                                </svg>
                                            </div>
                                            <span className="_2aK_gu">Check
                                                <div className="_11cw91 _2jiIfZ _1VbEkR  E753YP _3fm5As _1SD9nm S3vLVv">
                                                    <div className="_2h52bo _15sV4W _3sqwCr">Enter pincode</div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="_3l12t9">
                            <div className="_2h4rON">
                                <ul className="_2NRVyd">
                                    <div className="_2hPDlf">
                                        <div className="_29Zp1s">Usually delivered in<span className="_3nCwDW">7-8 days</span>
                                            <div className="_20yN1P">
                                                <span className="question">?</span>
                                            </div>
                                        </div>
                                        <div className="_3FZEIh">Enter pincode for exact delivery dates/charges</div>
                                    </div>
                                </ul>
                            </div>
                            <div className="_32lKg1">
                                <span className="_3yGtFA">View Details</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>   
            <div className="bhgxx2 col-12-12">
                <div className="rPoo01">
                    <div className="_37KLG6 col col-6-12">
                        <div className="_2a2WU_">
                            <span id="Color" className="_1lwQLq">Color</span>
                            <ul className="fUBI-_">
                                <li className="_3hSwtk" id="swatch-0-color">
                                    <a className="_2VtE5i _3c2Xi9" href={BASE_URL + props.product.image}>
                                        <div className="_2fXpRR">
                                            <img alt={props.product.name} src={BASE_URL + props.product.image} className="_1k8TbK" />
                                        </div>
                                    </a>
                                    <div className="_11cw91 _1-fCbU E753YP DgCx9f">
                                        <div className="_2h52bo _15sV4W _3xOS0O">Active Black</div>
                                    </div>
                                </li>
                                <li className="_3hSwtk" id="swatch-1-color">
                                    <a className="_2VtE5i" href={BASE_URL + props.product.image}>
                                        <div className="_2fXpRR">
                                            <img alt={props.product.name} src={BASE_URL + props.product.image} className="_1k8TbK" /> 
                                        </div>
                                    </a>
                                    <div className="_11cw91 _1-fCbU E753YP DgCx9f">
                                        <div className="_2h52bo _15sV4W _3xOS0O">Neon</div>
                                    </div>
                                </li>
                                <li className="_3hSwtk" id="swatch-2-color">
                                    <a className="_2VtE5i" href={BASE_URL + props.product.image}>
                                        <div className="_2fXpRR">
                                            <img alt={props.product.name} src={BASE_URL + props.product.image} className="_1k8TbK" />                                                
                                        </div>
                                    </a>
                                    <div className="_11cw91 _1-fCbU E753YP DgCx9f">
                                        <div className="_2h52bo _15sV4W _3xOS0O">Raging Red</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="_11cw91 _2uva0I _3HQXAr E753YP _3X27rX _11uvZG">
                            <div className="_2h52bo _15sV4W"><span>Please select a Color to proceed</span>
                                <button className="_2AkmmA DoInvC">✕</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_1HmYoV hCUpcT" style={{padding:"24px 0px 0px 0px"}}>
                <div className="bhgxx2 col-6-12">
                    <div className="g2dDAR">
                        <div className="_2hqjdd">Highlights</div>
                        <div className="_3WHvuP">
                            <ul>
                                <li className="_2-riNZ">{props.product.description}</li>
                                {/* <li className="_2-riNZ">With Mic:Yes</li>
                                <li className="_2-riNZ">Bluetooth version: 4.1</li>
                                <li className="_2-riNZ">Wireless range: 10 m</li>
                                <li className="_2-riNZ">Battery life: 6 hrs | Charging time: 2.5 hrs</li>
                                <li className="_2-riNZ">Extra bass: Add extra thump to your music</li>
                                <li className="_2-riNZ">Using simple touch controls answer phone calls, change music tracks and control volume</li>
                                <li className="_2-riNZ">Sweatproof: With IPX 5 rating this product is ideal for rigorous workouts</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bhgxx2 col-6-12">
                    <div className="_3aj0Jp flex">
                        <div className="_3KRH50">Services</div>
                        <ul className="_77jr7B">
                            <li className="_3tB8QY">
                                <div className="_2nAcMv _1izu2e"></div>
                                <div className="_20PGcF">1 year</div>
                            </li>
                            <li className="_3tB8QY">
                                <div className="_2nAcMv _2o43H4"></div>
                                <div className="_20PGcF">10 Days Replacement Policy
                                    <div className="_20yN1P"><span className="question">?</span></div>
                                </div>
                            </li>
                            <li className="_3tB8QY">
                                <div className="_2nAcMv _2dTU7i"></div>
                                <div className="_20PGcF">Cash on Delivery available
                                    <div className="_20yN1P"><span className="question">?</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="_1HmYoV _35HD7C">
                <div className="bhgxx2 col-12-12">
                    <div className="_34wn58">
                        <div className="_1pQ2tg">
                            <span>Seller</span>
                        </div>
                        <div>
                            <div id="sellerName" className="_3HGjxn">
                                <span>
                                    <span>{props.product.brand}</span>
                                    <div className="hGSR34 YddkNl">4.3
                                        <img alt={props.product.name} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="_2lQ_WZ" />
                                    </div>
                                </span>
                            </div>
                            <div className="_3aj0Jp">
                                <ul className="_2GIvqp">
                                    <li className="_31u9b3">
                                        <div className="_20PGcF">10 Days Replacement Policy
                                            <div className="_20yN1P">
                                                <span className="question">?</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <li className="VXac4C">
                                <span className="">View </span>
                                <a href="/sellers?pid=ACCF6SZ8EFWFEPZ6&amp;otracker=hp_omu_Deals%252Bof%252Bthe%252BDay_1_2.dealCard.OMU_4R00IIA7BM5C_2&amp;fetchId=b7f8f03c-5cff-4a0c-a042-648334d3c99d.ACCF6SZ8EFWFEPZ6">
                                    <span className="_37fzmc">more sellers </span>
                                    <span>starting from </span>
                                    <span className="_18Zlgn">₹1,499</span>
                                </a>
                            </li> */}
                        </div>
                    </div>
                </div>
                <div className="bhgxx2 col-12-12">
                    <div className="_1y9a40">
                        <div className="_1oCqc9">Description</div>
                        <div className="_3cpW1u">
                            <div className="_3la3Fn _1zZOAc">
                                <p>
                                    {props.product.description}
                                    {/* Listen to interesting podcasts and great music on the go or when you’re working out with this sweat-resistant Bluetooth headset from Boat. This headset provides inline controls to help you skip tracks, adjust the volume, and even take calls. */}
                                    <br/>
                                </p>
                            </div>
                            <div className="_2tNhj9 C58Ieq">
                                <div className="_16-Ekq"></div>
                            </div>
                        </div>
                        <div className="_2_SKMk C58Ieq">Read More</div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ProductSpecification
