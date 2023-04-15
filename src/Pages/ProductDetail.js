import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SizeButtons from "../Component/SizeButtons";
import SuggestShoesCarousel from "../Component/SuggestShoesCarousel.js";
import DetailTab from "../Component/DetailTab";
import { setFade,setSizeSelectWarning } from "../Store/productSlice";

const ProductDetail = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let product = useSelector((state) => state.product.value);
  let suggestValue = useSelector((state) => state.product.suggestValue);
  product = product.concat(suggestValue);
  product = product.find((item) => item.id == id);
  let fade = useSelector((state) => state.product.fadeValue);
  let selectedSize = useSelector((state) => state.product.selectedSizeValue);

  const addToCart = () => {
    if(selectedSize === 0){
      // console.log("사이즈선택 안됨");
      dispatch(setSizeSelectWarning(false));
    }else {
      // console.log("사이즈선택 됨");
      dispatch(setSizeSelectWarning(true));
    }
  }


  useEffect(() => {
    window.scroll(0, 0);
    setTimeout(() => {
      dispatch(setFade("fadeEnd"));
    }, 100);
    return () => {
      dispatch(setFade(""));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"container fadeStart " + fade}>
      <div className='row'>
        <div className='col-md-6 detail-img-area'>
          <img src={product.imageAddress} alt='' />
        </div>
        <div className='col-md-6 detail-right-area'>
          <div className='detail-description-area'>
            <h3 className='detail-title'>{product.title}</h3>
            <p className='detatail-content'>{product.content}</p>
            <h5 className='detail-price'>{product.price / 1000},000원</h5>
          </div>
          <SizeButtons />
          <div className='cart-btn'>
            <button onClick={() => { addToCart()}}>장바구니에 추가하기</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <h4>추천 상품</h4>
        <SuggestShoesCarousel />
      </div>
      <div className='row'>
        <DetailTab />
      </div>
    </div>
  );
};

export default ProductDetail;
