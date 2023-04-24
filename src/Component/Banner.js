import React from "react";
import { useNavigate } from 'react-router-dom';
import Slideshow from './Slideshow';
import ReactPlayer from 'react-player'

const Banner = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/productAll/페가수스');
  }

  // https://storage.googleapis.com/my-nike-project-video-data/Q4-HOMEPG_loop_041023.mp4

  return (
    <>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://storage.googleapis.com/my-nike-project-video-data/LeBron-20-Spin_1.mp4'
          width='100%'
          height='100%'
          playing={true} // 자동재생
          muted={true}  // 자동재생
          controls={true}
          loop={true}
        />
      </div>

      {/* <Slideshow /> */}
      <div className='banner-description'>
        <h1>모든 러닝을 위한 경쾌한 질주</h1>
        <div className='banner-p'>
          <p>
            40년 동안 새로운 변화를 맞이해온 페가수스<br></br>
            새롭게 출시한 나이키 페가수스 40과 함께 안정적인 쿠셔닝, 최적의 착화감을 나이키 멤버가 되어 가장 먼저 경험해 보세요.
          </p>
        </div>
        <button className='banner-btn' onClick={handleClick}>상품보기</button>
      </div>
    </>
  );
};

export default Banner;
