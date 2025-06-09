import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';
import { Link } from 'react-router-dom';

export default function Blog() {

    const allBlogs = useSelector((state) => state.allBlogs.value);
    console.log(allBlogs);

    return (
        <div className='blog '>

            <div className="blog-main-area mb-70 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-12 order-lg-1 order-2 mt-sm-50">
                            <div className="single-blog mb-50">
                                <div className="blog-left-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="side-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search...." />
                                        <a href="#">
                                            <i className="fa fa-search" />
                                        </a>
                                    </form>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-9 col-md-12 col-12 order-lg-2 order-1">
                            <div className="blog-main-wrapper">

                                {allBlogs && (
                                    allBlogs.map(blog => (
                                        <div className="single-blog-post">

                                            <div className="blog-img mb-30">
                                                <a href="#">
                                                    <img src={blog.imagePath} alt="blog" />
                                                </a>
                                            </div>
                                            <div className="single-blog-content">
                                                <div className="single-blog-title">
                                                    <h3>
                                                        <a href="#">{blog.title}</a>
                                                    </h3>
                                                </div>
                                                <div className="blog-single-content">
                                                    <p>
                                                    {blog.content}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-comment-readmore">
                                                <div className="blog-readmore">
                                                   <Link to={`/BlogDetail/${blog.id}`}>read more</Link>
                                                </div>
                                                <div className="blog-com">
                                                    <a href="#">3 comments</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
