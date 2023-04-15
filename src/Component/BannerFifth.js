import React from 'react'
import { useNavigate } from 'react-router-dom';

// trending now banner
const BannerFifth = () => {
  let navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/productAll/${name}`);
  }

  return (
    <div>
      <div className='trending-now-title'>
        <h4>trending now</h4>
      </div>
      <div className='trending-now-area'>
        <div className='trending-relative card'>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_482,c_limit/b7efdfc7-0efd-41ca-a1fb-7cd138c1e683/nike-just-do-it.jpg"
            alt=""
            onClick={() => { handleClick('스포츠 브라') }} />
          <div className='trending-absolute'>
            <h5>나이키 스포츠 브라</h5>
            <button
              className='trending-btn'
              onClick={() => { handleClick('스포츠 브라') }}>
              구매하기
            </button>
          </div>
        </div>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_482,c_limit/a202f779-35b4-4d1d-8c76-d1b1da657ae7/nike-just-do-it.jpg"
            alt=""
            onClick={() => { handleClick('여성') }} />
          <div className='trending-absolute'>
            <h5>여성 에센셜 컬렉션</h5>
            <button
              className='trending-btn'
              onClick={() => { handleClick('여성') }}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerFifth;
