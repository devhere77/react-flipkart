import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import FetchFashionAccessory from './FetchFashionAccessory'
import { Link } from 'react-router-dom'

class FashionAccessory extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fashionAccessory: []
        }
    }

    componentDidMount(){
        axios.get(BASE_URL + 'get-product?type=accessory')
        .then(response => {
            this.setState({fashionAccessory: response.data.data})        
        })
        .catch(error => { console.error(error) }) 
    }
    
    render(){
        const type = "accessory"
            return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Fashion Accessories</h2>
                            <div className="_2Umlwf">                                
                                <Link to={"/view-all/" + type } className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Fashion Accessories" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.fashionAccessory.map((accessory, i) => {
                                            return <FetchFashionAccessory key={i} accessory={accessory} />
                                        })
                                    }
                                    {
                                        this.state.fashionAccessory.map((accessory, i) => {
                                            return <FetchFashionAccessory key={i} accessory={accessory} />
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A">
                                            <a title="60-80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/bags-wallets-belts/pr?sid=reh&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2527s&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_1_20.dealCard.OMU_OMB1BLPL1C6A_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_1_NA_view-all_16&amp;cid=OMB1BLPL1C6A">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="American Tourister X-jock Lap Bag 02 28.5 L Backpack" src="https://rukminim1.flixcart.com/image/150/150/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">American Tourister, Skybags...</div>    
                                                <div className="BXlZdc">60-80% Off</div>
                                                <div className="_3o3r66">Backpacks, Trolleys, Wallets...</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.S3EB59NWHK74">
                                            <a title="Upto 80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/watches/wrist-watches/pr?count=40&amp;p%5B%5D=facets.theme%255B%255D%3DSports&amp;sid=r18%2Ff13&amp;p%5B%5D=facets.theme%255B%255D%3DSporty&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D10%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.S3EB59NWHK74&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_2_20.dealCard.OMU_S3EB59NWHK74_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_2_NA_view-all_16&amp;cid=S3EB59NWHK74">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Casio B172 Baby-G Watch  - For Women" src="https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Casio, Fastrack &amp; more</div>
                                                <div className="BXlZdc">Upto 80% Off</div>
                                                <div className="_3o3r66">Women Watches</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.84BUPQO1RJ75">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/bags-wallets-belts/luggage-travel/rucksacks/pr?sid=reh,plk,san&amp;marketplace=FLIPKART&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.84BUPQO1RJ75&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_3_20.dealCard.OMU_84BUPQO1RJ75_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_3_NA_view-all_16&amp;cid=84BUPQO1RJ75">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Impulse Thames 85 Ltr Teal Rucksack  - 85 L" src="https://rukminim1.flixcart.com/image/150/150/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70 1x" />                                                </div>
                                                </div>
                                                <div className="iUmrbN">Wildcraft, Impulse &amp; more</div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Rucksacks</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.E08ST12CZSUB">
                                            <a title="Upto 70% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/bags-wallets-belts/pr?sid=reh&amp;marketplace=FLIPKART&amp;p%5B%5D=facets.brand%255B%255D%3DWiki%2Bby%2BWildcraft&amp;p%5B%5D=facets.brand%255B%255D%3DWildcraft&amp;p%5B%5D=facets.brand%255B%255D%3DADIDAS&amp;p%5B%5D=facets.brand%255B%255D%3DNike&amp;p%5B%5D=facets.brand%255B%255D%3DTommy%2BHilfiger&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.E08ST12CZSUB&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_4_20.dealCard.OMU_E08ST12CZSUB_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_4_NA_view-all_16&amp;cid=E08ST12CZSUB">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Tommy Hilfiger United 35 L Laptop Backpack" src="https://rukminim1.flixcart.com/image/150/150/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Wildcraft, Nike, Adidas...</div>
                                                <div className="BXlZdc">Upto 70% Off</div>
                                                <div className="_3o3r66">Backpacks, Duffels &amp; more</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A">
                                            <a title="60-80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/bags-wallets-belts/pr?sid=reh&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2527s&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_1_20.dealCard.OMU_OMB1BLPL1C6A_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_1_NA_view-all_16&amp;cid=OMB1BLPL1C6A">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="American Tourister X-jock Lap Bag 02 28.5 L Backpack" src="https://rukminim1.flixcart.com/image/150/150/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jjx6g7k0/backpack/j/q/g/amt-x-jock-lap-bag-02-teal-fi7-0-11-002-backpack-american-original-imaf7e4f6hfajnhk.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">American Tourister, Skybags...</div>    
                                                <div className="BXlZdc">60-80% Off</div>
                                                <div className="_3o3r66">Backpacks, Trolleys, Wallets...</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.S3EB59NWHK74">
                                            <a title="Upto 80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/watches/wrist-watches/pr?count=40&amp;p%5B%5D=facets.theme%255B%255D%3DSports&amp;sid=r18%2Ff13&amp;p%5B%5D=facets.theme%255B%255D%3DSporty&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D10%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.S3EB59NWHK74&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_2_20.dealCard.OMU_S3EB59NWHK74_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_2_NA_view-all_16&amp;cid=S3EB59NWHK74">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Casio B172 Baby-G Watch  - For Women" src="https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Casio, Fastrack &amp; more</div>
                                                <div className="BXlZdc">Upto 80% Off</div>
                                                <div className="_3o3r66">Women Watches</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.84BUPQO1RJ75">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/bags-wallets-belts/luggage-travel/rucksacks/pr?sid=reh,plk,san&amp;marketplace=FLIPKART&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.84BUPQO1RJ75&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_3_20.dealCard.OMU_84BUPQO1RJ75_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_3_NA_view-all_16&amp;cid=84BUPQO1RJ75">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Impulse Thames 85 Ltr Teal Rucksack  - 85 L" src="https://rukminim1.flixcart.com/image/150/150/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jnamvm80/rucksack/w/3/a/thames-85-ltr-teal-thames-85-ltr-rucksack-impulse-original-imafayj6yvhfbjhg.jpeg?q=70 1x" />                                                </div>
                                                </div>
                                                <div className="iUmrbN">Wildcraft, Impulse &amp; more</div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Rucksacks</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.E08ST12CZSUB">
                                            <a title="Upto 70% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/bags-wallets-belts/pr?sid=reh&amp;marketplace=FLIPKART&amp;p%5B%5D=facets.brand%255B%255D%3DWiki%2Bby%2BWildcraft&amp;p%5B%5D=facets.brand%255B%255D%3DWildcraft&amp;p%5B%5D=facets.brand%255B%255D%3DADIDAS&amp;p%5B%5D=facets.brand%255B%255D%3DNike&amp;p%5B%5D=facets.brand%255B%255D%3DTommy%2BHilfiger&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.E08ST12CZSUB&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_4_20.dealCard.OMU_E08ST12CZSUB_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_4_NA_view-all_16&amp;cid=E08ST12CZSUB">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Tommy Hilfiger United 35 L Laptop Backpack" src="https://rukminim1.flixcart.com/image/150/150/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jw84ya80/backpack/z/j/q/united-th-unitedlap08-laptop-backpack-tommy-hilfiger-original-imafgy9qkqgmzs4t.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Wildcraft, Nike, Adidas...</div>
                                                <div className="BXlZdc">Upto 70% Off</div>
                                                <div className="_3o3r66">Backpacks, Duffels &amp; more</div>
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

export default FashionAccessory
