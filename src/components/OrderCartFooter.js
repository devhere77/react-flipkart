import React from 'react'
import { Link } from 'react-router-dom'

function OrderCartFooter() {
    return (
        <footer className="HJlsB9 _1ajLs1">
            <div className="TW4owM">
                <div>
                    <div>
                        <div className="tp0zrl">
                            <div className="_1WEvHA col col-8-12">
                                <span>
                                    <span className="policies-title footertitle">Policies:</span>
                                    <Link className="x87Lt1" to={'/login-before-buy'}>Returns Policy</Link>
                                    <Link className="x87Lt1" to={'/login-before-buy'}>Terms of use</Link>
                                    <Link className="x87Lt1" to={'/login-before-buy'}>Security</Link>
                                    <Link className="x87Lt1" to={'/login-before-buy'}>Privacy</Link>
                                    <Link className="x87Lt1" to={'/login-before-buy'}>Infringement</Link>
                                </span>
                                <span className="_3Nusnj">© 2007-2019 <span>Flipkart.com.</span></span>
                            </div>
                            <div className="_1WEvHA _2uGUAL col col-4-12">
                                <span>Need help? </span>
                                <span>Visit the
                                    <Link to={'/login-before-buy'} className="_2y0pv_"> Help Center</Link> or
                                    <Link to={'/login-before-buy'} className="_2y0pv_"> Contact Us</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default OrderCartFooter
