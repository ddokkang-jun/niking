import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import MobileHelpButtonCollapse from './MobileHelpButtonCollapse';
import MobileFooterAboutNikeButtonCollapse from './MobileFooterAboutNikeButtonCollapse';
// npm install --save @fortawesome/free-brands-svg-icons

// 모바일 화면에서의 footer 만들기

const Footer = () => {
  const snsIcons = [faTwitter, faYoutube, faFacebookF, faInstagram];
  const nikeNewsArr = ["새로운 소식", "멤버가입", "매장안내", "나이키 저널"];
  const nikeService = ["도움말", "로그인 안내", "주문배송조회", "반품 정책", "결제 방법", "공지사항", "문의하기"];
  const aboutNike = ["about nike", "소식", "채용", "투자", "지속가능성"];


  return (
    <>
      <div className='footer container-fluid'>
        <div className='row footer-row'>
          <div className='col-6 footer-left-area'>
            <ul>
              {nikeNewsArr.map((item) => (
                <li key={item} className='footer-title'>{item}</li>
              ))}
            </ul>
            <ul>
              {nikeService.map((item) => (
                <li key={item} className='footer-list'>{item}</li>
              ))}
            </ul>
            <ul>
              {aboutNike.map((item) => (
                <li key={item} className='footer-list'>{item}</li>
              ))}
            </ul>
          </div>
          <div className='col-6'>
            <div className='footer-right-area'>
              {snsIcons.map((item, idx) => (
                <div key={idx}>
                  <button className='footer-icon'>
                    <FontAwesomeIcon icon={item} style={{ fontSize: '1.5em' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='mobile-footer-container container-fluid'>
        <ul className='mobile-news-area'>
          <li>새로운 소식</li>
          <li>멤버 가입</li>
          <li>매장안내</li>
          <li>나이키 저널</li>
        </ul>
        <div className='row'>
          <ul>
            <MobileHelpButtonCollapse />
            <MobileFooterAboutNikeButtonCollapse />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
