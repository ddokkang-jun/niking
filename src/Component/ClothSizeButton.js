import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setChoosedProductData, setCountPlus } from '../Store/productSlice';

const ClothSizeButton = ({ data }) => {
  let dispatch = useDispatch();
  const storeData = useSelector((state) => state.product.choosedProductData);
  let menClothSize = useSelector((state) => state.product.menClothSize);
  let womenClothSize = useSelector((state) => state.product.womenClothSize);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1); // 선택된 사이즈의 인덱스를 저장함
  let [isSizeSelect, setIsSizeSelect] = useState(false);
  let [warning, setWarning] = useState("");
  let [selectedClothSize, setSelectedClothSize] = useState("");
  let count = 1;

  const selectSize = (clothSize, indexNumber) => {
    setIsSizeSelect(true);
    setSelectedButtonIndex(indexNumber);
    setWarning("");
    setSelectedClothSize(clothSize);
  };

  // 중복확인함수
  const checkDuplicationData = () => {
    if (storeData.some((item) => item.data.id === data.id)) {   // true인 경우 실행, 중복된 데이터가 있으면 실행
      dispatch(setCountPlus(data));                             // count만 +1 해주도록 스토어에 action을 보냄
    } else {                                                    // false인 경우 실행, 중복된 데이터가 없음
      dispatch(setChoosedProductData([data, selectedClothSize, count]));
    };
  };

  // 장바구니추가버튼이 클릭되면 실행되는 첫번째 함수
  const addToCart = () => {
    if (storeData.length === 0) {                               // 장바구니에 아무런 데이터가 없으면 무조건 추가해줌
      dispatch(setChoosedProductData([data, selectedClothSize, count]));
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
    }
  }

  return (
    <div>
      <div className='size'>
        <p className='size-title'>사이즈 선택</p>
        <div className={`size-btn-area ${warning}`}>
          {data.gender === "men" ? menClothSize.map((item, index) => (
            <button
              style={{ backgroundColor: selectedButtonIndex === index ? 'grey' : 'white' }}
              className='size-btn'
              key={item}
              onClick={() => { selectSize(item, index) }}>
              {item}
            </button>
          )) : womenClothSize.map((item, index) => (
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

export default ClothSizeButton;
