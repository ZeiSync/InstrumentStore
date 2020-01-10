import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import Category from "./Components/Category" ;
import NotFound from "./Components/NotFound";
import ProducDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import Register from "./Components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: true
    };
  }

  componentDidMount() {
    var url = "https://localhost:44392/api/Products";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: json,
          isLoaded: true
        });
      });
  }
  
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
       result = routes.map((route, index) => {
        return (
          <Route key = {index} path = {route.path} exact = {route.exact} component = {route.main}  />
        )
      })
    }
    return result;
  }
  

  render() {

    var { products, isLoaded } = this.state;
    console.log(products);

    const routes = [
      {
        path : "/",
        exact : true,
        main : ({match}) => <MainPage match = {match} dataProduct={this.state.products} /> 
      },
      {
        path : "/productDetails/:productName",
        exact : false,
        main : ({match}) => <ProducDetail  match = {match} dataProduct={this.state.products}/>
      },
      {
        path : "/shopCategory",
        exact : true,
        main : () => <Category dataProduct={this.state.products}/>
      },
      {
        path : "/login",
        exact : false,
        main : () => <Login />
      },  
      {
        path : "/register",
        exact : false,
        main : () => <Register />
      },  
      {
        path : "",
        exact : false,
        main : () => <NotFound />
      },  
      
    ];

    if (!isLoaded) {
      return <div className="text-center">Loading...</div>;
    } else {
      return (
        <Router>
          <div>
            <Header />
            {/*================ End Header Menu Area =================*/}
            <Switch>
            
              {/* <MainPage dataProduct={products} /> */}
              {this.showContentMenus(routes)}

            </Switch>
            
            {/*================ Start footer Area  =================*/}
            <Footer />
          </div>
        </Router>
      );
    }


  }
}
export default App;
