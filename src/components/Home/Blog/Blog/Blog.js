import React from 'react';
import doctor1 from '../../../../images/Ellipse 1.png';
import doctor2 from '../../../../images/Ellipse 2.png';
import doctor3 from '../../../../images/Ellipse 3.png';
import BlogInfo from '../BlogInfo/BlogInfo';

const blogInfo = [
    {
        name: 'Rashid Kabir',
        heading: '2 times brush in a day',
        description: 'lorem ipsum dolor sit amet, consectetur adipis loreet, sed do eiusmod tempor incididunt ut lab',
        img:doctor1

    },
    {
        name: 'Dr.Croudi',
        heading: '2 times brush in a day',
        description: 'lorem ipsum dolor sit amet, consectetur adipis loreet, sed do eiusmod tempor incididunt ut lab',
        img:doctor2

    },
    {
        name: 'Dr. John Mitcheal',
        heading: 'The teeth cancer taking a challenge',
        description: 'lorem ipsum dolor sit amet, consectetur adipis loreet, sed do eiusmod tempor incididunt ut lab',
        img:doctor3

    },
]

const Blog = () => {
    return (
        <div className="text-center container">
            <h5 style={{color:'#12D0DC'}}>Our Blog</h5>
            <h1>From Our Blog News</h1>
            <div className="row my-5 py-5 ">
                {
                    blogInfo.map(blog => <BlogInfo blog={blog}></BlogInfo>)
                }
            </div>
        </div>
    );
};

export default Blog;