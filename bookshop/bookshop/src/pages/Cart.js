import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';

export default function Cart() {


    const cartBooks = useSelector((state) => state.cartBooks.value);
    const dispatch = useDispatch();
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


    const handleNumberChange = (book, e) => {

        const existingBook = cartBooks.find(cartBook => cartBook.id === book.id);


        // Eğer ürün sepette zaten varsa, sadece count değerini arttır
        dispatch(setCartBooks(cartBooks.map(cartBook =>
            cartBook.id === book.id ? { ...cartBook, count: parseInt(e.target.value) } : cartBook
        )));


        console.log(cartBooks);
    }

    return (
        <div className="cart">

            <div className="entry-header-area mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="entry-header-title">
                                <h2>Cart</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-area mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form action="#">
                                <div className="table-content table-responsive mb-15 border-1">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                cartBooks && (
                                                    cartBooks.map(book => (
                                                        <tr>
                                                            <td className="product-thumbnail">
                                                                <a href="#">
                                                                    <img src={book.imagePath} alt="man" />
                                                                </a>
                                                            </td>
                                                            <td className="product-name">
                                                                <a href="#">{book.name}</a>
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="amount">£{book.price}</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <input type="number" min={1} value={book.count} onChange={(e) => handleNumberChange(book,e)} />
                                                            </td>
                                                            <td className="product-subtotal">£{book.price * book.count}</td>
                                                            <td className="product-remove">
                                                            <a href="#" onClick={() => {
                                                                            handleRemoveFromCart(book);
                                                                        }}>
                                                                            <i className="fa fa-remove" />
                                                                        </a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )
                                            }



                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-12">
                            
                           
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="cart_totals">
                                <h2>Cart Totals</h2>
                                <table>
                                    <tbody>
                                        
                                        <tr className="shipping">
                                            <th>Shipping</th>
                                            <td>
                                                <ul id="shipping_method">
                                                    <li>
                                                        <input type="radio" />
                                                        <label>
                                                            Flat Rate:
                                                            <span className="amount">£7.00</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" />
                                                        <label> Free Shipping </label>
                                                    </li>
                                                </ul>
                                                <a href="#">Calculate Shipping</a>
                                            </td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td>
                                                <strong>
                                                    <span className="amount">£{totalPrice}</span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="wc-proceed-to-checkout">
                                    <Link to={"/Checkout"}>Proceed to Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
