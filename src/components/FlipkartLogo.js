import React from "react"
import { Link } from 'react-router-dom'

function FlipkartLogo() {
    return(
        <div className="_1T-JyI">
            <div className="_3dGepu">
                <a href="/">
                    <img width="75" 
                    src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" 
                    alt="Flipkart" title="Flipkart" className="_1e_EAo" />
                </a>
                <Link className="_33x-Wq" to="/">Explore
                    <span className="_2Ky4Ru">Plus</span>
                    <img width="10" alt="" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" />
                </Link>
            </div>
        </div>
    )
}    

export default FlipkartLogo