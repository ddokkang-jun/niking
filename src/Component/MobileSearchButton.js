import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// 모바일 search button 컴포넌트입니다.
const MobileSearchButton = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [noKeyword, setNoKeyword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const popularKeyword = ["에어 포스", "조던", "에어맥스", "레깅스"];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Navbar.Toggle을 FontAwesomeIcon 아이콘으로 커스텀 하는 코드
  const customNavbarToggle = React.forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      className="btn btn-link"
    >
      <FontAwesomeIcon
        icon={faSearch}
        style={{ fontSize: '1.5em' }}
        onClick={handleShow} />
    </button>
  ));

  // 상품전체페이지로 라우팅해주는 함수
  const handleNavigate = (menu) => {
    navigate(`/productAll/${menu}`);
    handleClose();
  };

  // 검색창에 입력된 텍스트들을 지워주는 함수
  const handleClearBtn = () => {
    setInputValue("");
  };

  // 검색창에서 키보드 "엔터"가 눌리면 실행되는 함수
  const handleSearch = () => {
    navigate(`/productAll/${inputValue}`);
    setInputValue("");
    handleClose();
    setNoKeyword(false);
  };

  // 검색창에 입력값을 주시함
  useEffect(() => {
    if (inputValue !== "") {
      setNoKeyword(true);
    };
  }, [inputValue]);

  return (
    <>
      <Navbar.Toggle as={customNavbarToggle} />
      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
      >
        <div className='offcanvas-title-area'>
          <div className='offcanvas-input-area'>
            <input
              type="text"
              value={inputValue}
              className="mobile-search-input"
              placeholder='검색'
              // style={{ width: vsIsOpen ? "752px" : "" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => setInputValue(e.target.value)} />
            <button className='mobile-search-btn' onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5em' }} />
            </button>
            <button
              className='mobile-search-clear-btn'
              style={{ display: noKeyword ? "block" : "none" }}
              onClick={() => handleClearBtn(inputValue)}>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.5em' }} />
            </button>
          </div>
          <div className='mobile-search-offcanvas-close-btn' onClick={handleClose}>
            <button>취소</button>
          </div>
        </div>
        <Offcanvas.Body className='offcanvas-custom-body'>
          <ul className='offcanvas-menu-list-container'>
            <p>인기 검색어</p>
            {popularKeyword.map((item, idx) => (
              <li key={idx} onClick={() => { handleNavigate(item) }}>{item}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileSearchButton;
