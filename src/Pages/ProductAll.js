import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductAllNavbar from '../Component/ProductAllNavbar';
import ProductAllPageProductCard from '../Component/ProductAllPageProductCard';
import { setFade, setProductSortWay } from '../Store/productSlice';
import saleFilter from '../Function/saleFilter';

// 에러 수정할것 :
// 메인홈 페이지에서 하단부분에 신발캐러셀부분을 클릭하고 디테일페이지로 이동하면 그페이지에서 새로고침 에러 수정하기

const ProductAll = ({ data }) => {
  const copyData = [...data];
  const { firstValue, secondValue } = useParams();
  let [showData, setShowData] = useState([]);
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();
  let fade = useSelector((state) => state.product.fadeValue);
  let productSortWay = useSelector((state) => state.product.productSortWay);

  // Fisher-Yates shuffle 알고리즘 : 배열의 요소를 무작위로 섞을 수 있습니다.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // 가격순대로 정렬하는 함수
  const sortShowProductData = () => {
    let copyShowData = [...showData];
    if (productSortWay === 'high') {
      copyShowData = copyShowData.sort((a, b) => b.price - a.price);
      setShowData(copyShowData);
    } else if (productSortWay === 'low') {
      copyShowData = copyShowData.sort((a, b) => a.price - b.price);
      setShowData(copyShowData);
    };
  };

  // 필터링 할게 1개인 경우
  const singleValueFilter = (dataObject, value) => {
    let resultArray = dataObject.filter((item) => {
      return item.type === value;
    });

    if (resultArray.length === 0) {
      resultArray = dataObject.filter((item) => {
        return item.title.includes(value) || item.content.includes(value);
      });
    }

    if (resultArray.length === 0) {
      resultArray = dataObject.filter((item) => {
        return item.gender === value;
      });
    }

    if (value.includes("Sale")) {
      return saleFilter(dataObject, value);
    }

    return resultArray;
  };

  // 필터링 할게 2개인 경우
  const doubleValueFilter = (data, value1, value2) => {
    let result = data.filter((item) => {
      return item.gender === value1 && item.type.includes(value2);
    });

    if (result.length === 0) {
      result = data.filter((item) => {
        return item.gender === value1 && item.productType === value2;
      });
    }

    return result;
  };


  // 메뉴를 클릭하면 메뉴에 맞는 함수를 호출하는 함수
  const filterData = (data, fValue, sValue) => {

    // 세일함수 호출
    if (fValue === "sale" || fValue.includes("sale")) {
      return saleFilter(data, fValue, sValue);
    }

    // 매개변수가 하나인 경우 
    if (fValue !== undefined && sValue === undefined) {
      return singleValueFilter(data, fValue);
    }

    // 매개변수가 2개인 경우
    if (fValue !== undefined && sValue !== undefined) {
      return doubleValueFilter(data, fValue, sValue);
    }
  };


  // 상품 필터링
  useEffect(() => {
    let result = filterData(copyData, firstValue, secondValue);
    setShowData(result);
    setCount(result.length);

  }, [firstValue, secondValue]);


  // 가격드롭다운. 리셋기능도 있음.
  useEffect(() => {
    if (productSortWay !== '') {
      sortShowProductData();
    }
    return () => {
      dispatch(setProductSortWay(''));
    }
  }, [productSortWay]);


  // 페이지가 새로 이동 되면 자동으로 최상단으로 이동해서 보여주게 함
  useEffect(() => {
    window.scroll(0, 0);
    setTimeout(() => {
      dispatch(setFade("fadeEnd"));
    }, 100);

    return () => {
      dispatch(setFade(""));
    };
    // eslint-disable-next-line
  }, [showData]);


  return (
    <div className={`product-all-main-container fadeStart ` + fade}>
      <ProductAllNavbar firstValue={firstValue} secondValue={secondValue} count={count} />
      <div className='container product-all-container'>
        <Row>
          {showData.map((item, index) => (
            <Col md={4} xs={6} key={index} className='product-all-page-col-css'>
              <ProductAllPageProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ProductAll;
