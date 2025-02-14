import { useState, useEffect } from "react";
//
import { getProductInfo } from "../../api/product.api";

import profile from "../../assets/icons/myLogo.svg";
import * as S from "./ProductInfo.style";
import EditIcon from "../../assets/icons/Edit.Icon.svg";
import Tag from "../../components/Tag/Tag";
//

export default function ProductInfo({ productId }) {
  const [product, setProduct] = useState({});

  const handleLoad = async () => {
    const info = await getProductInfo(productId);
    setProduct(info);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  const date = new Date(product.createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  console.log(product);
  return (
    <S.ProductInfoWrapper>
      <S.ProductImgDiv>
        {product?.images && product?.images?.length > 0 ? (
          <img src={product.images} alt="Product" />
        ) : (
          <img alt="이미지가 없습니다." />
        )}
      </S.ProductImgDiv>
      <S.InfoProfileWrapper>
        <div>
          <S.TitleEditBtnWrapper>
            <S.TitlePriceWrapper>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductPrice>{product.price}원</S.ProductPrice>
            </S.TitlePriceWrapper>
            <img src={EditIcon} alt="수정버튼" />
          </S.TitleEditBtnWrapper>
          <div>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품소개</S.DescriptionTitle>
              <div>{product.description}</div>
            </S.DesTitleContentWrapper>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품 태그</S.DescriptionTitle>
              <Tag />
            </S.DesTitleContentWrapper>
          </div>
        </div>
        <S.ProfileFavorite>
          <S.ProfileWrapper>
            <S.ProfileImg src={profile} alt="프로필이미지" />
            <div>
              <S.NickName>{product.ownerNickname}</S.NickName>
              <S.CreatedAt>{formattedDate}</S.CreatedAt>
            </div>
          </S.ProfileWrapper>
          <div>{product.favoriteCount}</div>
        </S.ProfileFavorite>
      </S.InfoProfileWrapper>
    </S.ProductInfoWrapper>
  );
}
