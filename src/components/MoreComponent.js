import React, { Component } from  'react'
import MoreDropdown from './MoreDropdown'


class MoreComponent extends Component{

    constructor(props){
        super(props)

        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)

        this.state = {
            isDropdownOpen: false
        }
    }

    openDropdown = () => {        
        this.setState({
            isDropdownOpen: true
        })                    
    }

    closeDropdown = () => {        
        this.setState({
            isDropdownOpen: false
        })                    
    }

    render(){
        let dropdown;        
        if(this.state.isDropdownOpen){
            dropdown = <MoreDropdown />
        }
        
        return(
            <div className="_1jA3uo">
                <div className="dHGf8H" onMouseOver={this.openDropdown} onMouseLeave={this.closeDropdown}>
                    <div className="_1jcwFN _3dmQRh">
                        <div>
                            <div className="_2aUbKa"> More</div>
                        </div>                            
                        {dropdown}
                    </div>
                    <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_34Yjv1">
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" 
                        fill="#fff" className="_14jSvk">                                            
                        </path>
                    </svg>
                </div>
            </div>
        )
    }
}

export default MoreComponent