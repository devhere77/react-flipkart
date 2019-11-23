import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../static_data/constants'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class TableRow extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: ''
        }

        this.deleteUser = this.deleteUser.bind(this)
    }

    deleteUser = () => {
        axios.delete(BASE_URL + 'delete-user?id='+this.props.user.id)
        .then(response => {
            if(response.status === 200){
                alert(response.data)
                this.props.history.push('/')
                this.props.history.push('/userlist')
            }else{
                alert(response.data)
                this.props.history.push('/')
                this.props.history.push('/userlist')
            }
            
        })
        .catch(error => console.error(error))
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>        
                <td>
                    <Link to={"/edit/" + this.props.user.id}>Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.deleteUser} >Delete</button>
                </td>
            </tr>
        )
    }
}

export default withRouter(TableRow)
