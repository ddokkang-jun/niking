import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClothSizeButton from '../Component/ClothSizeButton';
import DetailTab from '../Component/DetailTab';
import ShoesSizeButton from '../Component/ShoesSizeButton';
import { setFade } from '../Store/productSlice';

const ProductsDetails = () => {
  let data = useSelector((state) => state.product.productAllpageClickedData);
  let fade = useSelector((state) => state.product.fadeValue);
  let selectedSize = useSelector((state) => state.product.selectedSizeValue);
  let selectClothSize = useSelector((state) => state.product.selectClothSize);
  let dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  }, [selectedSize, selectClothSize]);

  // 페이지 페이드 이펙트
  useEffect(() => {
    setTimeout(() => {
      dispatch(setFade("fadeEnd"));
    }, 100);

    return () => {
      dispatch(setFade(""));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='mainContainer'>
      <div className={"container fadeStart " + fade}>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              {data.detailImageAddress.map((image, index) => (
                <div key={index} className='col-md-6'>
                  <div className='card productDetailImage' data-img={`${index}`}> 
                    <img src={image} alt={`${data.title}-${index}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-4 detail-right-area'>
            <div className='detail-description-area'>
              {data.eco === true ? <span className='eco-true-text'>친환경소재</span> : ""}
              <h3 className='detail-title'>{data.title}</h3>
              <p className='detatail-content'>{data.content}</p>
              <h5 className='detail-price'>{data.price / 1000},000원</h5>
            </div>
            {data.productType === "shoes" ? <ShoesSizeButton data={data} /> : <ClothSizeButton data={data} />}
            {data.eco === true ? <div className='eco-true-description'>{data.ecodescription}</div> : ""}
            <div className='detail-description'>{data.description}</div>
          </div>
        </div>
        <div className='row'>
          <DetailTab />
        </div>
      </div>
    </div>
    
  )
}

export default ProductsDetails;
