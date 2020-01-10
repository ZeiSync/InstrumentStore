import React, { Component } from 'react'

export default class ProducDetail extends Component {
  ChangePrice(price) {
    return price.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&,").slice(0, -4);
  }

  render() {
    let { match } = this.props; //this.props.match;
    console.log(match.params.productName);

    let productFound = this.props.dataProduct.filter(produck => produck.productName === match.params.productName);
    
    let dataProducts = productFound.map((product, index) => {
      return(
        <div key= {index} className="product_image_area">
          <div className="container">
            <div className="row s_product_inner">
              <div className="col-lg-6">
                <img className="img-fluid" src={product.productDescription.imgUrl} alt="" />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="s_product_text">
                  <h3>{product.brand} {product.productName}</h3>
                  <h2>{this.ChangePrice(product.price)}</h2>
                  <ul className="list">
                    <li><a className="active" href="#"><span>Category</span> : {product.category}</a></li>
                    <li><a href="#"><span>Type</span> : {product.branch}</a></li>
                  </ul>
                  <p>{product.productDescription.htmlDescription}</p>
                  <div className="product_count">
                    <a className="button primary-btn" href="#">Add to Cart</a>               
                  </div>
                  <div className="card_area d-flex align-items-center">
                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond" /></a>
                    <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    let dataInformation = productFound.map((product, index) => {
      if(product.branch === "GrandPiano"){
        return(
          <section key= {index} className="product_description_area">
            <div className="container">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <p>{product.productDescription.htmlDescription}</p>
                  <p>{product.productDescription.textDescription}</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <h5>Height</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.height}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Width</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.width}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Depth</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.length}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Weight</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.weight}kg</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Color</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.color}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>SoundBoard</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.soundBoard}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Plate</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.plate}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Hammers</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.hammers}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Strings</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.strings}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>TuningPins</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.tuningPins}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Agraffes</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.agraffes}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Keys</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.keys}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Beams</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.beams}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Ribs</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.Ribs}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>MiddlePedal</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.middlePedal}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Warranty</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.grandPiano.warranty}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Fallboard</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.grandPiano.fallboard}</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="comment_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item reply">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Post a comment</h4>
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row total_rate">
                        <div className="col-6">
                          <div className="box_total">
                            <h5>Overall</h5>
                            <h4>4.0</h4>
                            <h6>(03 Reviews)</h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="rating_list">
                            <h3>Based on 3 Reviews</h3>
                            <ul className="list">
                              <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="review_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Add a Review</h4>
                        <p>Your Rating:</p>
                        <ul className="list">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                        </ul>
                        <p>Outstanding</p>
                        <form action="#/" className="form-contact form-review mt-3">
                          <div className="form-group">
                            <input className="form-control" name="name" type="text" placeholder="Enter your name" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="email" type="email" placeholder="Enter email address" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="subject" type="text" placeholder="Enter Subject" />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols={30} rows={5} placeholder="Enter Message" defaultValue={""} />
                          </div>
                          <div className="form-group text-center text-md-right mt-3">
                            <button type="submit" className="button button--active button-review">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      } else if (product.branch === "UprightPiano") {
        return(
          <section key= {index} className="product_description_area">
            <div className="container">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <p>{product.productDescription.htmlDescription}</p>
                  <p>{product.productDescription.textDescription}</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <h5>Height</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.height}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Width</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.width}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Depth</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.length}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Weight</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.weight}kg</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Color</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.color}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>WhiteKey Surfaces</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.whiteKeySurfaces}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>BlackKey Surfaces</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.blackKeySurfaces}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Action</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.action}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Soundboard</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.soundboard}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>S.Of No.1 String</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.speakingLengthOfNo1String}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>ContourBars</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.contourBars}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Agraffes</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.agraffes}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>DuplexScaling</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.duplexScaling}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>BackPosts</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.backPosts}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Pedal</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.pedal}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>FrontCasters</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.frontCasters}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>SoftFall</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.uprightPiano.softFall}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Lock</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.uprightPiano.lock}</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="comment_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item reply">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Post a comment</h4>
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row total_rate">
                        <div className="col-6">
                          <div className="box_total">
                            <h5>Overall</h5>
                            <h4>4.0</h4>
                            <h6>(03 Reviews)</h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="rating_list">
                            <h3>Based on 3 Reviews</h3>
                            <ul className="list">
                              <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="review_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Cũng được đấy</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Add a Review</h4>
                        <p>Your Rating:</p>
                        <ul className="list">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                        </ul>
                        <p>Outstanding</p>
                        <form action="#/" className="form-contact form-review mt-3">
                          <div className="form-group">
                            <input className="form-control" name="name" type="text" placeholder="Enter your name" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="email" type="email" placeholder="Enter email address" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="subject" type="text" placeholder="Enter Subject" />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols={30} rows={5} placeholder="Enter Message" defaultValue={""} />
                          </div>
                          <div className="form-group text-center text-md-right mt-3">
                            <button type="submit" className="button button--active button-review">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      } else {
        return(
          <section key= {index} className="product_description_area">
            <div className="container">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <p>{product.productDescription.htmlDescription}</p>
                  <p>{product.productDescription.textDescription}</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <h5>Height</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.height}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Width</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.width}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Depth</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.length}cm</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Weight</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.weight}kg</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Color</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.color}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Keyboard</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.keyboard}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Touch Response </h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.touchResponse}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>SoundSource</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.soundSource}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Maximum Polyphony</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.maximumPolyphony}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Tones</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.tones}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Digital Effects </h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.digitalEffects}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Rhythms</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.rhythms}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>AutoAccompaniment </h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.autoAccompaniment}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>BuiltInSongs </h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.builtInSongs }</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>SongExpansion </h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.songExpansion }</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>LessonFunction</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.lessonFunction }</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Metronome</h5>
                          </td>
                          <td>
                            <h5>{product.spectification.digitalPiano.metronome }</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Recorder</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.recorder}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>OtherFunctions</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.OtherFunctions}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>MIDI</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.mIDI}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Inputs</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.inputs}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Outputs</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.outputs}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Speakers</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.speakers}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>PowerSupply</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.powerSupply}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>PowerConsumption</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.powerConsumption }</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Dimensions</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.dimensions}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>IncludedAccessories</h5>
                          </td>
                          <td>
                          <h5>{product.spectification.digitalPiano.includedAccessories}</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="comment_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item reply">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <h5>12th Feb, 2018 at 05:56 pm</h5>
                              <a className="reply_btn" href="#">Reply</a>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Post a comment</h4>
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row total_rate">
                        <div className="col-6">
                          <div className="box_total">
                            <h5>Overall</h5>
                            <h4>4.0</h4>
                            <h6>(03 Reviews)</h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="rating_list">
                            <h3>Based on 3 Reviews</h3>
                            <ul className="list">
                              <li><a href="#">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                              <li><a href="#">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="review_list">
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Cũng được đấy</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                        <div className="review_item">
                          <div className="media">
                            <div className="d-flex">
                              <img src="img/product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                              <h4>Blake Ruiz</h4>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_box">
                        <h4>Add a Review</h4>
                        <p>Your Rating:</p>
                        <ul className="list">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                        </ul>
                        <p>Outstanding</p>
                        <form action="#/" className="form-contact form-review mt-3">
                          <div className="form-group">
                            <input className="form-control" name="name" type="text" placeholder="Enter your name" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="email" type="email" placeholder="Enter email address" required />
                          </div>
                          <div className="form-group">
                            <input className="form-control" name="subject" type="text" placeholder="Enter Subject" />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols={30} rows={5} placeholder="Enter Message" defaultValue={""} />
                          </div>
                          <div className="form-group text-center text-md-right mt-3">
                            <button type="submit" className="button button--active button-review">Submit Now</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
    })
    return (
      <div>
        {/* ================ start banner area ================= */}	
        <section className="blog-banner-area" id="blog">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>Shop Single</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {dataProducts}
        {/* ================ end banner area ================= */}
        {/*================Product Description Area =================*/}
        {dataInformation}
        {/*================End Product Description Area =================*/}

        
        {/*================ Start related Product area =================*/}  
        <section className="related-product-area section-margin--small mt-0">
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
        {/*================ end related Product area =================*/}
      </div>

    )
  }
}
