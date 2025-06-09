import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';
import { useState } from 'react';

export default function Header() {

    const cartBooks = useSelector((state) => state.cartBooks.value);
    const categories = useSelector((state) => state.categories.value);

    console.log(categories);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (removeCart) => {
        // Seçilen kitabı sepetten çıkart
        const updatedCartBooks = cartBooks.filter((book) => book.id !== removeCart.id);

        // Güncellenmiş sepeti Redux store'a dispatch et
        dispatch(setCartBooks(updatedCartBooks));

    };
    const totalPrice = cartBooks.reduce((total, cartBook) => {
        return total + cartBook.count * cartBook.price;
    }, 0).toFixed(2);

    const user = useSelector(state => state.user.value);
   
    return (
        <div>
            <header>

                <div className="header-mid-area ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-12">
                                <div className="header-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search entire store here..." />
                                        <a href="#">
                                            <i className="fa fa-search" />
                                        </a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4 col-12">
                                <div className="logo-area text-center logo-xs-mrg">

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="my-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart" />
                                                My Cart
                                            </a>
                                            <span>{cartBooks.length}</span>
                                            <div className="mini-cart-sub">
                                                <div className="cart-product">

                                                    {
                                                        cartBooks && (
                                                            cartBooks.map(cartBook => (
                                                                <div className="single-cart" key={cartBook.id}>
                                                                    <div className="cart-img">
                                                                        <a href="#">
                                                                            <img src={cartBook.imagePath} alt="book" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="cart-info">
                                                                        <h5>
                                                                            <a href="#">{cartBook.name}</a>
                                                                        </h5>
                                                                        <p>{cartBook.count} x £{cartBook.price}</p>
                                                                    </div>
                                                                    <div className="cart-icon">
                                                                        <a href="#" onClick={() => {
                                                                            handleRemoveFromCart(cartBook);
                                                                        }}>
                                                                            <i className="fa fa-remove" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        )
                                                    }
                                                </div>
                                                <div className="cart-totals">
                                                    <h5>
                                                        Total <span>£{totalPrice}</span>
                                                    </h5>
                                                </div>
                                                <div className="cart-bottom">

                                                    <Link className='view-cart' to="/Cart">view cart

                                                    </Link>

                                                    <Link className='view-cart' to="/Checkout">Check out

                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="main-menu-area d-md-none d-none d-lg-block sticky-header-1"
                    id="header-sticky"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            <li className="active">
                                                <Link to="/">
                                                    Home

                                                </Link>

                                            </li>


                                            <li>
                                                <a href="#">
                                                    blog
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <div className="sub-menu sub-menu-2">
                                                    <ul>
                                                        <li>
                                                            <Link to="/Blog">
                                                                blog

                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Kategoriler
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <div className="sub-menu sub-menu-2">
                                                    <ul>
                                                        {
                                                            categories.map(category => (
                                                                <li>
                                                                    <Link to={`/CategoryBook/${category.slug}`}>{category.name}</Link>
                                                                </li>
                                                            ))
                                                        }


                                                    </ul>
                                                </div>
                                            </li>
                                            {user.email == null && (
                                                <>
                                                    <li>
                                                        <Link to={"/Login"}>
                                                            Login
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/Register"}>
                                                            Register
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            {user.email != null && (
                                                
                                                    <li>
                                                        <Link to={"/Account"}>
                                                        Account
                                                        </Link>
                                                    </li>
                                                   
                                                
                                            )}

                                            <li>
                                                <Link to={"/Contact"}>
                                                    Contact

                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* main-menu-area-end */}
                {/* mobile-menu-area-start */}
                <div className="mobile-menu-area d-lg-none d-block fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mobile-menu">
                                    <nav id="mobile-menu-active">
                                        <ul id="nav">
                                            <li>
                                                <a href="index.html">Home</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Home-1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home-2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home-3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home-4</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home-5</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-6.html">Home-6</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-7.html">Home-7</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="product-details.html">Book</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">Tops &amp; Tees</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Polo Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Graphic T-Shirts</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Jackets &amp; Coats</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Fashion Jackets</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Crochet</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sleeveless</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Stripes</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sweaters</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">hoodies</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Heeled sandals</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Polo Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Flat sandals</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Long Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Polo Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sleeveless</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Graphic T-Shirts</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Hoodies</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Jackets</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="product-details.html">Audio books</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">Tops &amp; Tees</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sweaters</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Hoodies</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Jackets &amp; Coats</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Long Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Polo Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sleeveless</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sweaters</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Hoodies</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Wedges</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Vests</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Polo Short Sleeve</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Sleeveless</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Graphic T-Shirts</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Hoodies</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="product-details.html">children’s books</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">Shirts</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Florals</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Crochet</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Stripes</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Shorts</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Dresses</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Trousers</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Jeans</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Heeled sandals</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Flat sandals</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Wedges</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop.html">Ankle boots</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">blog</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">blog-details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="product-details.html">Page</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list.html">shop list view</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details.html">product-details</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-details-affiliate.html">
                                                            product-affiliate
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog.html">blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">blog-details</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">about</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">login</a>
                                                    </li>
                                                    <li>
                                                        <a href="register.html">register</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">my-account</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">compare</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile-menu-area-end */}
            </header>


        </div>
    )
}
