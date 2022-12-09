import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner-v3";
import SearchForm from "./section-components/search-form";
import Aboutv1 from "./section-components/about-v1";
import Counter from "./section-components/counter-v1";
import AboutV2 from "./section-components/about-v2";
import Featuresv1 from "./section-components/features-v1";
import ProSlider from "./section-components/product-slider-v1";
import Apartment from "./section-components/apartment-v1";
import VideoV1 from "./section-components/video-v1";
import Category from "./section-components/category-v1";
import Testimonial from "./section-components/testimonial-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import CallToActionV2 from "./section-components/call-to-action-v2";
import Footer from "./global-components/footer";
import Map from "./section-components/map.js";
import ProductSlider from "./section-components/product-slider-v2";
import Video from "./section-components/video-v2";
import Dialog  from '.././Dialog';
const Home_V1 = () => {
  return (
    <div>
      
      <Navbar />
      <Banner />
      <Counter />
      <Video />
      <Apartment />
      <ProductSlider />
      <Category />
      <Map />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V1;
