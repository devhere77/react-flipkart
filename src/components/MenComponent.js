import React from 'react'
import { Link } from 'react-router-dom'

function MenComponent(props) {
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
                                <Link title="Footwear" to='/'>Footwear                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Sports Shoes" to='/'>Sports Shoes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Casual Shoes" to='/'>Casual Shoes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Formal Shoes" to='/'>Formal Shoes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Sandals" to='/'>Sandals</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Flip- Flops" to='/'>Flip- Flops</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Loafers" to='/'>Loafers</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Boots" to='/'>Boots</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Running Shoes" to='/'>Running Shoes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Sneakers" to='/'>Sneakers</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Men's Grooming" to='/'>Men's Grooming                                
                                   <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Deodorants" to='/'>Deodorants</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Perfumes" to='/'>Perfumes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Beard Care &amp; Grooming" to='/'>Beard Care &amp; Grooming</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Shaving &amp; Aftershave" to='/'>Shaving &amp; Aftershave</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Sexual Wellness" to='/'>Sexual Wellness</Link>                                
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>            
    )
}

export default MenComponent
