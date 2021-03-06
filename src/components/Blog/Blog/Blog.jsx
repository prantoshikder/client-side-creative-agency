import React from 'react';
import Blogs from '../../Home/Blogs/Blogs/Blogs';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import BlogsHeroArea from '../BlogsHeroArea/BlogsHeroArea';

const Blog = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <BlogsHeroArea></BlogsHeroArea>
            <Blogs showAllBlogs></Blogs>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default Blog;