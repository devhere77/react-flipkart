import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartPage from './components/CartPage';
import { Provider } from 'react-redux'
import store from './store'
import AdminLogin from './admin/components/AdminLogin';
import ProductDetail from './components/ProductDetailPage'
import UsersComp from './admin/components/UsersComp';
import EditUser from './admin/components/EditUser';
import ProductDetailPage from './components/ProductDetailPage';
import ViewMore from './components/ViewMore';
import LoginBeforeBuyPage from './components/LoginBeforeBuyPage';
import ShoppingCart from './components/ShoppingCart';
import CongratulationPage from './components/CongratulationPage';
import AddProduct from './admin/components/AddProduct';
import PageNotFound from './components/PageNotFound'
import AdminIndex from './admin/components/AdminIndex';


function App() {
  return (
    <Provider store={store}>
      <Router>      
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header}></Route>
            <Route exact path="/viewcart" component={CartPage}></Route>
            <Route exact path="/admin" component={AdminLogin}></Route>
            <Route exact path="/product-detail" component={ProductDetail}></Route>
            <Route exact path="/admin/userlist" component={UsersComp}></Route>
            <Route exact path="/edit/:id" component={EditUser}></Route>
            <Route exact path="/product-detail/:id" component={ProductDetailPage}></Route>
            <Route exact path="/view-all/:type" component={ViewMore}></Route>
            <Route exact path="/login-before-buy" component={LoginBeforeBuyPage}></Route>            
            <Route exact path="/checkout" component={CongratulationPage}></Route>
            <Route exact path="/shopping-cart" component={ShoppingCart}></Route>
            <Route exact path="/add-product" component={AddProduct}></Route>
            <Route exact path="/admin/add-product" component={AdminIndex}></Route>
            <Route exact path="*" component={PageNotFound}></Route>
          </Switch>           
        </div>    
      </Router>
    </Provider>    
  );
}

export default App;
