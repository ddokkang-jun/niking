import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from './ProductCard';

const ProductsCarousel = () => {
  let productAllData = useSelector((state) => state.product.productAllData);

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

  function getRandomObjectsFromArray(array, num) {
  const arrayLength = array.length;
  
  // 랜덤한 인덱스를 생성하는 함수
  const getRandomIndex = () => Math.floor(Math.random() * arrayLength);
  
  // 배열을 num 개수만큼 랜덤하게 샘플링하여 새로운 배열을 만듭니다.
  const resultArray = Array(num).fill().map(() => array[getRandomIndex()]);
  
  return resultArray;
}

  useEffect(() => {

  },[]);
  
  return (
    <div>
      <div className='headline-featured-shoes'><h3>Featured Shoes</h3></div>
      {/* <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {randomProducts.map((item, i) => <ProductCard item={item} key={i} /> )}
      </Carousel> */}
    </div>
    
  );
};

export default ProductsCarousel;
