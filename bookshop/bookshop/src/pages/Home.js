import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';
import { Link } from 'react-router-dom';


export default function Home() {

  const allBooks = useSelector((state) => state.allBooks.value);
  const cartBooks = useSelector((state) => state.cartBooks.value);
  const dispatch = useDispatch();

  const addToCart = (book) => {
    const existingBook = cartBooks.find(cartBook => cartBook.id === book.id);

    if (existingBook) {
      // Eğer ürün sepette zaten varsa, sadece count değerini arttır
      dispatch(setCartBooks(cartBooks.map(cartBook =>
        cartBook.id === book.id ? { ...cartBook, count: cartBook.count + 1 } : cartBook
      )));
    } else {
      // Eğer ürün sepette yoksa, yeni bir ürün olarak ekle
      dispatch(setCartBooks([...cartBooks, { ...book, count: 1 }]));
    }

    console.log(cartBooks);
  };
  const handleRemoveFromCart = (removeCart) => {
    // Seçilen kitabı sepetten çıkart
    const updatedCartBooks = cartBooks.filter((book) => book.id !== removeCart.id);

    // Güncellenmiş sepeti Redux store'a dispatch et
    dispatch(setCartBooks(updatedCartBooks));

    console.log(updatedCartBooks);
  };
  const totalPrice = cartBooks.reduce((total, cartBook) => {
    return total + cartBook.count * cartBook.price;
  }, 0).toFixed(2);

  return (
    <div className='home-2 home-3'>

      <div className="home-3-main">
        <div className="slider-area">
          <div className="slider-active owl-carousel">
            <div
              className="single-slider pt-105 pb-225 bg-img"
              style={{ backgroundImage: "url(img/slider/5.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content-3 slider-animated-1 pl-295">
                      <h1>
                        Do it <br />
                        Yourself
                      </h1>
                      <p className="slider-sale">
                        <span className="sale1">-20%</span>
                        <span className="sale2">
                          <strong>£80.00</strong>
                          £60.00
                        </span>
                      </p>
                      <a href="#">Shop now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider pt-105 pb-225 bg-img"
              style={{ backgroundImage: "url(img/slider/6.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content-3 slider-animated-1 pl-295">
                      <h1>
                        Do it <br />
                        Yourself
                      </h1>
                      <p className="slider-sale">
                        <span className="sale1">-20%</span>
                        <span className="sale2">
                          <strong>£80.00</strong>
                          £60.00
                        </span>
                      </p>
                      <a href="#">Shop now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-area-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="banner-img-2 mt-30">
                <Link to={"/CategoryBook/com"}>
                    <img src={process.env.PUBLIC_URL+"/"+"img/banner/14.jpg"} alt="banner" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-12">
                <div className="banner-total mt-30">
                  <div className="single-banner-7 xs-mb">
                    <div className="banner-img-2">
                    <Link to={"/CategoryBook/Arts"}>
                    <img src={process.env.PUBLIC_URL+"/"+"img/banner/15.jpg"} alt="banner" />
                  </Link>
                    </div>
                  </div>
                  <div className="single-banner-3 col-xs-12">
                    <div className="banner-img-2">
                    <Link to={"/CategoryBook/Business"}>
                    <img src={process.env.PUBLIC_URL+"/"+"img/banner/16.jpg"} alt="banner" />
                  </Link>
                    </div>
                  </div>
                </div>
                <div className="banner-total-2">
                  <div className="single-banner-4 hidden-xs">
                    <div className="banner-img-2">
                    <Link to={"/CategoryBook/Children"}>
                    <img src={process.env.PUBLIC_URL+"/"+"img/banner/17.jpg"} alt="banner" />
                  </Link>
                    </div>
                  </div>
                  <div className="single-banner-5">
                    <div className="banner-img-2">
                    <Link to={"/CategoryBook/Travel"}>
                    <img src={process.env.PUBLIC_URL+"/"+"img/banner/18.jpg"} alt="banner" />
                  </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-area pt-90 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-30">
                  <h2>Top interesting</h2>
                  <p>
                    Browse the collection of our best selling and top interresting
                    products.
                    <br /> ll definitely find what you are looking for.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                {/* tab-menu-start */}
                <div className="tab-menu mb-40 text-center">
                  <ul className="nav justify-content-center">
                    <li>
                      <a className="active" href="#Audiobooks" data-bs-toggle="tab">
                        New Arrival{" "}
                      </a>
                    </li>

                  </ul>
                </div>
                {/* tab-menu-end */}
              </div>
            </div>
            {/* tab-area-start */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="Audiobooks">
                <div className="tab-active">
                  <div className="row">

                    {
                      allBooks && (
                        allBooks.map((book) => (
                          <div className="product-wrapper col-2">
                            <div className="product-img">
                              <a href="#">
                                <img style={{height:"200px"}}
                                  src={book.imagePath}
                                  alt="book"
                                  className="primary"
                                />
                              </a>
                              <div className="quick-view">
                                <Link to={`/ProductDetail/${book.slug}`}
                                  className="action-view"
                                  href="#"
                                  title="Quick View"
                                >
                                  <i className="fa fa-search-plus" />
                                </Link>
                              </div>
                              <div className="product-flag">
                                <ul>
                                  <li>
                                    <span className="sale">new</span>
                                  </li>
                                  <li>
                                    <span className="discount-percentage">-5%</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <div className="product-rating">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h4>
                                <Link to={`/ProductDetail/${book.slug}`}>{book.name}
                                </Link>
                              </h4>
                              <div className="product-price">
                                <ul>
                                  <li>${book.price}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-link">
                              <div className="product-button">
                                <a href="#" onClick={() => addToCart(book)} title="Add to cart">
                                  <i className="fa fa-shopping-cart" />
                                  Add to cart
                                </a>
                              </div>
                              <div className="add-to-link">
                                <ul>
                                  <li>
                                    <a href="product-details.html" title="Details">
                                      <i className="fa fa-external-link" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )

                        )
                      )
                    }

                  </div>
                </div>
              </div>

            </div>
            {/* tab-area-end */}
          </div>
        </div>

        <div className="banner-area-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-img-2">
                  <a href="#">
                    <img src="img/banner/5.jpg" alt="banner" />
                  </a>
                  <div className="banner-text">
                    <h3>G. Meyer Books &amp; Spiritual Traveler Press</h3>
                    <h2>Sale up to 30% off</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="social-group-area ptb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title-3">
                  <h3>Latest Tweets</h3>
                </div>
                <div className="twitter-content">
                  <div className="twitter-icon">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                  <div className="twitter-text">
                    <p>
                      Claritas est etiam processus dynamicus, qui sequitur
                      mutationem consuetudium lectorum. Mirum notare quam
                    </p>
                    <a href="#">koparion</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title-3">
                  <h3>Stay Connected</h3>
                </div>
                <div className="link-follow">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flickr" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      


    </div>
  )
}
