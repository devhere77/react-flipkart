import React, { Component } from 'react'
import { BASE_URL } from '../static_data/constants'
import axios from 'axios'
import FetchTrendingOffer from './FetchTrendingOffer'
import { Link } from 'react-router-dom'

class TrendingOffers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            trendingOffers: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=offers')
        .then(response => {
            this.setState({trendingOffers: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){        
        const type = "offers"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Trending Offers</h2>
                            <div className="_2Umlwf">
                                {/* <a className="_2AkmmA _1eFTEo" href="/offers-list/trending-offers?screen=dynamic&amp;pk=marketplace%3DFLIPKART~widgetType%3DdealCard~contentType%3DpersonalisedRecommendation%2FC2&amp;marketplace=FLIPKART&amp;wid=10.dealCard.OMU_7&amp;otracker=hp_reco_Trending%2BOffers_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_wc_view-all_7">VIEW ALL</a> */}
                                <Link to={"/view-all/" + type } className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Trending Offers" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;">
                        <div className="_3BEcOp">
                            <div className="EstLIe" style={{width: "2350px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.trendingOffers.map((trending, i) => {
                                            return <FetchTrendingOffer key={i} trending={trending}/>
                                        })
                                    }
                                    {
                                        this.state.trendingOffers.map((trending, i) => {
                                            return <FetchTrendingOffer key={i} trending={trending}/>
                                        })
                                    }
                                    {/* <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL;nid:2oq_c1r_3pj_7od_;mp:F;ct:o;">
                                            <a title="Top Picks" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/sarees/pr?sid=2oq,c1r,3pj,7od&amp;offer=nb:mp:10da906f05&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_1_10.dealCard.OMU_cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_1_NA_view-all_7&amp;cid=cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Sarees" src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Sarees</div>
                                                <div className="BXlZdc">Top Picks</div>
                                                <div className="_3o3r66">Buy Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL;nid:2oq_s9b_j9y_;mp:F;ct:o;">
                                            <a title="Special Offers" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/mens-tshirts/pr?sid=2oq,s9b,j9y&amp;offer=nb:mp:100a70f103&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_2_10.dealCard.OMU_cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_7&amp;cid=cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="T-Shirts" src="https://rukminim1.flixcart.com/image/150/150/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70 1x" />                                                
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">T-Shirts</div>
                                                <div className="BXlZdc">Special Offers</div>
                                                <div className="_3o3r66">Explore Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL;nid:0hx_bwd_bgt_aga_q1p_;mp:F;ct:o;">
                                            <a title="Top Offers" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/arm-sleeves/pr?sid=0hx,bwd,bgt,aga,q1p&amp;offer=nb:mp:08b9a76f25&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_3_10.dealCard.OMU_cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_3_NA_view-all_7&amp;cid=cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Arm Sleeves" src="https://rukminim1.flixcart.com/image/150/150/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70 1x" /> 
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Arm Sleeves</div>
                                                <div className="BXlZdc">Top Offers</div>
                                                <div className="_3o3r66">Great Savings!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL;nid:reh_ihu_yvb_;mp:F;ct:o;">
                                            <a title="Extra 5% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/backpack-handbags/pr?sid=reh,ihu,yvb&amp;offer=nb:mp:09e33f5229&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_4_10.dealCard.OMU_cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_4_NA_view-all_7&amp;cid=cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Backpack Handbags" src="https://rukminim1.flixcart.com/image/150/150/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Backpack Handbags</div>
                                                <div className="BXlZdc">Extra 5% Off</div>
                                                <div className="_3o3r66">Grab Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL;nid:2oq_c1r_3pj_7od_;mp:F;ct:o;">
                                            <a title="Top Picks" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/sarees/pr?sid=2oq,c1r,3pj,7od&amp;offer=nb:mp:10da906f05&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_1_10.dealCard.OMU_cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_1_NA_view-all_7&amp;cid=cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Sarees" src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/k0vbgy80/sari/p/5/a/free-kanjivaram-saree-in-flipkart-ferwik-fashion-original-imaf7atftaaqufzd.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Sarees</div>
                                                <div className="BXlZdc">Top Picks</div>
                                                <div className="_3o3r66">Buy Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL;nid:2oq_s9b_j9y_;mp:F;ct:o;">
                                            <a title="Special Offers" className="K6IBc-" data-widget-type="omu" data-tracking-id="1" href="/mens-tshirts/pr?sid=2oq,s9b,j9y&amp;offer=nb:mp:100a70f103&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_2_10.dealCard.OMU_cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_7&amp;cid=cid%3AS_F_N_2oq_s9b_j9y__o_nb_mp_100a70f103__NONE_ALL%3Bnid%3A2oq_s9b_j9y_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="T-Shirts" src="https://rukminim1.flixcart.com/image/150/150/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=70 1x" />                                                
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">T-Shirts</div>
                                                <div className="BXlZdc">Special Offers</div>
                                                <div className="_3o3r66">Explore Now!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL;nid:0hx_bwd_bgt_aga_q1p_;mp:F;ct:o;">
                                            <a title="Top Offers" className="K6IBc-" data-widget-type="omu" data-tracking-id="2" href="/arm-sleeves/pr?sid=0hx,bwd,bgt,aga,q1p&amp;offer=nb:mp:08b9a76f25&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_3_10.dealCard.OMU_cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_3_NA_view-all_7&amp;cid=cid%3AS_F_N_0hx_bwd_bgt_aga_q1p__o_nb_mp_08b9a76f25__NONE_ALL%3Bnid%3A0hx_bwd_bgt_aga_q1p_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Arm Sleeves" src="https://rukminim1.flixcart.com/image/150/150/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jvy4vbk0/arm-sleeve/6/r/j/free-premium-let-s-slim-unisex-cool-black-arm-sleeves-pack-of-original-imafgq4cgjc3ugpy.jpeg?q=70 1x" /> 
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Arm Sleeves</div>
                                                <div className="BXlZdc">Top Offers</div>
                                                <div className="_3o3r66">Great Savings!</div>
                                                <div className="_3e_Ruh"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="_2kSfQ4" style={{width: "195px"}}>
                                        <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL;nid:reh_ihu_yvb_;mp:F;ct:o;">
                                            <a title="Extra 5% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="3" href="/backpack-handbags/pr?sid=reh,ihu,yvb&amp;offer=nb:mp:09e33f5229&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_4_10.dealCard.OMU_cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_4_NA_view-all_7&amp;cid=cid%3AS_F_N_reh_ihu_yvb__o_nb_mp_09e33f5229__NONE_ALL%3Bnid%3Areh_ihu_yvb_%3Bmp%3AF%3Bct%3Ao%3B">
                                                <div className="_2PX1l4" style={{height: "150px"}}>
                                                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                                                        <img className="_1Nyybr  _30XEf0" alt="Backpack Handbags" src="https://rukminim1.flixcart.com/image/150/150/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70" srcSet="https://rukminim1.flixcart.com/image/300/300/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/150/150/jumzc7k0/backpack/z/y/q/pithu-red-bcsr06-backpack-don-t-look-original-imaf23fy5msgtkgj.jpeg?q=70 1x" />
                                                    </div>
                                                </div>
                                                <div className="iUmrbN">Backpack Handbags</div>
                                                <div className="BXlZdc">Extra 5% Off</div>
                                                <div className="_3o3r66">Grab Now!</div>
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

export default TrendingOffers
