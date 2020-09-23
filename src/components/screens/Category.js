import React from "react";
import Header from "../parts/Header";

import Posts from "../parts/Posts";

import Footer from "../parts/Footer";

const Category = () => {
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

export default Category;
