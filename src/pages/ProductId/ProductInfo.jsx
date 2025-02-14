import { useState } from "react";
//
import profile from "../../assets/icons/myLogo.svg";
import * as S from "./ProductInfo.style";
import EditIcon from "../../assets/icons/Edit.Icon.svg";
import Tag from "../../components/Tag/Tag";
//
export default function ProductInfo({ info }) {
  const date = new Date(info.createdAt);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

  return (
    <S.ProductInfoWrapper>
      <S.ProductImgDiv>
        {info?.images && info.images.length > 0 ? (
          <img src={info.images} alt="Product" />
        ) : (
          <img alt="이미지가 없습니다." />
        )}
      </S.ProductImgDiv>
      <S.InfoProfileWrapper>
        <div>
          <S.TitleEditBtnWrapper>
            <S.TitlePriceWrapper>
              <S.ProductTitle>{info.name}</S.ProductTitle>
              <S.ProductPrice>{info.price}원</S.ProductPrice>
            </S.TitlePriceWrapper>
            <img src={EditIcon} alt="수정버튼" />
          </S.TitleEditBtnWrapper>
          <div>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품소개</S.DescriptionTitle>
              <div>{info.description}</div>
            </S.DesTitleContentWrapper>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품 태그</S.DescriptionTitle>
              <Tag value={info.tags[0]} />
            </S.DesTitleContentWrapper>
          </div>
        </div>
        <S.ProfileFavorite>
          <S.ProfileWrapper>
            <S.ProfileImg src={profile} alt="프로필이미지" />
            <div>
              <S.NickName>{info.ownerNickname}</S.NickName>
              <S.CreatedAt>{formattedDate}</S.CreatedAt>
            </div>
          </S.ProfileWrapper>
          <div>{info.favoriteCount}</div>
        </S.ProfileFavorite>
      </S.InfoProfileWrapper>
    </S.ProductInfoWrapper>
  );
}
