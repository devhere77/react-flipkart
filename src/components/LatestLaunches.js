import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import FetchLatestLaunches from './FetchLatestLaunches'
import { Link } from 'react-router-dom'

class LatestLaunches extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            latestDeals: []
        }
    }

    componentDidMount() {
        axios.get(BASE_URL + 'get-product?type=latest')
        .then(response => {
            this.setState({latestDeals: response.data.data})        
        })
        .catch(error => { console.error(error) })
    }

    render(){
        const type = "latest"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Latest Launches</h2>
                            <div className="_2Umlwf">
                            <Link to={"/view-all/" + type } className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                        <h3 className="Hkx0N0">See What's New</h3>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Latest Launches" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.latestDeals.map((latest, i) => {
                                            return <FetchLatestLaunches key={i} latest={latest} />
                                        })
                                    }
                                    {
                                        this.state.latestDeals.map((latest, i) => {
                                            return <FetchLatestLaunches key={i} latest={latest} />
                                        })
                                    }
                                    {
                                        this.state.latestDeals.map((latest, i) => {
                                            return <FetchLatestLaunches key={i} latest={latest} />
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H">
                                            <a title="SD 439 Processor" className="K6IBc-" data-widget-type="omu" data-tracking-id="" target="_blank" rel="noopener noreferrer" href="/redmi-8-ruby-red-64-gb/p/itm77e109b951360?pid=MOBFKPYDCVSCZBYR&amp;lid=LSTMOBFKPYDCVSCZBYRIZZUTP&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_1_15.dealCard.OMU_UAROFOVN2C7H_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_1_NA_view-all_11&amp;cid=UAROFOVN2C7H">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Redmi 8 (SD 439 Processor)" src="https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Redmi 8 (Ruby Red, 64 GB)</div>
                                                <div className="BXlZdc">SD 439 Processor</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹7,999</div>
                                                    <div className="_18khS9">   
                                                        <div className="L200Vs">₹10,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU">
                                            <a title="5000 mAh Battery" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" target="_blank" rel="noopener noreferrer" href="/infinix-hot-8-quetzal-cyan-64-gb/p/itm176568dde7f63?pid=MOBFJJJVH6QYNE3P&amp;lid=LSTMOBFJJJVH6QYNE3PL86ZA6&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_2_15.dealCard.OMU_I3TXAA9UOXCU_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_2_NA_view-all_11&amp;cid=I3TXAA9UOXCU">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Infinix Hot 8 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Infinix Hot 8 (Quetzal Cyan, 64 GB)</div>
                                                <div className="BXlZdc">5000 mAh Battery</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹6,999</div>
                                                    <div className="_18khS9">
                                                        <div className="L200Vs">₹8,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.9CMPZ9UZY8YE">
                                            <a title="5000 mAh Battery" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" target="_blank" rel="noopener noreferrer" href="/redmi-8a-sunset-red-32-gb/p/itm5474ed67d23bf?pid=MOBFKF98FTTEN832&amp;lid=LSTMOBFKF98FTTEN832NKEHTF&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.9CMPZ9UZY8YE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_3_15.dealCard.OMU_9CMPZ9UZY8YE_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_3_NA_view-all_11&amp;cid=9CMPZ9UZY8YE">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Redmi 8A (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Redmi 8A (Sunset Red, 32 GB)</div>
                                                <div className="BXlZdc">5000 mAh Battery</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹6,499</div>
                                                    <div className="_18khS9">
                                                        <div className="L200Vs">₹7,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H">
                                            <a title="SD 439 Processor" className="K6IBc-" data-widget-type="omu" data-tracking-id="" target="_blank" rel="noopener noreferrer" href="/redmi-8-ruby-red-64-gb/p/itm77e109b951360?pid=MOBFKPYDCVSCZBYR&amp;lid=LSTMOBFKPYDCVSCZBYRIZZUTP&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_1_15.dealCard.OMU_UAROFOVN2C7H_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_1_NA_view-all_11&amp;cid=UAROFOVN2C7H">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Redmi 8 (SD 439 Processor)" src="https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Redmi 8 (Ruby Red, 64 GB)</div>
                                                <div className="BXlZdc">SD 439 Processor</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹7,999</div>
                                                    <div className="_18khS9">   
                                                        <div className="L200Vs">₹10,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU">
                                            <a title="5000 mAh Battery" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" target="_blank" rel="noopener noreferrer" href="/infinix-hot-8-quetzal-cyan-64-gb/p/itm176568dde7f63?pid=MOBFJJJVH6QYNE3P&amp;lid=LSTMOBFJJJVH6QYNE3PL86ZA6&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_2_15.dealCard.OMU_I3TXAA9UOXCU_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_2_NA_view-all_11&amp;cid=I3TXAA9UOXCU">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Infinix Hot 8 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Infinix Hot 8 (Quetzal Cyan, 64 GB)</div>
                                                <div className="BXlZdc">5000 mAh Battery</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹6,999</div>
                                                    <div className="_18khS9">
                                                        <div className="L200Vs">₹8,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.9CMPZ9UZY8YE">
                                            <a title="5000 mAh Battery" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" target="_blank" rel="noopener noreferrer" href="/redmi-8a-sunset-red-32-gb/p/itm5474ed67d23bf?pid=MOBFKF98FTTEN832&amp;lid=LSTMOBFKF98FTTEN832NKEHTF&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.9CMPZ9UZY8YE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_3_15.dealCard.OMU_9CMPZ9UZY8YE_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_3_NA_view-all_11&amp;cid=9CMPZ9UZY8YE">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Redmi 8A (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0y6cnk0/mobile/p/4/x/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Redmi 8A (Sunset Red, 32 GB)</div>
                                                <div className="BXlZdc">5000 mAh Battery</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹6,499</div>
                                                    <div className="_18khS9">
                                                        <div className="L200Vs">₹7,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H">
                                            <a title="SD 439 Processor" className="K6IBc-" data-widget-type="omu" data-tracking-id="" target="_blank" rel="noopener noreferrer" href="/redmi-8-ruby-red-64-gb/p/itm77e109b951360?pid=MOBFKPYDCVSCZBYR&amp;lid=LSTMOBFKPYDCVSCZBYRIZZUTP&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_1_15.dealCard.OMU_UAROFOVN2C7H_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_1_NA_view-all_11&amp;cid=UAROFOVN2C7H">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Redmi 8 (SD 439 Processor)" src="https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Redmi 8 (Ruby Red, 64 GB)</div>
                                                <div className="BXlZdc">SD 439 Processor</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹7,999</div>
                                                    <div className="_18khS9">   
                                                        <div className="L200Vs">₹10,999</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU">
                                            <a title="5000 mAh Battery" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" target="_blank" rel="noopener noreferrer" href="/infinix-hot-8-quetzal-cyan-64-gb/p/itm176568dde7f63?pid=MOBFJJJVH6QYNE3P&amp;lid=LSTMOBFJJJVH6QYNE3PL86ZA6&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.I3TXAA9UOXCU&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_2_15.dealCard.OMU_I3TXAA9UOXCU_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_2_NA_view-all_11&amp;cid=I3TXAA9UOXCU">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Infinix Hot 8 (5000 mAh Battery)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Infinix Hot 8 (Quetzal Cyan, 64 GB)</div>
                                                <div className="BXlZdc">5000 mAh Battery</div>
                                                <div className="_3e_Ruh">
                                                    <div className="M_qL-C">₹6,999</div>
                                                    <div className="_18khS9">
                                                        <div className="L200Vs">₹8,999</div>
                                                    </div>
                                                </div>
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

export default LatestLaunches
