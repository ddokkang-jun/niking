import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  size: [
    240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310,
    320, 330,
  ],
  selectClothSize: "",
  menClothSize: ["S", "M", "L", "XL", "2XL"],
  womenClothSize: ["XS","S", "M", "L", "XL"],
  suggestValue: [],
  detailPageTabValue: 0,
  fadeValue: "",
  selectedSizeValue: 0,
  sizeSelectWarning: false,
  featuredShoes:[], // 추천 신발 캐러셀에 나오는 신발들
  mainNavbarMenuClicked: false,
  productSortWay: '',
  productAllPageNavbarTitle: '',
  productAllpageClickedData: [], // 상품전체페이지에서 클릭된 데이터
  choosedProductData: [], // 장바구니페이지에 등록되는 상품데이터
  searchInputValue: "",
  mobileOffcanvasIsClose: false, // 모바일에서 오프캔버스offcanvas 의 state
  productAllData: [], // Home 컴포넌트에서 db.json를 호출 받아오는 state
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    setSuggestShoes: (state, action) => {
      state.suggestValue = action.payload;
    },
    setdetailPageTabValue: (state, action) => {
      state.detailPageTabValue = action.payload;
    },
    setFade: (state, action) => {
      state.fadeValue = action.payload;
    },
    setSelectProductSize: (state, action) => {
      state.selectedSizeValue = action.payload;
    },
    setSizeSelectWarning: (state, action) => {
      state.sizeSelectWarning = action.payload;
    },
    setMainNavbarMenuClicked: (state, action) => {
      state.mainNavbarMenuClicked = action.payload;
    },
    setProductSortWay: (state, action) => {
      state.productSortWay = action.payload;
    },
    setProductAllPageNavbarTitle: (state, action) => {
      state.productAllPageNavbarTitle = action.payload;
    }, 
    setFeaturedShoes: (state, action) => {
      state.featuredShoes = action.payload;
    },
    setProductAllPageClickedData: (state, action) => {
      state.productAllpageClickedData = action.payload;
    },
    setSelectClothSize: (state, action) => {
      state.selectClothSize = action.payload;
    },
    // 장바구니페이지에 등록되는 상품데이터
    setChoosedProductData: (state, action) => {
      state.choosedProductData.push({
        data: action.payload[0],
        size: action.payload[1],
        count: action.payload[2],
      });
    },
    // 장바구니페이지의 삭제버튼
    setDeleteData: (state, action) => {
      const newData = state.choosedProductData.filter(item => item.data.id !== action.payload);
      return { ...state, choosedProductData: newData };
    },
    // 장바구니추가버튼이 클릭될때 중복된 제품의 카운트를 +1 , 가격도 증가함
    setCountPlus: (state, action) => {
      const newData = state.choosedProductData.map((item) => {
        if (item.data.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,                              // count + 1
            data: {
              ...item.data,
              price: item.data.price + item.data.price,         // 가격을 증가(한번만 더함)
            },
          };
        }
        return item;
      });
      return { ...state, choosedProductData: newData };
    },
    setChangeSize: (state, action) => {
      // console.log(action.payload[0], action.payload[1].data.id );
      const newData = state.choosedProductData.map((item) => {
        if (item.data.id === action.payload[1].data.id) {
          return {
            ...item,
            size: action.payload[0],
          };
        }
        return item;
      });
      return { ...state, choosedProductData: newData };
    },
    setChangeCount: (state, action) => {
      const productId = action.payload[1].data.id;
      const countNum = parseInt(action.payload[0]);

      // choosedProductData에서 해당 제품을 찾아서 가격을 변경합니다.
      const newData = state.choosedProductData.map((item) => {
        if (item.data.id === productId) {
          const previousPrice = item.data.price / item.count; // 이전 가격 계산
          const newPrice = previousPrice * countNum; // 이전 가격에 변화를 적용하여 새로운 가격 계산
          return {
            ...item,
            data: {
              ...item.data,
              price: newPrice,
            },
            count: countNum,
          };
        }
        return item;
      });

      return {
        ...state,
        choosedProductData: newData,
      };
    },
    setSearchInputValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    setMobileOffcanvasIsClose: (state, action) => {
      state.mobileOffcanvasIsClose = action.payload;
    },
    setProductAllData: (state, action) => {
      state.productAllData = action.payload;
    },
  },
});

export const { setProducts, setSuggestShoes, setdetailPageTabValue, setFade, setSelectProductSize, setSizeSelectWarning, setMenShoes, setMenCloth, setWomenShoes, setWomenCloth, setKidsShoes, setKidsCloth, setMainNavbarMenuClicked, setProductSortWay, setProductAllPageNavbarTitle, setPromotionAirMax, setPromotionLeggings, setPromotionNewzins, setPromotionSportsBra, setTrendingWomenEssentialEdition, setFeaturedShoes, setProductAllPageClickedData, setSelectClothSize, setChoosedProductData, setDeleteData, setCountPlus, setChangeSize, setChangeCount, setSearchInputValue, setPegasus, setMobileOffcanvasIsClose, setProductAllData } = productSlice.actions;
export default productSlice.reducer;
