import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MobileSearchButton from './MobileSearchButton';

// 모바일 네비게이션바 컴포넌트임
const MobileNavbarToggleButtons = () => {
  const data = useSelector((state) => state.product.choosedProductData);
  const copyDataLength = [...data].length; // 장바구니에 저장된 상품의 길이를 뱃지에 숫자로 보여줄꺼임

  return (
    <div className='MobileNavbarToggleButtons-container'>
      <MobileSearchButton />
      <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '1.5em' }} />
        {copyDataLength === 0 ? "" :
          <span className="position-absolute top-20 end-50 translate-middle badge rounded-pill bg-danger" style={{ marginRight: '-130px' }}>
            {copyDataLength}
          </span>
        }
      </Link>
      <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
    </div>
  )
}

export default MobileNavbarToggleButtons;
