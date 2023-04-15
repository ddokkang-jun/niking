import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// 서브메뉴 컴포넌트
const SubMenubar = ({ hoveredMenu }) => {
  const navigate = useNavigate();
  const men = {
    shoesList: ["신발", "라이프스타일", "러닝", "농구", "트레이닝"],
    clothList: ["의류", "탑 & 티셔츠", "팬츠 & 타이츠", "후디 & 크루", "재킷 & 베스트"]
  };
  const women = {
    shoesList: ["신발", "러닝", "농구", "조던"],
    clothList: ["의류", "스포츠 브라", "팬츠 & 레깅스", "재킷 & 베스트", "팬츠"]
  };
  const kids = {
    shoesList: ["신발", "라이프스타일", "농구", "조던"],
    clothList: ["의류", "탑 & 티셔츠", "후디 & 크루", "팬츠 & 레깅스"]
  };
  const sale = {
    mensSaleList: ["Mens Sale", "남성 신발", "남성 의류", "남성 전체보기"],
    womenSaleList: ["Womens Sale", "여성 신발", "여성 의류", "여성 전체보기"],
    kidsSaleList: ["Kids Sale", "kids 신발", "kids 의류", "kids 전체보기"]
  };
  const [hoveredMenuName, setHoveredMenuName] = useState("men");
  let [show, setShow] = useState(false);
  
  const clickHandler = (hoveredMenuName, menu) => {
    navigate(`/productAll/${hoveredMenuName}/${menu}`);
    setShow(!show);
  }

  useEffect(() => {
    if (hoveredMenu !== null) {
      setHoveredMenuName(hoveredMenu);
    }
  }, [hoveredMenu, hoveredMenuName]);

  return (
    <div className='subMenubar' style={{ visibility: show ? 'hidden' : 'visible'}}>
      <ul className='subMenu-area'>
        {(hoveredMenuName === "men" ? men.shoesList : hoveredMenuName === "women" ? women.shoesList : hoveredMenuName === "kids" ? kids.shoesList : hoveredMenuName === "sale" ? sale.mensSaleList : []).map((menu, index) => (
          <li className='subMenu-list' key={index} onClick={() => { clickHandler(hoveredMenuName, menu) }}>{menu}</li>
        ))}
      </ul>
      <ul className='subMenu-area'>
        {(hoveredMenuName === "men" ? men.clothList : hoveredMenuName === "women" ? women.clothList : hoveredMenuName === "kids" ? kids.clothList : hoveredMenuName === "sale" ? sale.womenSaleList : []).map((menu, index) => (
          <li className='subMenu-list' key={index} onClick={() => { clickHandler(hoveredMenuName, menu) }}>{menu}</li>
        ))}
      </ul>
      <ul className='subMenu-area'>
        {hoveredMenuName === "sale" ? sale.kidsSaleList.map((menu, index) => (
          <li className='subMenu-list' key={index} onClick={() => { clickHandler(hoveredMenuName, menu) }}>{menu}</li>
        )) : ""}
      </ul>
    </div>
  )
}

export default SubMenubar
