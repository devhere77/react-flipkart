import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, INCRCOUNTER, DECRCOUNTER, ADDTOCART, ITEMSINCART, 
     SETCART, ITEMSREMOVED, REMOVESINGLEITEM, CUSTOMERINFO } from '../action/actionType'

const initialState = {
    isLoggedIn: false,
    error: null,    
    userdata: null,
    quantity: 0,
    custId: null,
    prodId: [],
    cartItems: 0,
    cartProduct: [],
    isItemRemoved: false,
    itemCount: 0,
    userInfo: []
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: false
            }

        case LOGIN_SUCCESS:                  
            return {
                ...state,
                isLoggedIn: action.payload,
                userInfo: action.userdata,
                custId: action.id
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload
            }

        case LOGOUT:
            return{
                ...state,
                isLoggedIn: action.payload
            }    

        case INCRCOUNTER:              
            return{
                ...state,
                cartProduct: state.cartProduct.map(item => {
                    return item.id === action.item.id ? action.item: item
                }),                       
            }           

        case DECRCOUNTER:
            let item = action.item            
            return{
                ...state,
                quantity: Number(action.count) - 1,
                cartProduct: state.cartProduct.map(product => product.prod_id === Number(action.id) ? 
                item : {...product, item}),                
            }        

        case ADDTOCART: {               
            return{
                ...state,
                prodId: [...state.prodId, action.prodId],                
            }
        }

        case ITEMSINCART: {            
            return{
                ...state,
                cartItems: action.count
            }
        }        

        case SETCART:{
            return {
                ...state,
                cartProduct: action.data,
                itemCount: action.itemCount,                
            }
        }

        case ITEMSREMOVED: {
            return {
                ...state,
                isItemRemoved: true,
            }
        }

        case REMOVESINGLEITEM:{            
            return{   
                ...state,
                cartProduct: state.cartProduct.filter(item => item.prod_id !== action.prodId)
            }
        }

        case CUSTOMERINFO:
            return{
                ...state,
                userInfo: action.data
            }

        default:
            return state;
    }
}

export default rootReducer;