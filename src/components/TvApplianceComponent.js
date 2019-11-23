import React from 'react'
import { Link } from 'react-router-dom'

function TvApplianceComponent(props) {
    const display = props.toShow
    let value;
    if(display){
        value = 'block'
    }else{
        value = 'none'
    }

    return (
        <ul className="_3GtRpC" style={{display:value}}>
            <li className="_1GPxMV _3mmoXN">
                <ul className="_2OZ78M _1fj2FQ">
                    <li className="_2GG4xt">
                        <ul className="QPOmNK">
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Television" to='/'>Television                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Android TVs" to='/'>Android TVs                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Smart &amp; Ultra HD" to='/'>Smart &amp; Ultra HD                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw">Top Brands</li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Mi" to='/'>Mi</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Vu" to='/'>Vu</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Thomson" to='/'>Thomson</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Samsung" to='/'>Samsung</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="iFFALCON by TCL" to='/'>iFFALCON by TCL</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="MarQ by Flipkart" to='/'>MarQ by Flipkart</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="LG" to='/'>LG</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Micromax" to='/'>Micromax</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Kodak" to='/'>Kodak</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw">Shop by Screen Size</li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="24 &amp; below" to='/'>24 &amp; below</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="28 - 32" to='/'>28 - 32</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="39 - 43" to='/'>39 - 43</Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="48 - 55" to='/'>48 - 55</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="60 &amp; above" to='/'>60 &amp; above</Link>                                
                            </li>
                        </ul>
                    </li>
                </ul> 
            </li>
        </ul>               
    )
}

export default TvApplianceComponent
