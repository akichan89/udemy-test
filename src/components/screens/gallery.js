import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../parts/Breadcrumb";
import Posts from "../parts/Posts";
import Sidebar from "../parts/Sidebar";
import Footer from "../parts/Footer";

const Gallery = () => {
  return (
    <>
      <Header />
      
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
