import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import NoData from './NoData';
import ProductCard from "./ProductCard";

const SuggestShoesCarousel = () => {
  let suggest = useSelector((state) => state.product.suggestValue);

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

  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true}>
      {suggest
        ? suggest.map((item, i) => <ProductCard key={i} item={item} />)
        : <NoData />}
    </Carousel>
  );
};

export default SuggestShoesCarousel;
