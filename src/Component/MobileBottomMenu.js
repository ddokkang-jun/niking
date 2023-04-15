import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// 모바일 화면에서 홈화면 하단의 메뉴 컴포넌트
const MobileBottomMenu = () => {
  let navigate = useNavigate();
  const mobileMainMenu = ["featured", "신발", "의류", "kids"];
  const [gender, setGender] = useState("");
  const [clickedMenuName, setClickedMenuName] = useState(null);
  // clickedMenuName : 사용자가 클릭한 메뉴만 인덱스값이 적용되도록 하고 나머지 메뉴들은 null 을 적용하는 state
  const menuLists = [
    {
      label: 'featured',
      lists: ["에어 포스 1", "조던 1", "에어맥스 97", "에어맥스 90", "블레이저", "리액트", "페가수스"],
    },
    {
      label: '신발',
      lists: ['조던 신발', '러닝 신발', '농구 신발', '테니스 신발', '트레이닝 신발', 'Sale 신발'],
    },
    {
      label: '의류',
      lists: ['탑 & 티셔츠', '쇼츠', '후디 & 풀오버', '조거 & 스웻팬츠', '스포츠 브라', '팬츠 & 타이츠', '양말', '요가', 'NikeLab', 'Sale 의류'],
    },
    {
      label: 'Kids',
      lists: ['베이비 신발', '키즈 신발', '키즈 농구 신발', '키즈 조던 신발', '키즈 의류', '키즈 양말', 'Sale 키즈'],
    },
  ];

  // product All 이동 함수
  const handleNavigate = (productType) => {
    navigate(`/productAll/${productType}`);
  };

  // 모바일 서브 네비게이션바 오픈토글러 함수
  // 메뉴버튼을 클릭하면 해당 메뉴에 해당 인덱스 값이 설정되고
  // 나머지 메뉴들은 null 이 되도록 설정함
  // 메뉴를 두번 클릭하면 null이 되도록 설정
  const handleMobileNav = (mainMenu, index) => {
    setGender(mainMenu);
    setClickedMenuName(index === clickedMenuName ? null : index);
  };

  return (
    <>
      <div className='container'>
        <div className='mobile-bottom-menu-button-area'>
          {mobileMainMenu.map((item, idx) => (
            <div key={idx} onClick={() => handleMobileNav(item, idx)}>
              <button
                className='mobile-bottom-main-menu-btn'
                aria-controls="example-collapse-text"
                aria-expanded={idx === clickedMenuName}
              >
                {item}
              </button>
              <div>
                {/* collapse in={ true or false} 값만 남도록 해야함 그래야 collapse가 작동함 */}
                {/* true 인 collapse만 열리고 나머지는 false니까 닫힌 상태가 됨 */}
                <Collapse in={idx === clickedMenuName}>
                  <div id="example-collapse-text">
                    <ul>
                      {menuLists[clickedMenuName]?.lists?.map((subMenuList) => (
                        <li key={subMenuList} onClick={() => handleNavigate(subMenuList)}>{subMenuList}</li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileBottomMenu;
