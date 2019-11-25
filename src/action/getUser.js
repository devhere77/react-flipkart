import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, INCRCOUNTER, DECRCOUNTER, ADDTOCART, ITEMSINCART, SETCART, 
    ITEMSREMOVED, REMOVESINGLEITEM, CUSTOMERINFO } 
from './actionType'
import { BASE_URL } from '../static_data/constants'
import axios from 'axios'

// Async task
export const loginUserAPI = ({email, password, custId}) => {
    
    return (dispatch) => {
        dispatch(loginUser())       

        axios.get(`${BASE_URL}user/login?email=${email}&password=${password}&id=${custId}`)
            .then(response => dispatch(loginUserSuccess(response.data.status, response.data.data[0])))
            .catch(error => dispatch(loginUserFail(error)))
    };
}

export const userLogout = (data) => {
    return(dispatch) => {
        dispatch(logout(data))
    }
}

export const userLogin = (data) => {
    return(dispatch) => {
        dispatch(loginUserSuccess(data))
    }
}

export const addToCartApi = ({prodId, custId, val, price, items}) => {    
    return(dispatch) => {
        axios.get(BASE_URL + `add-into-cart?id=${custId}&prodId=${prodId}&type=${val}&price=${price}`)
        .then(response => {
            if(response.data.data.length > 0){
                dispatch(increment(response.data.data))
            }
        })
        .catch(error => console.log(error))
    }
}

export const getCartItems = ({custId}) => {
    return(dispatch) => {
        axios.get(BASE_URL + `get-cart-items?id=${custId}`)
        .then(response => {            
            if(response.data.data.length > 0 || response.data.status === true){
                dispatch(setCart(response.data.data, response.data.data.length))
            }else{

            }            
        })
        .catch(error => console.log(error))
    }
}

export const addOrderHistory = ({custId, items}) => {
    return(dispatch) => {
        axios.get(BASE_URL + `order-history?id=${custId}&items=${items}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
}

export const removeCartItems = ({custId, prodId}) => {
    return(dispatch) => {
        axios.get(BASE_URL + `remove-cart-item?id=${custId}&prodId=${prodId}`)
        .then(response => {
            if(response.data.status === true){
                dispatch(itemsRemoved(custId, prodId))
            }
        })
        .catch(error => console.log(error))
    }
}

export const getUserInfo = ({custId}) => {
    return(dispatch) => {
        axios.get(BASE_URL + `get-user?id=${custId}`)
        .then(response => {
            if(response.data.status === true){
                dispatch(getUser(response.data.data))
            }
        })
        .catch(error => console.log(error))
    }
}

const loginUser = () => {
    return {
        type: LOGIN,
    }
}

const loginUserSuccess = (data, userData='') => {    
    return {
        type: LOGIN_SUCCESS,
        payload: data,
        id: userData.id,
        userdata: userData
    }
}

const loginUserFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

const logout = (data) => {
    return{
        type: LOGOUT,
        payload: data.logout
    }
}

export const increment = (items) => {       
    return{
        type: INCRCOUNTER,    
        item: items[0],        
    }
}
export const decrement = (count) => {   
    return{
        type: DECRCOUNTER,
        count: count.quantity
    }
}

export const addToCart = (data) => {
    return{
        type: ADDTOCART,
        prodId: data,
        countItems: data.count
    }
}

export const cartItems = (items) => {
    return{
        type: ITEMSINCART,
        count: items
    }
}

const setCart = (data, count) => {
    return{
        type: SETCART,
        data: data,
        itemCount: count
    }
}

const itemsRemoved = (custId, prodId) => {
    if(prodId > 0){
        return{
            type: REMOVESINGLEITEM,
            custId: custId,
            prodId: prodId
        }
    }else{
        return{
            type: ITEMSREMOVED,            
        }
    }    
}

const getUser = (data) => {    
    return{
        type: CUSTOMERINFO,
        data: data[0]
    }
}

