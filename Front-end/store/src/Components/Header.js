import React, { Component } from "react";
import { Link, Route, NavLink } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
    drop: null
  },
  {
    name: "Shop",
    to: "/shop",
    exact: true,
    drop: [
      {
        name: "Shop Category",
        to: "/shopCategory",
        exact: false
      },
      {
        name: "Product Details",
        to: "/productDetails",
        exact: false
      },
      {
        name: "Confirmation",
        to: "/confirmation",
        exact: false
      },
      {
        name: "Shopping Cart",
        to: "/shoppingCart",
        exact: false
      }
    ]
  },
  {
    name: "Blog",
    to: "/blog",
    exact: true,
    drop: [
      {
        name: "Blog",
        to: "/blog",
        exact: true
      },
      {
        name: "Blog Details",
        to: "/blogDetails",
        exact: false
      }
    ]
  },
  {
    name: "Pages",
    to: "/pages",
    exact: true,
    drop: [
      {
        name: "Login",
        to: "/login",
        exact: false
      },
      {
        name: "Register",
        to: "/register",
        exact: false
      }
    ]
  },
  {
    name: "Contact",
    to: "/contact",
    exact: true,
    drop: null
  }
];


const RenNavbar = ({label, to, activeOnlyWhenExact, haveDrop}) => {
  return (
    <Route path = {to} exact = {activeOnlyWhenExact} children = {({match})=>{
        var active = match ? "nav-item active" : "nav-item";
        if (haveDrop == null) {
          return (
          <li  className={active}>
            <NavLink  to={to} className="nav-link">{label}</NavLink>
          </li>
        )
        } else {
          return (
            <li className="nav-item submenu dropdown">
              <NavLink  to={to} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  >{label}</NavLink>
              <ul className="dropdown-menu">
                {haveDrop.map((item, index) => {
                    return (
                      <li key={index} className="nav-item">
                        <NavLink  to={item.to} className="nav-link">{item.name}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          )
        }  
    }}/>
  )
}

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      token : JSON.parse(localStorage.getItem("token")),
    }
  }
  Logout =  () => {
    this.setState({
      token : null
    })
    this.showLogin();
  }
  showLogin = () => {
   
    if(this.state.token != null) {
      return (
        <li className="nav-item">
          <span className="pr-3  text-muted">{this.state.token.usernamex}</span>
          <a onClick={this.Logout} className="button button-header btn">
            Logout
          </a>
        </li>
      )
    }

    return (
      <li className="nav-item">
        <NavLink to="/login" className="button button-header btn">
          Login
        </NavLink>
      </li>
    )
  }

  render() {
    return (
      <div>
        <header className="header_area">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="#">
                  <img src="img/logo.png" alt="true" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                    {this.showMenus(menus)}
                  </ul>

                  <ul className="nav-shop">
                    <li className="nav-item">
                      <button>
                        <i className="ti-search" />
                      </button>
                    </li>
                    <li className="nav-item">
                      <button>
                        <i className="ti-shopping-cart" />
                        <span className="nav-shop__circle">3</span>
                      </button>{" "}
                    </li>
                      {this.showLogin()}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
      if(menus.length > 0){
        result = menus.map((menu, index) =>{
          return(
            <RenNavbar 
            key={index} 
            label={menu.name} 
            to={menu.to} 
            activeOnlyWhenExact= {menu.exact} 
            haveDrop={menu.drop} 
            />
          )
        })
      }
    return result;
  }


}
