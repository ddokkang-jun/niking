import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProductAllPageClickedData } from '../Store/productSlice.js';
import { setSelectProductSize,setSizeSelectWarning } from "../Store/productSlice";

const ProductCard = ({ item }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();


  const showProductDetail = (item) => {
    window.scroll(0,0);
    
    // 상품사이즈 리셋 해주는 코드
    dispatch(setSizeSelectWarning(true));
    dispatch(setSelectProductSize(0));

    // navigate(`/detail/${item.id}`);
    dispatch(setProductAllPageClickedData(item));
    navigate('/productsdetails/');
  }

  return (
    <div className='card' onClick={() => showProductDetail(item)}>
      {/* <Card.Img
        variant='top'
        src={item.imageAddress}
      /> */}
      <Card.Body>
        <div>
          <h6>{item.title}</h6>
          <h6 className='item-content'>{item.content}</h6>
          <h6>{item.price / 1000},000원</h6>
        </div>
      </Card.Body>
    </div>
  );
};

export default ProductCard;
