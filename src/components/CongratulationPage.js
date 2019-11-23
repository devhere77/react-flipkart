import React, { Component } from 'react'
import FlipkartLogo from './FlipkartLogo'
import { Link } from 'react-router-dom'

class CongratulationPage extends Component {

    constructor(props) {
        super(props)
    
        localStorage.removeItem('cartProducts')
        localStorage.removeItem('quantity')
        localStorage.removeItem('itemsInCart')
    }
    
    render() {
        return (
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />
                            {/* <SearchComponent />
                            <LoginSignupComponent />                             */}
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                </div>                       

                <div className="t-0M7P _27IFdQ">
                    <div className="_1VV5Cf _1QHAXj">
                        <div className="_1SFos- " style={{transform: 'translate(1)'}}></div>
                    </div>
                    <div className="_3e7xtJ">
                        <div className="_1HmYoV hCUpcT col-12-12">
                            <div className="_1HmYoV _35HD7C" style={{flexGrow: 1, overflow: 'visible'}}>
                                <div className="_1HmYoV _35HD7C col-12-12" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px"}}>
                                    <div className="_1HmYoV hCUpcT col-12-12" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                        <div className="bhgxx2 col-3-12">
                                            <div className="_2EoEbp">
                                                <div className="_1lBhq8"></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bhgxx2 col-12-12">
                                        <div className="_20my3-">
                                            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" 
                                            className="_3y1KzS" alt=""/>
                                                <div className="hJKWmk">Congratulations!! Your Order has been placed</div>
                                                {/* <div className="_2VeR_A">Login to see the items you added previously</div> */}
                                                <Link to='/'>
                                                    <button className="_2AkmmA _2Z-ax5 _7UHT_c">
                                                        <span>Home</span>
                                                    </button>
                                                </Link>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CongratulationPage
