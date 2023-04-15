import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MobileBottomMenu from './MobileBottomMenu';

// 홈화면 최하단에 있는 메뉴 컴포넌트임
const ProductAllMenu = () => {
  const featured = ["에어 포스 1", "조던 1", "에어맥스 97", "에어맥스 90", "블레이저", "리액트", "페가수스"];
  const shoes = ['조던 신발', '러닝 신발', '농구 신발', '테니스 신발', '트레이닝 신발', 'Sale 신발'];
  const cloth = ['탑 & 티셔츠', '쇼츠', '후디 & 크루', '조거 & 스웻팬츠', '스포츠 브라', '팬츠 & 타이츠', '양말', '요가', 'NikeLab', 'Sale 의류'];
  const kids = ['베이비 신발', '키즈 신발', '키즈 농구 신발', '키즈 조던 신발', '키즈 의류', '키즈 양말', 'Sale 키즈'];
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  
  const handleClick = (item) => {
    navigate(`/productAll/${item}`);
  };

  const hoverControl = (event) => {
    let target = event.target.className;
    if (target === 'product-all-menu-list' || target === "product-all-menu-area" || target === "product-all-menu-title") {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('mouseover', (e) => {
      hoverControl(e);
    })

    return () => {
      window.removeEventListener('mouseover', (e) => {
        hoverControl(e);
      })
    }

  }, []);

  return (
    <div>
      <div className='container web-bottom-product-menu'>
        <div className='product-all-menu-container' style={show ? { height: "100%" } : { height: "270px" }}>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>featured</h4>
            <ul>
              {featured.map((item, index) => (
                <li className='product-all-menu-list' key={index} onClick={() => handleClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>신발</h4>
            <ul>
              {shoes.map((item, index) => (
                <li className='product-all-menu-list' key={index} onClick={() => handleClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>의류</h4>
            <ul>
              {cloth.map((item, index) => (
                <li className='product-all-menu-list' key={index} onClick={() => handleClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>kids</h4>
            <ul>
              {kids.map((item, index) => (
                <li className='product-all-menu-list' key={index} onClick={() => handleClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MobileBottomMenu />
    </div>
  )
}

export default ProductAllMenu;
