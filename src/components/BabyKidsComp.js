import React from 'react'
import { Link } from 'react-router-dom'

function BabyKidsComp(props) {
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
                                <Link title="Kids Clothing" to='/'>Kids Clothing
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Boys' Clothing" to='/'>Boys' Clothing
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Polos &amp; T-Shirts" to='/'>Polos &amp; T-Shirts</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Ethnic Wear" to='/'>Ethnic Wear</Link>                                 
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Shorts &amp; 3/4ths" to='/'>Shorts &amp; 3/4ths</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Girls' Clothing" to='/'>Girls' Clothing                                 
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Dresses &amp; Skirts" to='/'>Dresses &amp; Skirts</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Ethnic Wear" to='/'>Ethnic Wear</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="T-shirts &amp; Tops" to='/'>T-shirts &amp; Tops</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Baby Boy Clothing" to='/'>Baby Boy Clothing                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Body Suits" to='/'>Body Suits</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Polos &amp; T-Shirts" to='/'>Polos &amp; T-Shirts</Link>                                
                            </li>                                    
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Baby Girl Clothing" to='/'>Baby Girl Clothing                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Body Suits" to='/'>Body Suits</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Dresses" to='/'>Dresses</Link>                                
                            </li>
                        </ul>
                    </li>
                </ul> 
            </li> 
        </ul>          
    )
}

export default BabyKidsComp
