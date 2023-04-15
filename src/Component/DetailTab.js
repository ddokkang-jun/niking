import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { setdetailPageTabValue, setFade } from "../Store/productSlice";
import AsInfo from './AsInfo';
import FreeDelivery from './FreeDelivery';
import AdditionInfo from './AdditionInfo';

const DetailTab = () => {
  let dispatch = useDispatch();
  let tabValue = useSelector((state) => state.product.detailPageTabValue);
  let fade = useSelector((state) => state.product.fadeValue);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setFade("fadeEnd"));
    }, 100);
    return () => {
      dispatch(setFade(""));
    };
  }, []);

  return (
    <div className='container'>
      <Nav fill variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link-0'
            onClick={() => {
              dispatch(setdetailPageTabValue(0));
            }}>
            무료 배송
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              dispatch(setdetailPageTabValue(1));
            }}>
            A/S 안내
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-2'
            onClick={() => {
              dispatch(setdetailPageTabValue(2));
            }}>
            추가 정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={"detailPage-tab fadeStart " + fade}>
        {
          [
            <FreeDelivery />,
            <AsInfo />,
            <AdditionInfo />
          ][tabValue]
        }
      </div>
    </div>
  );
};

export default DetailTab;
