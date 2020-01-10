import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Category extends Component {
  ChangePrice(price) {
    return price.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&,").slice(0, -4);
  }
  
  render() {
    let dataProducts =  this.props.dataProduct.map((product, index) => {
      return (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="card-img" src={product.productDescription.imgUrl} alt="" />
              <ul className="card-product__imgOverlay">
                <li> 
                <NavLink to={`/productDetails/${product.productName}`} key={index}>
                  <button>
                    <i className="ti-search" />
                  </button>
                </NavLink></li>
                <li><button><i className="ti-shopping-cart" /></button></li>
                <li><button><i className="ti-heart" /></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>{product.category}</p>
              <h4 className="card-product__title"><a href="#">{product.brand} {product.productName}</a></h4>
              <p className="card-product__price">{this.ChangePrice(product.price)} VND</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* ================ start banner area ================= */}	
        <section className="blog-banner-area" id="category">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Shop Category</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop Category</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* ================ end banner area ================= */}
        {/* ================ category section start ================= */}		  
        <section className="section-margin--small mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="sidebar-categories">
                  <div className="head">Browse Categories</div>
                  <ul className="main-categories">
                    <li className="common-filter">
                      <form action="#">
                        <ul>
                          <li  className="filter-list"><input className="pixel-radio" type="radio" id="Piano" name="brand" /><label htmlFor="Piano">Piano</label></li>
                          <li  className="filter-list"><input className="pixel-radio" type="radio" id="Keyboard" name="brand" /><label htmlFor="Keyboard">Keyboard</label></li>
                          <li  className="filter-list"><input className="pixel-radio" type="radio" id="Guitar" name="brand" /><label htmlFor="Guitar">Guitar</label></li>
                          <li  className="filter-list"><input className="pixel-radio" type="radio" id="Drum" name="brand" /><label htmlFor="Drum">Drum<span> (I Love U 3000)</span></label></li>
                        </ul>
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-filter">
                  <div className="top-filter-head">Product Filters</div>
                  <div className="common-filter">
                    <div className="head">Brands</div>
                    <form action="#">
                      <ul>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Kawai" name="brand" /><label htmlFor="Kawai">Kawai</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Yamaha" name="brand" /><label htmlFor="Yamaha">Yamaha</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Koler & Campbell" name="brand" /><label htmlFor="Koler & Campbell">Koler & Campbell</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Microwave" name="brand" /><label htmlFor="Microwave">Microwave<span>(Really?)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Casio" name="brand" /><label htmlFor="Casio">Casio</label></li>
                      </ul>
                    </form>
                  </div>
                  <div className="common-filter">
                    <div className="head">Color</div>
                    <form action="#">
                      <ul>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="White" name="color" /><label htmlFor="White">I'm White</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Black" name="color" /><label htmlFor="Black">I'm Black</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Yellow" name="color" /><label htmlFor="Yellow">I'm Yellow</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Red" name="color" /><label htmlFor="Red">I'm Red</label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="Gays" name="color" /><label htmlFor="Gays">I'm Gays<span>(69)</span></label></li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7">
                {/* Start Filter Bar */}
                <div className="filter-bar d-flex flex-wrap align-items-center">
                  <div>
                    <div className="input-group filter-bar-search">
                      <input type="text" placeholder="Search" />
                      <div className="input-group-append">
                        <button type="button"><i className="ti-search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Filter Bar */}
                {/* Start Best Seller */}
                <section className="lattest-product-area pb-40 category-list">
                  <div className="row">
                  {dataProducts}
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product4.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Decor</p>
                          <h4 className="card-product__title"><a href="#">Room Flash Light</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product5.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Accessories</p>
                          <h4 className="card-product__title"><a href="#">Man Office Bag</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product6.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Kids Toy</p>
                          <h4 className="card-product__title"><a href="#">Charging Car</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product7.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Accessories</p>
                          <h4 className="card-product__title"><a href="#">Blutooth Speaker</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div> 
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product8.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Kids Toy</p>
                          <h4 className="card-product__title"><a href="#">Charging Car</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="card text-center card-product">
                        <div className="card-product__img">
                          <img className="card-img" src="img/product/product1.png" alt="" />
                          <ul className="card-product__imgOverlay">
                            <li><button><i className="ti-search" /></button></li>
                            <li><button><i className="ti-shopping-cart" /></button></li>
                            <li><button><i className="ti-heart" /></button></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <p>Accessories</p>
                          <h4 className="card-product__title"><a href="#">Quartz Belt Watch</a></h4>
                          <p className="card-product__price">$150.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Best Seller */}
              </div>
            </div>
          </div>
        </section>
        {/* ================ category section end ================= */}		  
        {/* ================ top product area start ================= */}	
        <section className="related-product-area">
          <div className="container">
            <div className="section-intro pb-60px">
              <p>Popular Item in the market</p>
              <h2>Top <span className="section-intro__style">Product</span></h2>
            </div>
            <div className="row mt-30">
              <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                <div className="single-search-product-wrapper">
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                <div className="single-search-product-wrapper">
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-4.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-5.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-6.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                <div className="single-search-product-wrapper">
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-7.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-8.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-9.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                <div className="single-search-product-wrapper">
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                  <div className="single-search-product d-flex">
                    <a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
                    <div className="desc">
                      <a href="#" className="title">Gray Coffee Cup</a>
                      <div className="price">$170.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ top product area end ================= */}
      </div>
    )
  }
}
