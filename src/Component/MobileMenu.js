import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

// 모바일 토글버튼을 클릭하면 화면 우측에서 메뉴들이 나오는 offcanvas 컴포넌트
const MobileMenu = () => {
  let navigate = useNavigate();
  const mobileMainMenu = ["men", "women", "kids", "sale"];
  const [openMobileNav, setOpenMobileNav] = useState(null); // 숙제 : openMobileNav 이름을 알아보기 쉽게 수정하자.
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState("");
  const menuItems = [
    {
      label: 'Men',
      subMenu: [
        { label: '신발', items: ["신발", "라이프스타일", "러닝", "농구", "트레이닝"] },
        { label: '의류', items: ["의류", "탑 & 티셔츠", "팬츠 & 타이츠", "후디 & 크루", "재킷 & 베스트"] }
      ]
    },
    {
      label: 'Women',
      subMenu: [
        { label: '신발', items: ["신발", "러닝", "워킹", "농구", "조던"] },
        { label: '의류', items: ["의류", "스포츠 브라", "타이츠 & 레깅스", "재킷 & 베스트", "팬츠"] }
      ]
    },
    {
      label: 'Kids',
      subMenu: [
        { label: '신발', items: ["신발", "라이프스타일", "농구", "조던"] },
        { label: '의류', items: ["의류", "탑 & 티셔츠", "후디 & 크루", "팬츠"] }
      ]
    },
    {
      label: 'Sale',
      subMenu: [
        { label: '신발', items: ["남성 신발", "여성 신발", "Kids 신발", "신발 전체보기"] },
        { label: '의류', items: ["남성 의류", "여성 의류", "Kids 의류", "의류 전체보기"] }
      ]
    },
  ];

  // product All 이동 함수
  const handleNavigate = (productType) => {
    navigate(`/productAll/${gender}/${productType}`);
  };

  // 모바일 서브 네비게이션바 오픈토글러 함수
  const handleMobileNav = (menuName, index) => {
    setGender(menuName);
    setOpenMobileNav(index === openMobileNav ? null : index);
    setIsOpen(index === openMobileNav ? true : false);
  };

  return (
    <div className='container mobile-menu-container'>
      <div className='mobile-menu-area'>
        { mobileMainMenu.map((item, index) => (
          // 1. 메뉴 버튼이 클릭되면 함수에 메뉴이름, 메뉴이름의 index 숫자 를 전달
          <div key={ item } className='mobile-menu-button-area' onClick={ () => handleMobileNav(item, index) }>
            <div className='mobile-menu-button-container' style={ { backgroundColor: index === openMobileNav ? '#ddd' : 'white' } }>
              <button
                aria-controls="example-collapse-text" // 이 코드는 안적어도 되는데 그냥 남겨둠
                aria-expanded={ index === openMobileNav } // 3. true 면 열리고 false이면 닫힘
                className='mobile-main-menu-btn'
              >
                { item }
              </button>
              <FontAwesomeIcon icon={ faChevronDown } className={ index === openMobileNav ? 'rotate' : 'rotate-back' } />
            </div>
            <div>
              {/* Collapse in = true or false */ }
              <Collapse in={ index === openMobileNav }>
                <div id="example-collapse-text" className='mobile-sub-menu-area'>
                  { menuItems[openMobileNav]?.subMenu?.map((subMenuItem) => (
                    <div key={ subMenuItem.label }>
                      <ul>
                        { subMenuItem.items.map((item) => (
                          <li
                            key={ item }
                            onClick={ () => handleNavigate(item) }
                            className='mobile-sub-menu-list'>{ item }</li>
                        )) }
                      </ul>
                    </div>
                  )) }
                </div>
              </Collapse>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default MobileMenu;
