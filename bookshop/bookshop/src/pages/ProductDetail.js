import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';
import { useState } from 'react';

export default function ProductDetail() {
    const { slug } = useParams();
    const [count, setCount] = useState(1);

    const book = useSelector(state => state.allBooks.value).find(book => book.slug == slug);
    const cartBooks = useSelector((state) => state.cartBooks.value);
    const dispatch = useDispatch();

    const addToCart = () => {

        const existingBook = cartBooks.find(cartBook => cartBook.id === book.id);

        if (existingBook) {
            // Eğer ürün sepette zaten varsa, sadece count değerini arttır
            dispatch(setCartBooks(cartBooks.map(cartBook =>
                cartBook.id === book.id ? { ...cartBook, count: cartBook.count + count } : cartBook
            )));
        } else {
            // Eğer ürün sepette yoksa, yeni bir ürün olarak ekle
            dispatch(setCartBooks([...cartBooks, { ...book, count: count }]));
        }

        console.log(cartBooks);
    }
    
    return (
        <div className='blog-details'>

            <div className='product-details mt-5'>
                <div className="product-main-area mb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 order-lg-1 order-1">
                                {/* product-main-area-start */}
                                <div className="product-main-area">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-12">
                                            <div className="flexslider">
                                                <ul >
                                                    <li>
                                                        <img src={book && (book.imagePath)} alt="woman" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-12">
                                            <div className="product-info-main">
                                                <div className="page-title">
                                                    <h1>{book && (book.name)}</h1>
                                                </div>
                                                <div className="product-info-stock-sku">
                                                    <span>In stock</span>
                                                    <div className="product-attribute">
                                                        <span>SKU</span>
                                                        <span className="value">24-WB05</span>
                                                    </div>
                                                </div>
                                                <div className="product-reviews-summary">
                                                    <div className="rating-summary">
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </div>
                                                    <div className="reviews-actions">
                                                        <a href="#">3 Reviews</a>
                                                        <a href="#" className="view">
                                                            Add Your Review
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info-price">
                                                    <div className="price-final">
                                                        <span>$ {book && (book.price)} </span>
                                                        <span className="old-price">$40.00</span>
                                                    </div>
                                                </div>
                                                <div className="product-add-form">
                                                    <form action="#">
                                                        <div className="quality-button">
                                                            <input className="qty" type="number" defaultValue={1} min={0} onChange={(e) => setCount(parseInt(e.target.value))} />
                                                        </div>
                                                        <a href="#" onClick={() => addToCart()}>Add to cart</a>
                                                    </form>
                                                </div>
                                                <div className="product-social-links">
                                                    <div className="product-addto-links">
                                                        <a href="#">
                                                            <i className="fa fa-heart" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-pie-chart" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa fa-envelope-o" />
                                                        </a>
                                                    </div>
                                                    <div className="product-addto-links-text">
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis perferendis quis tempora debitis nihil?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* product-main-area-end */}
                                {/* product-info-area-start */}
                                <div className="product-info-area mt-80">
                                    {/* Nav tabs */}
                                    <ul className="nav">
                                        <li>
                                            <a className="active" href="#Details" data-bs-toggle="tab">
                                                Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#Reviews" data-bs-toggle="tab">
                                                Reviews 3
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="Details">
                                            <div className="valu">
                                                <p>
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laboriosam distinctio dolorum neque, maxime molestias rerum sapiente mollitia corrupti dolores.
                                                </p>
                                               
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="Reviews">
                                            <div className="valu valu-2">
                                                <div className="section-title mb-60 mt-60">
                                                    <h2>Customer Reviews</h2>
                                                </div>
                                                
                                                <div className="review-add">
                                                    <h3>You're reviewing:</h3>
                                                    <h4>Joust Duffle Bag</h4>
                                                </div>
                                                
                                                <div className="review-form">
                                                    <div className="single-form">
                                                        <label>
                                                            Nickname <sup>*</sup>
                                                        </label>
                                                        <form action="#">
                                                            <input type="text" />
                                                        </form>
                                                    </div>
                                                    <div className="single-form single-form-2">
                                                        <label>
                                                            Summary <sup>*</sup>
                                                        </label>
                                                        <form action="#">
                                                            <input type="text" />
                                                        </form>
                                                    </div>
                                                    <div className="single-form">
                                                        <label>
                                                            Review <sup>*</sup>
                                                        </label>
                                                        <form action="#">
                                                            <textarea
                                                                name="massage"
                                                                cols={10}
                                                                rows={4}
                                                                defaultValue={""}
                                                            />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="review-form-button">
                                                    <a href="#">Submit Review</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="col-lg-3 col-md-12 col-12 order-lg-2 order-2">
                                <div className="shop-left">
                                    <div className="left-title mb-20">
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5 col-sm-5 col-xs-12">
                                        <div className="modal-tab">
                                            <div className="product-details-large tab-content">
                                                <div className="tab-pane active" id="image-1">
                                                    <img src="img/product/quickview-l4.jpg" alt="" />
                                                </div>
                                                <div className="tab-pane" id="image-2">
                                                    <img src="img/product/quickview-l2.jpg" alt="" />
                                                </div>
                                                <div className="tab-pane" id="image-3">
                                                    <img src="img/product/quickview-l3.jpg" alt="" />
                                                </div>
                                                <div className="tab-pane" id="image-4">
                                                    <img src="img/product/quickview-l5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="product-details-small quickview-active owl-carousel">
                                                <a className="active" href="#image-1">
                                                    <img src="img/product/quickview-s4.jpg" alt="" />
                                                </a>
                                                <a href="#image-2">
                                                    <img src="img/product/quickview-s2.jpg" alt="" />
                                                </a>
                                                <a href="#image-3">
                                                    <img src="img/product/quickview-s3.jpg" alt="" />
                                                </a>
                                                <a href="#image-4">
                                                    <img src="img/product/quickview-s5.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-7 col-xs-12">
                                        <div className="modal-pro-content">
                                            <h3>Chaz Kangeroo Hoodie3</h3>
                                            <div className="price">
                                                <span>$70.00</span>
                                            </div>
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et
                                                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                                feugiat vitae, ultricies eget, tempor sit amet.
                                            </p>
                                            <div className="quick-view-select">
                                                <div className="select-option-part">
                                                    <label>Size*</label>
                                                    <select className="select">
                                                        <option value="">S</option>
                                                        <option value="">M</option>
                                                        <option value="">L</option>
                                                    </select>
                                                </div>
                                                <div className="quickview-color-wrap">
                                                    <label>Color*</label>
                                                    <div className="quickview-color">
                                                        <ul>
                                                            <li className="blue">b</li>
                                                            <li className="red">r</li>
                                                            <li className="pink">p</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="#">
                                                <input type="number" defaultValue={1} />
                                                <button>Add to cart</button>
                                            </form>
                                            <span>
                                                <i className="fa fa-check" /> In stock
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

