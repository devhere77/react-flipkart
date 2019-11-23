import React, { Component } from 'react'
import FlipkartLogo from '../../components/FlipkartLogo'
import SearchComponent from '../../components/SearchComponent'
import EditComponent from './EditComponent'
import UserList from './UserList'

class EditUser extends Component {
    render() {        
        return (
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />
                            <SearchComponent />         
                            <UserList />                             
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div>
                <EditComponent id={this.props.match.params.id}/>
            </div>    
        )
    }
}

export default EditUser
