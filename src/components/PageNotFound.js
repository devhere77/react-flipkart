import React from 'react'
import '../css/404.css'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div id="container">
            <div style={{backgroundColor:"#2874f0", height:"78px", textAlign:"center"}}>
                <div style={{width: "100%", margin: "0 auto", paddingTop: "2px", textAlign:"left"}}>
                    <div style={{marginTop: "15px", textAlign: "center"}}>
                        <img width="149" alt="" src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png" 
                        style={{border: "none"}} />
                    </div>
                </div>
            </div> 

            <div style={{textAlign: "center", fontSize: "14px", padding: "20px"}}>
                <div>
                    <img style={{width: "450px", maxWidth: "100%"}} src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" id="IMG_3" alt="" />
                    <div style={{fontSsize: "1.3em", paddingTop: "10px", marginBottom: "35px"}}>
                        Unfortunately the page you are looking for has been moved or deleted
                    </div>
                    <Link to="/" className="button">GO TO HOMEPAGE</Link>
                </div>
            </div>    
        </div>        
    )
}

export default PageNotFound
