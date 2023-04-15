function saleFilter(data, value1, value2) {
  // 데이터 필터링 로직
  let filteredData;
  
  // Sale 신발, Sale 의류, Sale 키즈
  if (value1 === "sale" && value2 === undefined) {
    filteredData = data.filter((item) => {
      return item.sale === true;
    });
  } else if (value1 === "Sale 신발" && value2 === undefined) {
    filteredData = data.filter((item) => {
      return item.sale === true && item.productType === "신발";
    });
  } else if (value1 === "Sale 의류" && value2 === undefined) {
    filteredData = data.filter((item) => {
      return item.sale === true && item.productType === "의류";
    });
  } else if (value1 === "Sale 키즈" && value2 === undefined) {
    filteredData = data.filter((item) => {
      return item.sale === true && item.gender === "kids";
    });
  } else if (value1 === "sale" && value2 === "Mens Sale") {
    filteredData = data.filter((item) => {
      return item.gender === "men" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "남성 신발") {
    filteredData = data.filter((item) => {
      return item.gender === "men" && item.content === "남성 신발" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "남성 의류") {
    filteredData = data.filter((item) => {
      return item.gender === "men" && item.productType === "의류" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "남성 전체보기") {
    filteredData = data.filter((item) => {
      return item.gender === "men" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "Womens Sale") {
    filteredData = data.filter((item) => {
      return item.gender === "women" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "여성 신발") {
    filteredData = data.filter((item) => {
      return item.gender === "women" && item.content === "여성 신발" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "여성 의류") {
    filteredData = data.filter((item) => {
      return item.gender === "women" && item.productType === "의류" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "여성 전체보기") {
    filteredData = data.filter((item) => {
      return item.gender === "women" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "Kids Sale") {
    filteredData = data.filter((item) => {
      return item.gender === "kids" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "kids 신발") {
    filteredData = data.filter((item) => {
      return item.gender === "kids" && item.productType === "신발" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "kids 의류") {
    filteredData = data.filter((item) => {
      return item.gender === "kids" && item.productType === "의류" && item.sale === true;
    });
  } else if (value1 === "sale" && value2 === "kids 전체보기") {
    filteredData = data.filter((item) => {
      return item.gender === "kids" && item.sale === true;
    });
  } else {
    console.log("해당되는 데이터가 없음.");
  }

  return filteredData;
}

export default saleFilter;