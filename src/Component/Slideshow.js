import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
  let navigate = useNavigate();

  const images = [
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/fe452a37-0b74-4dc3-927c-80015c6afff0/image.jpg',
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f4b4872e-5497-4fa3-ac43-0c05d22ed28e/image.jpg',
    'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/69d9063c-508f-4476-8496-770b2658aafa/image.jpg',
  ];
  const arrowStyles = {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1
  };

  const handleClick = () => {
    navigate('/productAll/페가수스');
  }

  return (
    <div className='card first-banner-img' onClick={ handleClick }>
      <Fade
        duration={2000}
        prevArrow={<div style={arrowStyles}>Prev</div>}
        nextArrow={<div style={arrowStyles}>Next</div>}>
        <div className="container fourth-banner-img-container">
          <div
            className='banner-img-first'
            onClick={handleClick}
            style={{
              backgroundImage: `url('${images[0]}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        <div className="container fourth-banner-img-container">
          <div
            className='banner-img-second'
            onClick={handleClick}
            style={{
              backgroundImage: `url('${images[1]}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        <div className="container fourth-banner-img-container">
          <div
            className='banner-img-third'
            onClick={handleClick}
            style={{
              backgroundImage: `url('${images[2]}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
