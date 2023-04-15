import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Component/Banner";
import BannerFifth from '../Component/BannerFifth';
import BannerFourth from '../Component/BannerFourth';
import BannerThird from '../Component/BannerThird';
import BannerSeventh from '../Component/BannerSeventh';
import ProductsCarousel from "../Component/ProductsCarousel";
import { setFade } from "../Store/productSlice";
import ProductAllMenu from '../Component/ProductAllMenu';
import Footer from '../Component/Footer';

const Home = () => {
  let dispatch = useDispatch();
  let fade = useSelector((state) => state.product.fadeValue);

  useEffect(() => {
    window.scroll(0, 0); // 페이지가 새로 이동 되면 자동으로 최상단으로 이동해서 보여주게 함
    setTimeout(() => {
      dispatch(setFade("fadeEnd"));
    }, 100);

    return () => {
      dispatch(setFade(""));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"fadeStart " + fade}>
      <Container>
        <Banner />
        <BannerThird />
        <BannerFourth />
        <BannerFifth />
        <ProductsCarousel />
        <BannerSeventh />
        <ProductAllMenu />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
