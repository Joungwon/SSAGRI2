import { styled } from 'styled-components';
import {
  Search02,
  SearchInput02,
  SearchButton,
  SearchImg,
  ProductList02,
  ProductStyle02,
  ProductImgStyle02,
  ProductDetailStyle02,
  ProductName02,
  ProductPrice02,
  SellerLocationAndTime02
} from '../components/tradeMainPage.styles';

// Header 제외 중고거래 컴포넌트
const TradeListFrameDiv = styled.div`
  width: 1920px;
  /* height: 100vh; */
  margin-top: 7vh;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TradeMainFrameDiv의 가운데 부분. 여기에 지도와 거래 main 내용이 들어감
const TradeListDiv = styled.div`
  width: 80%;
  /* height: 80%; */
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CategorySpace = styled.div`
  width: 70%;
  height: 140px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid orange; */
`;

const CategoryName = styled.div`
  width: 300px;
  height: 70px;
  font-size: 36px;
  text-decoration: underline;
  text-align: center;
  line-height: 70px;
`;

const CategoryList = styled.div`
  width: 1300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryItem = styled.div`
  width: 140px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  text-decoration: underline;
  &:hover {
    color: #4786fa;
    font-weight: bold;
  }
`;

const SearchSpace = styled.div`
  width: 70%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid green; */
`;

//SearchSpace 안의 정렬선택창
const SearchOrder = styled.select`
  width: 100px;
  height: 30px;
  margin-right: 12%;
  border: 1px solid #4786fa;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
`;

const SearchDiv = () => {
  return (
    <Search02>
      <SearchInput02
        type='text'
        placeholder='원하는 제품을 검색해 보세요!'
      ></SearchInput02>
      <SearchButton>
        <SearchImg src='/assets/img/searchGlass-4786fa.png'></SearchImg>
      </SearchButton>
    </Search02>
  );
};

// 상품목록
const ProductList = styled.div`
  width: 70%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 페이징
const PagingSpace = styled.div`
  width: 50%;
  height: 50px;
  margin: 50px 0px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagingButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  border: 1px solid #4786fa;
  border-radius: 5px;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    border: 2px solid #4786fa;
    background-color: #4786fa;
    color: #fff;
  }
`;

const TradeList = () => {
  return (
    <TradeListFrameDiv>
      <TradeListDiv>
        <CategorySpace>
          <CategoryName>카테고리</CategoryName>
          <CategoryList>
            <CategoryItem>전체</CategoryItem>
            <CategoryItem>모니터</CategoryItem>
            <CategoryItem>키보드</CategoryItem>
            <CategoryItem>마우스</CategoryItem>
            <CategoryItem>생활용품</CategoryItem>
            <CategoryItem>기타용품</CategoryItem>
          </CategoryList>
        </CategorySpace>
        <SearchSpace>
          <SearchDiv></SearchDiv>
          <SearchOrder>
            <option value='링크1'>인기순</option>
            <option value='링크1'>최신순</option>
            <option value='링크2'>가격순</option>
          </SearchOrder>
        </SearchSpace>
        <ProductList>
          <ProductList02>
            <ProductStyle02>
              <ProductImgStyle02 src='/assets/img/zeuslab.jpg'></ProductImgStyle02>
              <ProductDetailStyle02>
                <ProductName02>제우스랩 포터블 모니터 Z16 Pro</ProductName02>
                <ProductPrice02>130,000 원</ProductPrice02>
                <SellerLocationAndTime02>
                  온천2동 | 10분 전
                </SellerLocationAndTime02>
              </ProductDetailStyle02>
            </ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>

            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>

            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>

            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>

            <ProductStyle02></ProductStyle02>
            <ProductStyle02></ProductStyle02>
          </ProductList02>
        </ProductList>
        <PagingSpace>
          <PagingButton>&lt;&lt;</PagingButton>
          <PagingButton>&lt;</PagingButton>
          <PagingButton>1</PagingButton>
          <PagingButton>2</PagingButton>
          <PagingButton>3</PagingButton>
          <PagingButton>4</PagingButton>
          <PagingButton>5</PagingButton>
          <PagingButton>6</PagingButton>
          <PagingButton>7</PagingButton>
          <PagingButton>8</PagingButton>
          <PagingButton>9</PagingButton>
          <PagingButton>10</PagingButton>
          <PagingButton>&gt;</PagingButton>
          <PagingButton>&gt;&gt;</PagingButton>
        </PagingSpace>
      </TradeListDiv>
    </TradeListFrameDiv>
  );
};

export { TradeList };