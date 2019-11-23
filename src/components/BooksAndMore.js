import React, { Component } from 'react'
import { BASE_URL } from '../static_data/constants'
import axios from 'axios'
import FetchBooksMore from './FetchBooksMore'
import { Link } from 'react-router-dom'

class BooksAndMore extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            booksMore: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=more')
        .then(response => {
            this.setState({booksMore: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){
        const type = "more"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Books and more</h2>
                            <div className="_2Umlwf">
                                <Link to={"/view-all/" + type} className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Books and more" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.booksMore.map((more, i) => {
                                            return <FetchBooksMore key={i} more={more} />
                                        })
                                    }
                                    {
                                        this.state.booksMore.map((more, i) => {
                                            return <FetchBooksMore key={i} more={more} />
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH">
                                            <a title="Up to 80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/audio-players/audio-player-accessories/microphones-accessories/pr?sid=6bo,ord,713,5f9&amp;marketplace=FLIPKART&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_1_23.dealCard.OMU_1LTQGL0YIQJH_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_1_NA_view-all_19&amp;cid=1LTQGL0YIQJH">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Mobspy 3.5mm Clip Microphone For Youtube | Collar Mic for Voice Recording | Lapel Mic Mobile, PC, Laptop, Android Smartphones, DSLR Camera Microphone Microphone collar mic" src="https://rukminim1.flixcart.com/image/150/150/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Microphone Accessory</div>
                                                <div className="BXlZdc">Up to 80% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.18C8P5USLMP4">
                                            <a title="up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/musical-instruments/keys-synthesizers/pr?sid=ypu%2Cnvg&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.18C8P5USLMP4&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_2_23.dealCard.OMU_18C8P5USLMP4_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_2_NA_view-all_19&amp;cid=18C8P5USLMP4">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Casio KS44A CT-X870IN Digital Portable Keyboard" src="https://rukminim1.flixcart.com/image/150/150/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">keyboards</div>
                                                <div className="BXlZdc">up to 60% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4OJ8JUMO9J83">
                                            <a title="Up to 70% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/musical-instruments/string-instruments/acoustic-guitars/pr?sid=ypu%2Cujd%2C7wz&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.brand%255B%255D%3DJuarez&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4OJ8JUMO9J83&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_3_23.dealCard.OMU_4OJ8JUMO9J83_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_3_NA_view-all_19&amp;cid=4OJ8JUMO9J83">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Juarez JRZ38C/RDS Acoustic Guitar Red Sunburst 38 Inch Cutaway with Pick Guard Linden Wood Acoustic Guitar" src="https://rukminim1.flixcart.com/image/150/150/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Acoustic Guitars</div>
                                                <div className="BXlZdc">Up to 70% Off</div>
                                                <div className="_3o3r66">Juarez</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4Z0CT1IRKXUW">
                                            <a title="up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/musical-instruments/string-instruments/electric-guitars/pr?sid=ypu,ujd,kqe&amp;p[]=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4Z0CT1IRKXUW&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_4_23.dealCard.OMU_4Z0CT1IRKXUW_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_4_NA_view-all_19&amp;cid=4Z0CT1IRKXUW">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Juarez JRZ-ST01-SB Electric Guitar, With Case Electro-acoustic Guitar" src="https://rukminim1.flixcart.com/image/150/150/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Electric Guitars</div>
                                                <div className="BXlZdc">up to 60% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH">
                                            <a title="Up to 80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/audio-players/audio-player-accessories/microphones-accessories/pr?sid=6bo,ord,713,5f9&amp;marketplace=FLIPKART&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_1_23.dealCard.OMU_1LTQGL0YIQJH_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_1_NA_view-all_19&amp;cid=1LTQGL0YIQJH">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Mobspy 3.5mm Clip Microphone For Youtube | Collar Mic for Voice Recording | Lapel Mic Mobile, PC, Laptop, Android Smartphones, DSLR Camera Microphone Microphone collar mic" src="https://rukminim1.flixcart.com/image/150/150/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jn4x47k0/microphone-accessory/d/p/p/mobspy-3-5mm-clip-microphone-for-youtube-collar-mic-for-voice-original-imaf9vucqafs6gdm.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Microphone Accessory</div>
                                                <div className="BXlZdc">Up to 80% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.18C8P5USLMP4">
                                            <a title="up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/musical-instruments/keys-synthesizers/pr?sid=ypu%2Cnvg&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.18C8P5USLMP4&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_2_23.dealCard.OMU_18C8P5USLMP4_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_2_NA_view-all_19&amp;cid=18C8P5USLMP4">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Casio KS44A CT-X870IN Digital Portable Keyboard" src="https://rukminim1.flixcart.com/image/150/150/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jpbic280/musical-keyboard/z/w/7/ks44-casio-original-imafbkeyyhyg3nk3.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">keyboards</div>
                                                <div className="BXlZdc">up to 60% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4OJ8JUMO9J83">
                                            <a title="Up to 70% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/musical-instruments/string-instruments/acoustic-guitars/pr?sid=ypu%2Cujd%2C7wz&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.brand%255B%255D%3DJuarez&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4OJ8JUMO9J83&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_3_23.dealCard.OMU_4OJ8JUMO9J83_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_3_NA_view-all_19&amp;cid=4OJ8JUMO9J83">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Juarez JRZ38C/RDS Acoustic Guitar Red Sunburst 38 Inch Cutaway with Pick Guard Linden Wood Acoustic Guitar" src="https://rukminim1.flixcart.com/image/150/150/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Acoustic Guitars</div>
                                                <div className="BXlZdc">Up to 70% Off</div>
                                                <div className="_3o3r66">Juarez</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4Z0CT1IRKXUW">
                                            <a title="up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/musical-instruments/string-instruments/electric-guitars/pr?sid=ypu,ujd,kqe&amp;p[]=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.4Z0CT1IRKXUW&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_4_23.dealCard.OMU_4Z0CT1IRKXUW_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_4_NA_view-all_19&amp;cid=4Z0CT1IRKXUW">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Juarez JRZ-ST01-SB Electric Guitar, With Case Electro-acoustic Guitar" src="https://rukminim1.flixcart.com/image/150/150/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jj4ln680/electric-guitar/x/g/j/jrz-st01-sb-electric-guitar-without-case-juarez-original-imaf6rjfcsetyysd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Electric Guitars</div>
                                                <div className="BXlZdc">up to 60% Off</div>
                                                <div className="_3o3r66">Shop Now!</div>
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

export default BooksAndMore
