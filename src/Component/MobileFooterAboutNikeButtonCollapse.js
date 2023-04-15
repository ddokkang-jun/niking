import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';

// 모바일 풋터 about nike 버튼 컴포넌트
const MobileFooterAboutNikeButtonCollapse = () => {
  const [open, setOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <div className='mobile-footer-help-btn-area' onClick={() => setIsClick(!isClick)}>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <span>About Nike</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className='mobile-footer-help-btn-ChevronDownIcon'
            style={{
              transform: isClick ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease-in-out'
              // 0.3초 동안 서서히 변화, ease-in-out은 서서히 시작하고 끝나는 가속도
            }}
          />
        </button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text" className='mobile-footer-help-list'>
          <ul>
            <li>소식</li>
            <li>채용</li>
            <li>투자자</li>
            <li>지속가능성</li>
          </ul>
        </div>
      </Collapse>
    </>
  );
};

export default MobileFooterAboutNikeButtonCollapse;
