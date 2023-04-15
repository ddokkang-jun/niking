import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { setChangeCount, setChangeSize, setDeleteData, setFade } from '../Store/productSlice';
import { setProductAllPageClickedData } from "../Store/productSlice";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';

const Cart = () => {
  const data = useSelector((state) => state.product.choosedProductData);
  let copyData = [...data];
  const shoesSize = useSelector((state) => state.product.size);
  const menClothSize = useSelector((state) => state.product.menClothSize);
  const womenClothSize = useSelector((state) => state.product.womenClothSize);
  let [acount, setAcount] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false); // 부트스트랩에서 가져온 페이드 컴포넌트의 state

  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = (product) => {
    dispatch(setProductAllPageClickedData(product)); 
    navigate('/productsdetails/');
  };

  // 카운트변경함수
  function handleSelectCountChange(event, itemdata) {
    dispatch(setChangeCount([event.target.value, itemdata]));
  };

  // 사이즈를 바꾸면 사이즈가 바뀜
  function handleSelectSizeChange(event, data) {
    dispatch(setChangeSize([event.target.value, data]));
  };
  // 삭제버튼핸들러
  const deleteProduct = (itemData) => {
    dispatch(setDeleteData(itemData.data.id));
  };

  // 상품들의 가격만을 다 더하는 계산기
  const calculatorAcount = (array) => {
    let sum = array.reduce((sum, value) => {
      sum += value;
      return sum;
    }, 0);
    setAcount(sum);
  }

  // 상품들의 가격만 골라내서 배열로 만듬
  const filterPrice = (dataArray) => {
    let num = dataArray.map((item) => {
      return item.data.price;             // 상품들의 가격만 골라내서 배열로 만듬
    });
    // console.log(num);
    calculatorAcount(num);
  };

  // 사용자가 장바구니에 추가한 상품의 데이터를 가져와서 
  // 상품객체 중에 상품의 가격을 필터링하는 useEffect
  useEffect(() => {
    if (copyData.length > 0) {
      filterPrice(copyData);
    } else {
      setAcount(0);
    }
    // eslint-disable-next-line 
  }, [copyData]);

  // 카트페이지가 로드되면 페이지의 최상단으로 자동이동하는 useEffect 만들기
  useEffect(() => {
    setOpen(true);
    window.scroll(0, 0);
  },[])

  return (
    <>
      <Fade in={open}>
        <div className='container mainContainer cart-page-container'>
          <div className='row'>
            <div className='col-md-8'>
              <h4 className='cart-title'>장바구니</h4>
              {copyData.length === 0 ?
                <p className='cart-no-result'>장바구니에 상품이 없습니다.</p>
                :
                <div className='cart-product-main-container'>
                  {copyData.map((item) => (
                    <div key={item.data.id}>
                      <div className='cart-product-container'>
                        <div className='cart-product-image-area' onClick={() => { handleImageClick(item.data) }}>
                          <img src={item.data.imageAddress} alt="" />
                        </div>
                        <div className='cart-product-description-area'>
                          <div className='cart-title-price'>
                            <div className='cart-title'>{item.data.title}</div>
                            <div className='cart-price'>{item.data.price.toLocaleString()} 원</div>
                          </div>
                          <div className='cart-content'>{item.data.content}</div>
                          <div className='cart-content cart-size'>
                            <div className='cart-size-area'>
                              <label className='cart-size-label'>사이즈</label>
                              <select id="cart-size" className="cart-size-select" value={item.size} onChange={(e) => { handleSelectSizeChange(e, item) }}>
                                {item.data.productType === "shoes" && shoesSize.map((size) => (
                                  <option key={size} value={size}>{size}</option>
                                ))}
                                {item.data.productType === "cloth" && item.data.gender === "men" ? menClothSize.map((size) => (
                                  <option key={size} value={size}>{size}</option>
                                )) : ""}
                                {item.data.productType === "cloth" && item.data.gender === "women" ? womenClothSize.map((size) => (
                                  <option key={size} value={size}>{size}</option>
                                )) : ""}
                                {item.data.productType === "cloth" && item.data.gender === "kids" ? womenClothSize.map((size) => (
                                  <option key={size} value={size}>{size}</option>
                                )) : ""}
                              </select>
                            </div>
                            <div className='cart-count-area'>
                              <label className='cart-size-label'>수량</label>
                              <select id="cart-size" className='cart-size-select' value={item.count} onChange={(e) => { handleSelectCountChange(e, item) }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                          <div className='cart-delete-btn'>
                            <button onClick={() => { deleteProduct(item) }}>
                              <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
            <div className='col-md-4 order-area'>
              <h4>주문내역</h4>
              <div className='cart-product-acount'>
                <div>상품금액</div>
                <div>{acount.toLocaleString()} 원</div>
              </div>
              <div className='cart-product-delivery-acount'>
                <div>배송비</div>
                <div>무료</div>
              </div>
              <div className='cart-product-total-acount'>
                <div>총 결제 금액</div>
                <div className='cart-product-total-acount-number'>{acount.toLocaleString()} 원</div>
              </div>
              <div
                className='orderPayment-btn'
                onClick={handleShow}>
                <button>주문결제</button>
              </div>
            </div>
          </div>

          {/* 주문결제 버튼을 누르면 나오는 안내 모달창 */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>🚀주문결제✨</Modal.Title>
            </Modal.Header>
            <Modal.Body>죄송합니다.😥 <br />주문결제에는 당신의 소중한 개인정보가 포함되기 때문에<br /> 현재 개발자가 놀고 있어요.😍😎</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Fade>
    </>
    
  )
};

export default Cart;
