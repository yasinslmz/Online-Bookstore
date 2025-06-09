import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';  
import Account from './pages/Account';
import Header from './components/Header';
import CategoryBook from './pages/CategoryBook';

import { getBooks } from './redux/products/allBooksSlice'
import { setCategories } from './redux/products/categoriesSlice'
import { setBlogs } from './redux/blogs/allBlogs';
import { setBills } from './redux/products/allBillsSlice';


function App() {

  // const allBooks = useSelector((state) => state.allBooks.value);
  // const categories = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
    fetchCategories();
    fetchBlogs();
  }, [])

  const fetchBooks = () => {
    const url = "https://localhost:7247/api/product";
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(getBooks(data)))
      .catch(error => console.error("Hata meydana geldi:", error));
  }
  const fetchCategories = () => {
    const url = "https://localhost:7247/api/Category";
    fetch(url)
      .then(response => response.json())
      .then(data => {dispatch(setCategories(data));console.log(data);})
      .catch(error => console.error("Hata meydana geldi:", error));
  }
  const fetchBlogs = () => {
    const url = "https://localhost:7247/api/Blog";
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(setBlogs(data)))
      .catch(error => console.error("Hata meydana geldi:", error));
  }
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductDetail/:slug' element={<ProductDetail />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/CategoryBook/:slug' element={<CategoryBook />} />
        <Route path='/BlogDetail/:slug' element={<BlogDetail />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Account' element={<Account />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
