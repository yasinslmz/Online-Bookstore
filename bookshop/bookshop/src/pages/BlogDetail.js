import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setCartBooks } from '../redux/products/cartBooks';
import { Link } from 'react-router-dom';

export default function BlogDetail() {
    const { slug } = useParams();
    const [selectedBlog, setSelectedBlog] = useState({});
    const allBlogs = useSelector((state) => state.allBlogs.value);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commentAuthor, setCommentAuthor] = useState('');
    const [commentEmail, setCommentEmail] = useState('');

    useEffect(() => {
        setSelectedBlog(allBlogs.find(blog => blog.id == parseInt(slug)));
        console.log(selectedBlog);

    }, [])

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        // Yeni yorumu oluştur
        const newComment = {
            author: commentAuthor,
            email: commentEmail,
            text: commentText,
        };

        // Yorumları güncelle
        setComments((prevComments) => [...prevComments, newComment]);

        // Formu temizle
        setCommentText('');
        setCommentAuthor('');
        setCommentEmail('');
    };
    return (
        <div className="blog-details">


            <div className="blog-main-area mb-70 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-12 order-lg-1 order-2 mt-sm-50">
                            <div className="single-blog mb-50">
                                <div className="blog-left-title">
                                    <h3>Search</h3>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-9 col-md-12 col-12 order-lg-2 order-1">
                            <div className="blog-main-wrapper">

                                <div className="blog-img mb-30">
                                    <img src={selectedBlog.imagePath} alt="blog" />
                                </div>
                                <div className="single-blog-content">
                                    <div className="single-blog-title">
                                        <h3>{selectedBlog && (
                                            selectedBlog.title
                                        )}</h3>
                                    </div>
                                    <div className="blog-single-content">
                                        <p>
                                            {selectedBlog && (
                                                selectedBlog.content
                                            )}
                                        </p>

                                    </div>
                                </div>

                                <div className="sharing-post mt-20">
                                    <div className="share-text">
                                        <span>Share this post</span>
                                    </div>
                                    <div className="share-icon">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-dribbble" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
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
                                <div className="comment-title-wrap mt-30">
                                    <h3>{comments.length} Comments</h3>
                                </div>
                                <div className="comment-reply-wrap mt-50">
                                    <ul>
                                        {comments.map((comment, index) => (
                                            <li key={index}>
                                                <div className="public-comment">
                                                    <div className="comment-img">
                                                        <img src={"https://cdn.evrimagaci.org/mh0Dcl79zNiHXrlPzn2IV66NvNo=/evrimagaci.org%2Fpublic%2Fmi_media%2Fafcae823e61eefb077e1f223594b1e7f.jpeg"} alt="man" />
                                                    </div>
                                                    <div className="public-text">
                                                        <div className="single-comm-top">
                                                            <span>Author: {comment.author}</span>
                                                           
                                                        </div>
                                                        <p>Yorum: {comment.text}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="comment-title-wrap mt-30">
                                    <h3>Leave a comment </h3>
                                </div>
                               

                                <div className="comment-input mt-40">
                                    <div className="comment-input-textarea mb-30">
                                        <form onSubmit={handleCommentSubmit}>
                                            <label>Comment</label>
                                            <textarea
                                                name="massage"
                                                cols={30}
                                                rows={10}
                                                placeholder="Write your comment here"
                                                value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                            />
                                        </form>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div className="single-comment-input mb-30">
                                                <form>
                                                    <label>Name*</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        value={commentAuthor}
                                                        onChange={(e) => setCommentAuthor(e.target.value)}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div className="single-comment-input mb-30">
                                                <form>
                                                    <label>Email*</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        value={commentEmail}
                                                        onChange={(e) => setCommentEmail(e.target.value)}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="single-post-button">
                                        <button className='btn btn-success' onClick={handleCommentSubmit}>Post Comment</button>
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
