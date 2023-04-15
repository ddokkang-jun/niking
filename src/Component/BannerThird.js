import React from 'react'
import { useNavigate } from 'react-router-dom';

const BannerThird = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/productAll/라이프스타일 신발');
  };

  return (
    <div className='card'>
      <div className="container third-banner-img-container">
        <div
          className='third-banner-img'
          onClick={handleClick}
          style={{
            backgroundImage: "url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/78487171-3eb6-4d93-91b8-e05efc3b13ba/nike-just-do-it.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <div className='banner-description'>
        <h1>에어맥스 펄스</h1>
        <div className='banner-p'>
          <p>
            끊임 없이 변화하는 런던의 음악 씬에서
            <br></br>
            영감을 받아 탄생한 에어맥스 펄스를 만나 보세요.
          </p>
        </div>
        <button className='banner-btn' onClick={handleClick}>상품보기</button>
      </div>
    </div>
  )
}

export default BannerThird
