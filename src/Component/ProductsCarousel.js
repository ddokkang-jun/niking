import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from './ProductCard';
import { setHomePageCarousel } from '../Store/productSlice';

const ProductsCarousel = () => {
  let productAllData = useSelector((state) => state.product.productAllData);
  let homePageCarousel = useSelector((state) => state.product.homePageCarousel);
  const array = [358, 359, 360, 363, 364, 365]; // 캐러셀에서 보여질 상품들 data id
  let dispatch = useDispatch();
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getCarouselItem = (data) => {
    console.log("오류남?");
    // console.log(data);
    // let result = data.filter((item) => array.includes(item.id));
    //   dispatch(setHomePageCarousel(result));
  };

  useEffect(() => {
    getCarouselItem(productAllData);
    
  }, [productAllData]); 

  return (
    <div>
      <div className='headline-featured-shoes'><h3>Featured Shoes</h3></div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {homePageCarousel.map((item, i) => <ProductCard item={item} key={i} /> )}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;