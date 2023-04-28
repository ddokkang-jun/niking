import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProductAllPageClickedData } from '../Store/productSlice';

const ProductAllPageProductCard = ({ item }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [salePrice, setSalePrice] = useState(0);

  const handleClick = (product) => {
    dispatch(setProductAllPageClickedData(product));
    navigate('/productsdetails/');
  };

  useEffect(() => {
    const calculateSalePrice = () => {
      let num = item.salepercent;
      let itemPrice = item.price;
      if (num === null || num === undefined) {
        setSalePrice(itemPrice);
      } else {
        let textprice = Math.ceil(itemPrice - (itemPrice * (num / 100)));
        setSalePrice(textprice);
      }
    };

    if (item.salepercent !== null) {
      calculateSalePrice();
    }
  }, [item.salepercent, item.price]);

  return (
    <div className='card' onClick={() => { handleClick(item) }}>
      <img className='product-all-img-card' src={item?.imageAddress} alt="" />
      { item.bestseller === true ? <div className='product-red-title'>베스트셀러</div> : item.new === true ? <div className='product-red-title'>신상품</div>: ""}
      <div>{item.title}</div>
      <div className='product-content'>{item.content}</div>
      {item.sale === true ?
        <div className='sale-area'>
          <div className='sale-price-area'>
            <div className='sale-applied-price'>{ salePrice.toLocaleString() } 원</div>
            <div className='pre-price'>{item.price.toLocaleString() } 원</div>
          </div>
          <div className='sale-price'>{item.salepercent}% 할인</div>
        </div>
        :
        <div>{item.price.toLocaleString()} 원</div>}
    </div>
  )
}

export default ProductAllPageProductCard;
