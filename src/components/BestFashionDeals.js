import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import FetchFashionDeals from './FetchFashionDeals'
import { Link } from 'react-router-dom' 

class BestFashionDeals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fashionDeals: []
        }
    }

    componentDidMount() {
        axios.get(BASE_URL + 'get-product?type=fashion')
        .then(response => {
            this.setState({fashionDeals: response.data.data})        
        })
        .catch(error => { console.error(error) })
    }
    
    render(){
        const type = "fashion"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Best of Fashion Deals</h2>
                            <div className="_2Umlwf">
                                <Link to={"/view-all/" + type} className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                        <h3 className="Hkx0N0">Up to 80% Off</h3>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Best of Fashion Deals" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.fashionDeals.map((fashion, i) => {
                                            return <FetchFashionDeals key={i} fashion={fashion} />
                                        })
                                    }
                                    {
                                        this.state.fashionDeals.map((fashion, i) => {
                                            return <FetchFashionDeals key={i} fashion={fashion} />
                                        })
                                    }
                                    {
                                        this.state.fashionDeals.map((fashion, i) => {
                                            return <FetchFashionDeals key={i} fashion={fashion} />
                                        })
                                    }

                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE">
                                            <a title="Up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/mens-footwear/casual-shoes/pr?p%5B%5D=facets.type%255B%255D%3DBoat%2BShoes&amp;sid=osp%2Fcil%2Fe1f&amp;p%5B%5D=facets.price_range.from%3DMin&amp;p%5B%5D=facets.price_range.to%3D399&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_1_12.dealCard.OMU_3ULXF55WA8HE_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_1_NA_view-all_9&amp;cid=3ULXF55WA8HE">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="U.S. Polo Assn Men Boat shoes For Men" src="https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Boat Shoes</div>
                                                <div className="BXlZdc">Up to 60% Off</div>
                                                <div className="_3o3r66">USPA, Clarks &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/mens-footwear/pr?sid=osp%2Ccil&amp;sort=popularity&amp;p%5B%5D=facets.brand%255B%255D%3DWoodland&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_2_12.dealCard.OMU_8O8XZN90PNEV_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_2_NA_view-all_9&amp;cid=8O8XZN90PNEV">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Woodland Outdoor For Men" src="https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Woodland</div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Casual, Formal Shoes &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.FY6TXMT8LMT5">
                                            <a title="Min. 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/womens-footwear/flats/~top-selling-brands/pr?sid=osp,iko,9d5&amp;p[]=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.FY6TXMT8LMT5&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_3_12.dealCard.OMU_FY6TXMT8LMT5_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_3_NA_view-all_9&amp;cid=FY6TXMT8LMT5">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="My Foot Women Red Flats" src="https://rukminim1.flixcart.com/image/150/150/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Women's Flats</div>
                                                <div className="BXlZdc">Min. 50% Off</div>
                                                <div className="_3o3r66">Miss CL, Catwalk &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE">
                                            <a title="Up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/mens-footwear/casual-shoes/pr?p%5B%5D=facets.type%255B%255D%3DBoat%2BShoes&amp;sid=osp%2Fcil%2Fe1f&amp;p%5B%5D=facets.price_range.from%3DMin&amp;p%5B%5D=facets.price_range.to%3D399&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_1_12.dealCard.OMU_3ULXF55WA8HE_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_1_NA_view-all_9&amp;cid=3ULXF55WA8HE">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="U.S. Polo Assn Men Boat shoes For Men" src="https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Boat Shoes</div>
                                                <div className="BXlZdc">Up to 60% Off</div>
                                                <div className="_3o3r66">USPA, Clarks &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/mens-footwear/pr?sid=osp%2Ccil&amp;sort=popularity&amp;p%5B%5D=facets.brand%255B%255D%3DWoodland&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_2_12.dealCard.OMU_8O8XZN90PNEV_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_2_NA_view-all_9&amp;cid=8O8XZN90PNEV">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Woodland Outdoor For Men" src="https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Woodland</div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Casual, Formal Shoes &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.FY6TXMT8LMT5">
                                            <a title="Min. 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/womens-footwear/flats/~top-selling-brands/pr?sid=osp,iko,9d5&amp;p[]=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.FY6TXMT8LMT5&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_3_12.dealCard.OMU_FY6TXMT8LMT5_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_3_NA_view-all_9&amp;cid=FY6TXMT8LMT5">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="My Foot Women Red Flats" src="https://rukminim1.flixcart.com/image/150/150/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/sandal/v/j/d/n1834-36-my-foot-red-original-imaeqjeesypuu2zd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Women's Flats</div>
                                                <div className="BXlZdc">Min. 50% Off</div>
                                                <div className="_3o3r66">Miss CL, Catwalk &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE">
                                            <a title="Up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/mens-footwear/casual-shoes/pr?p%5B%5D=facets.type%255B%255D%3DBoat%2BShoes&amp;sid=osp%2Fcil%2Fe1f&amp;p%5B%5D=facets.price_range.from%3DMin&amp;p%5B%5D=facets.price_range.to%3D399&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_1_12.dealCard.OMU_3ULXF55WA8HE_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_1_NA_view-all_9&amp;cid=3ULXF55WA8HE">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="U.S. Polo Assn Men Boat shoes For Men" src="https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/shoe/g/r/p/buff-alicante-grey-2531502802-u-s-polo-assn-9-original-imaehqrruhjjrtkq.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Boat Shoes</div>
                                                <div className="BXlZdc">Up to 60% Off</div>
                                                <div className="_3o3r66">USPA, Clarks &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/mens-footwear/pr?sid=osp%2Ccil&amp;sort=popularity&amp;p%5B%5D=facets.brand%255B%255D%3DWoodland&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.8O8XZN90PNEV&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_2_12.dealCard.OMU_8O8XZN90PNEV_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_2_NA_view-all_9&amp;cid=8O8XZN90PNEV">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Woodland Outdoor For Men" src="https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j7asfbk0/shoe/k/a/u/gc-1868115-42-woodland-camel-original-imaexkhcehpj93tb.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Woodland</div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Casual, Formal Shoes &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                                                
        )
    }    
}

export default BestFashionDeals
