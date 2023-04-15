import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SubMenubar from './SubMenubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileMenu from './MobileMenu';
import MobileNavbarToggleButtons from './MobileNavbarToggleButtons';

// offcanvas top 으로 메인 네비게이션바 적용하기 

const NavigationBar = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [subShow, setSubShow] = useState(false);
  const menuList = ["men", "women", "kids", "sale"];
  const [hoveredMenu, setHoveredMenu] = useState("");
  const data = useSelector((state) => state.product.choosedProductData); // store에서 장바구니에 저장된 데이터
  const copyDataLength = [...data].length; // 장바구니에 저장된 상품의 길이를 뱃지에 숫자로 보여줄꺼임
  const [vsIsOpen, setVsIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const popularKeyword = ["레깅스", "조던", "에어맥스", "블레이저"];
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

  // 호출되면 오프캔버스를 닫아주는 함수임
  const handleOffcanvas = () => {
    setToggleMenuIsOpen(false);
  };

  // 검색창에서 키보드 "엔터"가 눌리면 실행되는 함수
  const handleSearch = () => {
    navigate(`/productAll/${inputValue}`);
    setInputValue("");
    setVsIsOpen(false);
  };

  // 검색창에 키워드가 입력되면 실행되는 함수
  const navigateKeyword = (keyword) => {
    navigate(`/productAll/${keyword}`);
    setInputValue("");
    setVsIsOpen(false);
  };

  // 취소버튼을 누르면 서브넷바가 닫힘
  const handleCancelBtn = () => {
    setInputValue("");
    setVsIsOpen(false);
  };

  // 검색창에 입력된 텍스트들을 지워주는 함수
  const handleClearBtn = () => {
    setInputValue("");
  };

  // 네비게이션 메뉴에 마우스를 올리면 : 서브메뉴가 보이도록해줌
  const handleHover = (event) => {
    let target = event.target.className;
    if (target === "shoppingMenu" || target === "product-list" || target === "subMenubar" || target === "subMenu-area" || target === "subMenu-list") {
      setSubShow(true);
    } else {
      setSubShow(false);
    }
  };

  // 웹페이지에서 스크롤을 내리거나 올리면 : 네비게이션바를 안보이게 또는 보이게 해줌
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  // 네비게이션바의 메뉴 list 에 마우스를 호버하면 해당 메뉴의 서브 메뉴가 보인다.
  const handleMenu = (menuName) => {
    setHoveredMenu(menuName);
  };

  // 클릭이벤트핸들러 : 메뉴 이외에 클릭을 하면 서브메뉴를 닫아줌
  const handleClick = (menuName) => {
    // console.log(menuName);
    setSubShow(false);
  };

  // 메인 넷바에서 스크롤이벤트가 발생하면 아래코드 실행됨
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // 메인 넷바에서 호버이벤트발생하면 아래코드 실행됨
  useEffect(() => {
    window.addEventListener('mouseover', function (event) {
      handleHover(event);
    });

    return () => {
      window.removeEventListener('mouseover', function (event) {
        handleHover(event);
      });
    }
  }, []);

  // 검색창에 입력값을 주시함
  useEffect(() => {
    if (inputValue !== "") {
      setVsIsOpen(true);
    };
  }, [inputValue]);

  // 클릭 이벤트 핸들러 : 검색창을 닫아주는 함수있음, 모바일에서 토글 버튼 핸들러 호출, 감시
  useEffect(() => {
    const handleWindowClick = (event) => {
      setInputValue("");
      setVsIsOpen(false);
      // console.log(event.target.className);
      const targetClass = event.target.className;


      // 모바일에서 클릭이벤트가 발생하면 해당 클래스이름을 찾고 아래의 조건에 해당되면
      // 오프캔버스를 false로 만들어서 닫거나 true를 만들어서 아래의 offcanvas에 show 속성을 이용해
      // 보이도록 설정할 수 있다.
      if (targetClass === "mobile-sub-menu-list" || targetClass === "btn-close" || targetClass === "fade offcanvas-backdrop show") {
        handleOffcanvas(); 
      } else if (targetClass === "navbar-toggler-icon" || targetClass === "mobile-menu-button-container") {
        setToggleMenuIsOpen(!toggleMenuIsOpen);
      } 
    };

    // fade offcanvas-backdrop show
    window.addEventListener('click', handleWindowClick);

    return () => {
      setToggleMenuIsOpen(false); // 이 코드로 재렌더링 될때 토글버튼을 항상 보이도록 리셋해줌.
      window.removeEventListener('click', handleWindowClick);
    }
  }, [setVsIsOpen, setInputValue]);

  return (
    <div>
      <Navbar
        bg='light'
        variant='light'
        className={`web-nav ${show ? 'show-navbar' : 'hidden-navbar'}`}>
        <div
          className='hidden-nav'
          style={{ transform: vsIsOpen ? "translateY(0)" : "" }}>
          <ul
            className="popular-keyword"
            style={{ display: vsIsOpen ? "block" : "" }}>
            <p>인기 검색어</p>
            {popularKeyword.map((item, index) => (
              <li onClick={() => { navigateKeyword(item) }} key={index}>{item}</li>
            ))}

          </ul>
        </div>
        <Container>
          <div className='nav-line row'>
            <div className='nav-left-area col'>
              <Link to='/'>
                <img
                  width={60}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'
                  alt='' />
              </Link>
            </div>
            <div className='product-list-area col-6'>
              <ul className='product-list' style={{ display: vsIsOpen ? "none" : "flex" }}>
                {menuList.map((menu, index) => (
                  <Link to={`/productAll/${menu}`} key={index}>
                    <li className='shoppingMenu'
                      aria-label={`${menu}`}
                      onClick={() => { handleClick(menu) }}
                      onMouseOver={() => { handleMenu(menu) }}>{menu}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className='nav-right-area col'>
              <div className='search-cancel-btn-area' style={{ display: vsIsOpen ? "block" : "none" }}>
                <button onClick={handleCancelBtn}>취소</button>
              </div>
              <div className='search-area'>
                <div className={`search-input-area ${vsIsOpen === true ? `large-search` : ""}`}>
                  <input
                    type="text"
                    value={inputValue}
                    className={`search-input`}
                    placeholder='검색'
                    style={{ width: vsIsOpen ? "752px" : "" }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    onChange={(e) => setInputValue(e.target.value)} />
                  <button className='search-btn' onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5em' }} />
                  </button>
                  <button
                    className='search-clear-btn'
                    style={{ display: vsIsOpen ? "block" : "none" }}
                    onClick={() => handleClearBtn(inputValue)}>
                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5em' }} />
                  </button>
                </div>
              </div>

              <div className='cart-area'>
                <Link to='/cart'>
                  {vsIsOpen === true ?
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ fontSize: '1.5em', display: 'none' }} />
                    :
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ fontSize: '1.5em' }} />}

                  {copyDataLength === 0 ? "" :
                    <span className="position-absolute top-20 start-90 translate-middle badge rounded-pill bg-danger" style={{ visibility: vsIsOpen ? "hidden" : "visible" }}>
                      {copyDataLength}
                    </span>}
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {subShow === true ? <SubMenubar hoveredMenu={hoveredMenu} /> : ""}
      </Navbar>

      {/* mobile */}
      <Navbar key='sm' bg="light" expand='sm' className="mb-3">
        <Container fluid>
          <Link to='/'>
            <img
              width={60}
              className='logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'
              alt='' />
          </Link>
          <MobileNavbarToggleButtons />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-sm'
            aria-labelledby='offcanvasNavbarLabel-expand-sm'
            placement="end"
            show={toggleMenuIsOpen}
            style={{ width: "75%" }} // 너비 설정
            // backdrop='static' static을 적용하면 아무리 배경을 클릭해도 고정되서 안닫힘
          >
            <Offcanvas.Header closeButton className="d-flex justify-content-end" />
            <MobileMenu />
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

// TMI :
// <Offcanvas.Header closeButton className="d-flex justify-content-end" />
// 위의 코드는 부트스트랩의 offcanvas "closeButton" 코드임