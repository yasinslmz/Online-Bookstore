import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setOrders } from '../redux/products/orderSlice';
import { useState } from 'react';
import { setCartBooks } from '../redux/products/cartBooks';
import { useNavigate } from 'react-router-dom';
import { setBills } from '../redux/products/allBillsSlice';

export default function Checkout() {
    const [nextId,setNextId] =useState();

    const userId = useSelector(state => state.user.value).id;
  
    const generateUniqueId = () => {
        const randomId = Math.floor(100000 + Math.random() * 900000); // 100000 ile 999999 arasında rastgele sayı üretir
        setNextId(randomId);
      };
      
      useEffect(() => {
        generateUniqueId();
      }, [])

    const [billing, setBilling] = useState({
        id: 0,
        userId:userId,
        country: 'Turkey',
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        postcode: '',
        email: '',
        phone: '',
        isApproved:false,
        soldProducts:[]
      });
      
      const navigate=useNavigate();

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBilling((prevBilling) => ({ ...prevBilling, [name]: value }));
      };

    const cartBooks = useSelector((state) => state.cartBooks.value);
    
    const dispatch = useDispatch();
    
    // setBilling({...billing,soldProducts:cartBooks});
    useEffect(() => {

        const soldP = cartBooks.map(book => ({
            id: 0,
            billId: 0,
            productId: book.id,
            quantity: book.count,
          }));

        setBilling({...billing,soldProducts:soldP});
        console.log(soldP);
        console.log(JSON.stringify(billing));
    }, [billing.email])
    // Cookie'den Token'ı alma
        const cookieString = document.cookie;

        const authTokenMatch = cookieString.match(/(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$/);


        const authToken = authTokenMatch ? authTokenMatch[1] : null;

    const sendOrder = (e) => {

        e.preventDefault();
        console.log(billing);
        console.log(authToken);
        if (userId != null) {
            const url = "https://localhost:7247/api/Product/Checkout";
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`, // JWT token'ınızı ekleyin
                },
                body: JSON.stringify(billing),
            })
                .then(response => {
                    if (response.ok) {
                        console.log("başarılı:");
                        

                            dispatch(setCartBooks([]));
                            const url = `https://localhost:7247/api/Product/Billing?id=${userId}`;
                            console.log(url);
                            fetch(url)
                              .then(response => response.json())
                              .then(data => {dispatch(setBills(data));console.log(data);})
                              .catch(error => console.error("Hata meydana geldi:", error));
                         
                        navigate("/");
                    }
                })
               
        }
    }
    
    const totalPrice = cartBooks.reduce((total, cartBook) => {
        return total + cartBook.count * cartBook.price;
    }, 0).toFixed(2);
    return (
        <div className="checkout">


            <div className="entry-header-area mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="entry-header-title">
                                <h2>Checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout-area mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#" onSubmit={(e)=>sendOrder(e)}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="checkbox-form">
                                            <h3>Billing Details</h3>
                                            <div className="row">
                                                <div className=" col-lg-12">
                                                    <div className="country-select">
                                                        <label>
                                                            Country <span className="required">*</span>
                                                        </label>
                                                        <select name="country" value={billing.country} onChange={handleInputChange}>
                                                            <option value="Turkey">Turkey</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12 ">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            First Name <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder=""  name="firstName" value={billing.firstName} onChange={handleInputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Last Name <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder=""   name="lastName" value={billing.lastName} onChange={handleInputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="" name="companyName" value={billing.companyName} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Address <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Street address" name="address" value={billing.address} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="checkout-form-list">
                                                        <input
                                                            type="text"
                                                            placeholder="Apartment, suite, unit etc. (optional)"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Town / City <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Town / City" name='city'  value={billing.city} onChange={handleInputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            State / County <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="" name='state'  value={billing.state} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Postcode / Zip <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Postcode / Zip" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Email Address <span className="required">*</span>
                                                        </label>
                                                        <input type="email" required placeholder=""  name='email'  value={billing.email} onChange={handleInputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Phone <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Postcode / Zip" name='phone' value={billing.phone} onChange={handleInputChange} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="your-order">
                                            <h3>Your order</h3>
                                            <div className="your-order-table table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="product-name">Product</th>
                                                            <th className="product-total">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            cartBooks && (
                                                                cartBooks.map(book => (
                                                                    <tr className="cart_item">
                                                                        <td className="product-name">
                                                                            {book.name}{" "}
                                                                            <strong className="product-quantity"> ×  {book.count}</strong>
                                                                        </td>
                                                                        <td className="product-total">
                                                                            <span className="amount">£ {book.price*book.count}</span>
                                                                        </td>
                                                                    </tr>
                                                                ))

                                                            )
                                                        }


                                                    </tbody>
                                                    <tfoot>
                                                        
                                                        
                                                        <tr className="order-total">
                                                            <th>Order Total</th>
                                                            <td>
                                                                <strong>
                                                                    <span className="amount">£{totalPrice}</span>
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="payment-method">
                                                <div className="payment-accordion">
                                                    <div className="collapses-group">
                                                        <div
                                                            className="panel-group"
                                                            id="accordion"
                                                            role="tablist"
                                                            aria-multiselectable="true"
                                                        >
                                                            <div className="panel panel-default">
                                                                <div
                                                                    className="panel-heading"
                                                                    role="tab"
                                                                    id="headingOne"
                                                                >
                                                                    <h4 className="panel-title">
                                                                        <a
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-parent="#accordion"
                                                                            href="#collapseOne"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapseOne"
                                                                        >
                                                                            Direct Bank Transfer
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    id="collapseOne"
                                                                    className="panel-collapse collapse in"
                                                                    role="tabpanel"
                                                                    aria-labelledby="headingOne"
                                                                >
                                                                    <div className="panel-body">
                                                                        <p>
                                                                            Make your payment directly into our bank
                                                                            account. Please use your Order ID as the
                                                                            payment reference. Your order won’t be shipped
                                                                            until the funds have cleared in our account.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel panel-default">
                                                                <div
                                                                    className="panel-heading"
                                                                    role="tab"
                                                                    id="headingTwo"
                                                                >
                                                                    <h4 className="panel-title">
                                                                        <a
                                                                            className="collapsed"
                                                                            role="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-parent="#accordion"
                                                                            href="#collapseTwo"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseTwo"
                                                                        >
                                                                            Cheque Payment
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    id="collapseTwo"
                                                                    className="panel-collapse collapse"
                                                                    role="tabpanel"
                                                                    aria-labelledby="headingTwo"
                                                                >
                                                                    <div className="panel-body">
                                                                        <p>
                                                                            Please send your cheque to Store Name, Store
                                                                            Street, Store Town, Store State / County,
                                                                            Store Postcode.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel panel-default">
                                                                <div
                                                                    className="panel-heading"
                                                                    role="tab"
                                                                    id="headingThree"
                                                                >
                                                                    <h4 className="panel-title">
                                                                        <a
                                                                            className="collapsed"
                                                                            role="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-parent="#accordion"
                                                                            href="#collapseThree"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseThree"
                                                                        >
                                                                            PayPal <img src="img/2.png" alt="payment" />
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    id="collapseThree"
                                                                    className="panel-collapse collapse"
                                                                    role="tabpanel"
                                                                    aria-labelledby="headingThree"
                                                                >
                                                                    <div className="panel-body">
                                                                        <p>
                                                                            Pay via PayPal; you can pay with your credit
                                                                            card if you don’t have a PayPal account.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-button-payment">
                                                    <input type="submit" defaultValue="Place order" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
