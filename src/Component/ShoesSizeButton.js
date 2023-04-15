import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoosedProductData, setCountPlus } from '../Store/productSlice';

const ShoesSizeButton = ({ data }) => {
  let dispatch = useDispatch();
  const storeData = useSelector((state) => state.product.choosedProductData);
  let size = useSelector((state) => state.product.size);    // 신발 사이즈 배열 
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1); // 선택된 사이즈의 인덱스를 저장함
  let [isSizeSelect, setIsSizeSelect] = useState(false);
  let [warning, setWarning] = useState("");
  let [selectedShoesSize, setSelectedShoesSize] = useState("");
  let count = 1;

  const selectSize = (shoesSize, indexNumber) => {
    setIsSizeSelect(true);
    setSelectedButtonIndex(indexNumber);
    setWarning("");
    setSelectedShoesSize(shoesSize);
  };

  // 중복확인함수
  const checkDuplicationData = () => {
    if (storeData.some((item) => item.data.id === data.id)) {         // true인 경우 실행, 중복된 데이터가 있으면 실행
      dispatch(setCountPlus(data));                                   // count만 +1 해주도록 스토어에 action을 보냄
    } else {                                                          // false인 경우 실행, 중복된 데이터가 없음
      dispatch(setChoosedProductData([data, selectedShoesSize, count]));
    };
  };

  // 장바구니추가버튼이 클릭되면 실행되는 첫번째 함수
  const addToCart = () => {
    if (storeData.length === 0) {
      dispatch(setChoosedProductData([data, selectedShoesSize, count])); // 스토어에 해당데이터가 추가됨
    } else {
      checkDuplicationData();                                   // 장바구니에 상품이 있으면 실행됨
    };
  };

  const handleCartBtn = () => {
    if (isSizeSelect === false) {
      // 경고보여주기
      setWarning("size-warning");
    } else {
      // 경고 가려주기
      setWarning("");
      addToCart();
    };
  }

  return (
    <div className='size-area'>
      <div className='size'>
        <p className='size-title'>사이즈 선택</p>
        <div className={`size-btn-area ${warning}`}>
          {size.map((item, index) => (
            <button
              style={{ backgroundColor: selectedButtonIndex === index ? 'grey' : 'white' }}
              className='size-btn'
              key={item}
              onClick={() => { selectSize(item, index) }}>
              {item}
            </button>
          ))}
        </div>
        <div className='size-warning-text'>
          {warning === "" ? "" : <span>사이즈를 선택하세요.</span>}
        </div>
      </div>
      <div className='cart-btn'>
        <button onClick={() => { handleCartBtn() }}>장바구니에 추가하기</button>
      </div>
    </div>

  );
};

export default ShoesSizeButton;
