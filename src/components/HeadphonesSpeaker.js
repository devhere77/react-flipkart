import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import FetchHeadphoneSpeaker from './FetchHeadphoneSpeaker'
import { Link } from 'react-router-dom'

class HeadphonesSpeaker extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            headphoneSpeaker: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=speaker')
        .then(response => {
            this.setState({headphoneSpeaker: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){
        const type = "speaker"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Headphones &amp; Speakers</h2>
                            <div className="_2Umlwf">
                            <Link to={"/view-all/" + type } className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Headphones &amp; Speakers" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.headphoneSpeaker.map((speaker, i) => {
                                            return <FetchHeadphoneSpeaker key={i} speaker={speaker}/>
                                        })
                                    }
                                    {
                                        this.state.headphoneSpeaker.map((speaker, i) => {
                                            return <FetchHeadphoneSpeaker key={i} speaker={speaker}/>
                                        })
                                    }
                                    {
                                        this.state.headphoneSpeaker.map((speaker, i) => {
                                            return <FetchHeadphoneSpeaker key={i} speaker={speaker}/>
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/audio-video/headphones/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DNoise&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.headphone_design%255B%255D%3DEarbud&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_1_16.dealCard.OMU_1QAEJLPUPW1J_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_1_NA_view-all_12&amp;cid=1QAEJLPUPW1J">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Noise  (Upto 50% Off)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Noise </div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Wirelless Earbuds</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0">
                                            <a title="Extra Bass" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/audio-video/~cs-lpbbqskdpt/pr?sid=0pm&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_2_16.dealCard.OMU_YFWXP1WACYL0_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_2_NA_view-all_12&amp;cid=YFWXP1WACYL0">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Headphones (Extra Bass)" src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Headphones</div>
                                                <div className="BXlZdc">Extra Bass</div>
                                                <div className="_3o3r66">JBL, Sony &amp; boAt</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.9AEKXIJW547Q">
                                            <a title="From ₹ 399" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/audio-video/headphones/~cs-zgey95qx3j/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.brand%255B%255D%3DboAt&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.9AEKXIJW547Q&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_3_16.dealCard.OMU_9AEKXIJW547Q_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_3_NA_view-all_12&amp;cid=9AEKXIJW547Q">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="BoAt Headphones (From ₹ 399)" src="https://rukminim1.flixcart.com/image/150/150/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">BoAt Headphones</div>
                                                <div className="BXlZdc">From ₹ 399</div>
                                                <div className="_3o3r66">Bluetooth | Wired</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/audio-video/headphones/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DNoise&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.headphone_design%255B%255D%3DEarbud&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_1_16.dealCard.OMU_1QAEJLPUPW1J_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_1_NA_view-all_12&amp;cid=1QAEJLPUPW1J">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Noise  (Upto 50% Off)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Noise </div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Wirelless Earbuds</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0">
                                            <a title="Extra Bass" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/audio-video/~cs-lpbbqskdpt/pr?sid=0pm&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_2_16.dealCard.OMU_YFWXP1WACYL0_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_2_NA_view-all_12&amp;cid=YFWXP1WACYL0">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Headphones (Extra Bass)" src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Headphones</div>
                                                <div className="BXlZdc">Extra Bass</div>
                                                <div className="_3o3r66">JBL, Sony &amp; boAt</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.9AEKXIJW547Q">
                                            <a title="From ₹ 399" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/audio-video/headphones/~cs-zgey95qx3j/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.brand%255B%255D%3DboAt&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.9AEKXIJW547Q&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_3_16.dealCard.OMU_9AEKXIJW547Q_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_3_NA_view-all_12&amp;cid=9AEKXIJW547Q">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="BoAt Headphones (From ₹ 399)" src="https://rukminim1.flixcart.com/image/150/150/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jruyikw0/headphone/x/x/j/boat-bassheads-182-original-imafdka4vykzwvmx.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">BoAt Headphones</div>
                                                <div className="BXlZdc">From ₹ 399</div>
                                                <div className="_3o3r66">Bluetooth | Wired</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J">
                                            <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/audio-video/headphones/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DNoise&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.headphone_design%255B%255D%3DEarbud&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_1_16.dealCard.OMU_1QAEJLPUPW1J_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_1_NA_view-all_12&amp;cid=1QAEJLPUPW1J">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Noise  (Upto 50% Off)" src="https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0463rk0/headphone/y/d/h/noise-shots-std-grn-original-imafc8vfzfhmfdds.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Noise </div>
                                                <div className="BXlZdc">Upto 50% Off</div>
                                                <div className="_3o3r66">Wirelless Earbuds</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0">
                                            <a title="Extra Bass" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/audio-video/~cs-lpbbqskdpt/pr?sid=0pm&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.YFWXP1WACYL0&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_2_16.dealCard.OMU_YFWXP1WACYL0_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_2_NA_view-all_12&amp;cid=YFWXP1WACYL0">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Headphones (Extra Bass)" src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fqggknft6.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Headphones</div>
                                                <div className="BXlZdc">Extra Bass</div>
                                                <div className="_3o3r66">JBL, Sony &amp; boAt</div>
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

export default HeadphonesSpeaker
