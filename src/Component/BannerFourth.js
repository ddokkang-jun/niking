import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const BannerFourth = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/productAll/에어맥스');
  }

  return (
    <div className='card'>
      {/* <div className="container fourth-banner-img-container">
        <div
          className='fourth-banner-img'
          onClick={handleClick}
          style={{
            backgroundImage: "url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/5296aaf5-3cc6-4b20-b93a-f9358175c7b5/nike-just-do-it.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div> */}
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://storage.googleapis.com/my-nike-project-video-data/Nike_SU23_Womens_Leak_Protection-1.mp4'
          width='100%'
          height='100%'
          playing={ true } // 자동재생
          muted={ true }  // 자동재생
          controls={ true }
          loop={ true }
        />
      </div>
      
      <div className='banner-description'>
        <h1>모든 움직임을 위한 트레이닝 컬렉션</h1>
        <div className='banner-p'>
          <span>웨이트 트레이닝, 러닝 어떤 운동을 하든 땀 걱정없는 통기성으로 최고의 퍼포먼스를 발휘해 보세요.</span>
        </div>
        <button className='banner-btn' onClick={handleClick}>상품보기</button>
      </div>
    </div>
  )
}

export default BannerFourth;
