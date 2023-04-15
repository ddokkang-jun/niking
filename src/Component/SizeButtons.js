import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectProductSize } from "../Store/productSlice";

const SizeButtons = () => {
  let dispatch = useDispatch();
  let size = useSelector((state) => state.product.size);    // 사이즈 배열 
  let sizeWarning = useSelector((state) => state.product.sizeSelectWarning);
  const [selectedButton, setSelectedButton] = useState(-1);

  const handleClick = (index) => {
    // console.log("핸들클릭 호출됨");
    // console.log("selectedButton:",selectedButton);
    setSelectedButton(index);
  };
  
  // 신발 사이즈를 선택하면 리듀써에 해당 사이즈 데이타를 전송함
  const selectSize = (number, indexNumber) => {
    // console.log("index :", number);
    // console.log("indexNumber :", indexNumber);
    dispatch(setSelectProductSize(number));
    handleClick(indexNumber);
  }

  return (
    <div className='size'>
      <p className='size-title'>사이즈 선택</p>
      {sizeWarning === false ? <div>
        <div className='size-btn-area size-warning'>
          {size.map((item,index) => (
            <button
              style={{ backgroundColor: selectedButton === index ? 'grey' : 'white' }}
              className='size-btn'
              key={item}
              onClick={() => { selectSize(item, index) }}>
              {item}
            </button>
          ))}
        </div>
        <div className='size-warning-text'>
          <span>사이즈를 선택하셔야 함</span>
        </div>
      </div> :
        <div className='size-btn-area'>
          {size.map((item, index) => (
            <button
              style={{ backgroundColor: selectedButton === index ? 'grey' : 'white' }}
              className='size-btn'
              key={item}
              onClick={() => { selectSize(item, index) }}>
              {item}
            </button>
          ))}
        </div>}
    </div>
  );
};

export default SizeButtons;
