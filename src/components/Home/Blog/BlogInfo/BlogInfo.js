import React from 'react';
import './blogInfo.css'

const BlogInfo = ({blog}) => {
    return (
            <div className="col-md-4">
                <div className="blog-content">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid" src={blog.img} alt=""/>
                    </div>
                    <div className="col-md-9">
                        <h4>{blog.name}</h4>
                     </div>
                </div>
                <span>{(new Date()).toDateString()}</span>
                <h5>{blog.heading}</h5>
                <p>{blog.description}</p>
                
            <div className="blog-overlay p-5">
                    <p>{blog.name}</p>
                    <p>{(new Date()).toDateString()}</p>
                    <h5>{blog.heading}</h5>
            </div>
            </div>
            </div>
    );
};

export default BlogInfo;