import React, { Component } from 'react'
import { BASE_URL } from '../static_data/constants'
import axios from 'axios'
import FetchDataStorage from './FetchDataStorage'
import { Link } from 'react-router-dom'

class DataStorageDevice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            storageDevices: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=storage')
        .then(response => {
            this.setState({storageDevices: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){
        const type="storage"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Data Storage Devices</h2>
                            <div className="_2Umlwf">
                            <Link to={"/view-all/" + type} className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                        <h3 className="Hkx0N0">Memory cards, PenDrives &amp; More</h3>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Data Storage Devices" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.storageDevices.map((storage, i) => {
                                            return <FetchDataStorage key={i} storage={storage} />
                                        })
                                    }
                                    {
                                        this.state.storageDevices.map((storage, i) => {
                                            return <FetchDataStorage key={i} storage={storage} />
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>                                        
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK">
                                            <a title="Min.50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/storage/pen-drives/pr?sid=6bo%2Cjdy%2Cuar&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.type%255B%255D%3DPendrive&amp;p%5B%5D=facets.brand%255B%255D%3DHP&amp;p%5B%5D=facets.capacity%255B%255D%3D32%2BGB&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_1_27.dealCard.OMU_M796G0BK5CEK_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_1_NA_view-all_23&amp;cid=M796G0BK5CEK">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="HP V236w 32 GB Pen Drive" src="https://rukminim1.flixcart.com/image/150/150/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">HP 32GB Pendrives</div>
                                                <div className="BXlZdc">Min.50% Off</div>
                                                <div className="_3o3r66">Best Selling</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.9FS2P6FQRJU4">
                                            <a title="Min.50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/computers/storage/memory-cards/pr?sid=6bo%2Cjdy%2Ctby&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.brand%255B%255D%3DSanDisk&amp;p%5B%5D=facets.capacity%255B%255D%3D32%2BGB&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.9FS2P6FQRJU4&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_2_27.dealCard.OMU_9FS2P6FQRJU4_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_2_NA_view-all_23&amp;cid=9FS2P6FQRJU4">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="SanDisk Ultra 32 GB MicroSDHC className 10 98 MB/s  Memory Card" src="https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Sandisk 32GB Memory Cards</div>
                                                <div className="BXlZdc">Min.50% Off</div>
                                                <div className="_3o3r66">Top Rated</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.RMQAECMCGD5S">
                                            <a title="From ₹739" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/computers/storage/~otg-pen-drives-and-more/pr?sid=6bo,jdy&amp;p[]=facets.availability%255B%255D%3DInclude%2BOut%2Bof%2BStock&amp;p[]=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.RMQAECMCGD5S&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_3_27.dealCard.OMU_RMQAECMCGD5S_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_3_NA_view-all_23&amp;cid=RMQAECMCGD5S">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="SanDisk Type-c OTG PenDrives (From ₹739)" src="https://rukminim1.flixcart.com/image/150/150/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">SanDisk Type-c OTG PenDrives</div>
                                                <div className="BXlZdc">From ₹739</div>
                                                <div className="_3o3r66">Just Launched</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.20JS5FJSUOLH">
                                            <a title="From ₹399" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/computers/storage/pr?sid=6bo%2Cjdy&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.brand%255B%255D%3DSamsung&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.20JS5FJSUOLH&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_4_27.dealCard.OMU_20JS5FJSUOLH_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_4_NA_view-all_23&amp;cid=20JS5FJSUOLH">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Data Storage Devices (From ₹399)" src="https://rukminim1.flixcart.com/image/150/150/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Data Storage Devices</div>
                                                <div className="BXlZdc">From ₹399</div>
                                                <div className="_3o3r66">Samsung</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK">
                                            <a title="Min.50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/storage/pen-drives/pr?sid=6bo%2Cjdy%2Cuar&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.type%255B%255D%3DPendrive&amp;p%5B%5D=facets.brand%255B%255D%3DHP&amp;p%5B%5D=facets.capacity%255B%255D%3D32%2BGB&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_1_27.dealCard.OMU_M796G0BK5CEK_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_1_NA_view-all_23&amp;cid=M796G0BK5CEK">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="HP V236w 32 GB Pen Drive" src="https://rukminim1.flixcart.com/image/150/150/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/joq2qa80/pendrive/pendrive/z/x/v/hp-v236w-original-imafb3td2vhpzhcy.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">HP 32GB Pendrives</div>
                                                <div className="BXlZdc">Min.50% Off</div>
                                                <div className="_3o3r66">Best Selling</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.9FS2P6FQRJU4">
                                            <a title="Min.50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/computers/storage/memory-cards/pr?sid=6bo%2Cjdy%2Ctby&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.brand%255B%255D%3DSanDisk&amp;p%5B%5D=facets.capacity%255B%255D%3D32%2BGB&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.9FS2P6FQRJU4&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_2_27.dealCard.OMU_9FS2P6FQRJU4_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_2_NA_view-all_23&amp;cid=9FS2P6FQRJU4">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="SanDisk Ultra 32 GB MicroSDHC className 10 98 MB/s  Memory Card" src="https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Sandisk 32GB Memory Cards</div>
                                                <div className="BXlZdc">Min.50% Off</div>
                                                <div className="_3o3r66">Top Rated</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.RMQAECMCGD5S">
                                            <a title="From ₹739" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/computers/storage/~otg-pen-drives-and-more/pr?sid=6bo,jdy&amp;p[]=facets.availability%255B%255D%3DInclude%2BOut%2Bof%2BStock&amp;p[]=facets.serviceability%5B%5D%3Dtrue&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.RMQAECMCGD5S&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_3_27.dealCard.OMU_RMQAECMCGD5S_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_3_NA_view-all_23&amp;cid=RMQAECMCGD5S">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="SanDisk Type-c OTG PenDrives (From ₹739)" src="https://rukminim1.flixcart.com/image/150/150/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jrz8u4w0/pendrive/type-a-to-type-c/z/v/e/sandisk-sdddc2-256g-i35-original-imafdnchhgybwheg.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">SanDisk Type-c OTG PenDrives</div>
                                                <div className="BXlZdc">From ₹739</div>
                                                <div className="_3o3r66">Just Launched</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.20JS5FJSUOLH">
                                            <a title="From ₹399" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/computers/storage/pr?sid=6bo%2Cjdy&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.brand%255B%255D%3DSamsung&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.20JS5FJSUOLH&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_4_27.dealCard.OMU_20JS5FJSUOLH_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_4_NA_view-all_23&amp;cid=20JS5FJSUOLH">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Data Storage Devices (From ₹399)" src="https://rukminim1.flixcart.com/image/150/150/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jtsz3bk0/internal-hard-drive/k/f/g/samsung-mz-76p512bw-original-imafdfw5p5tjzadt.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Data Storage Devices</div>
                                                <div className="BXlZdc">From ₹399</div>
                                                <div className="_3o3r66">Samsung</div>
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

export default DataStorageDevice
