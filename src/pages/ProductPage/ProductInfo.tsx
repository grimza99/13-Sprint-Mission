import { useState, useEffect } from "react";
//
import profile from "../../assets/icons/default.profile.icon.svg";
//
import { getProductInfo, ProductInfo } from "../../api/product.api";
import * as S from "./ProductInfo.style";
import Tag from "../../components/Tag/Tag";
import BtnHeart from "../../components/common/BtnHeart/BtnHeart";
import { EditSelect } from "../../components/common/Select/Select";
import { useFormatDate, useFormatPrice } from "../../hooks/useFormatting";
//

export default function ProductInfo(productId: Params) {
  const [product, setProduct] = useState<ProductInfo>();
  const formattedDate = product
    ? useFormatDate(product.createdAt)
    : "날짜 없음";
  const formattedPrice = product
    ? useFormatPrice(product.price, "KRW")
    : "가격 없음";

  //
  const handleLoad = async () => {
    const info = await getProductInfo(productId);
    setProduct(info);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  const handleOnChange = () => {};
  return (
    <S.ProductInfoWrapper>
      {product?.images && product?.images?.length > 0 ? (
        <S.ImgDiv>
          <S.ProductImg src={product?.images[0]} alt="Product" />
        </S.ImgDiv>
      ) : (
        <S.ImgDiv>이미지가 없습니다.</S.ImgDiv>
      )}
      <S.InfoProfileWrapper>
        <S.InfoTagWrapper>
          <S.TitleEditBtnWrapper>
            <S.TitlePriceWrapper>
              <S.ProductTitle>
                {product?.name ?? "상품 이름 없음"}
              </S.ProductTitle>
              <S.ProductPrice>{formattedPrice}원</S.ProductPrice>
            </S.TitlePriceWrapper>
            <EditSelect onChange={handleOnChange} />
          </S.TitleEditBtnWrapper>
          <div>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품소개</S.DescriptionTitle>
              <S.ProductContent>
                {product?.description ?? "상품 설명 없음"}
              </S.ProductContent>
            </S.DesTitleContentWrapper>
            <S.DesTitleContentWrapper>
              <S.DescriptionTitle>상품 태그</S.DescriptionTitle>
              <Tag $product tags={product?.tags ?? []} />
            </S.DesTitleContentWrapper>
          </div>
        </S.InfoTagWrapper>
        <S.ProfileFavorite>
          <S.ProfileWrapper>
            <S.ProfileImg src={profile} alt="프로필이미지" />
            <div>
              <S.NickName>{product?.ownerNickname ?? "닉네임"}</S.NickName>
              <S.CreatedAt>{formattedDate}</S.CreatedAt>
            </div>
          </S.ProfileWrapper>
          <S.BorderLeft>
            <BtnHeart $small $border value={product?.favoriteCount ?? 0} />
          </S.BorderLeft>
        </S.ProfileFavorite>
      </S.InfoProfileWrapper>
    </S.ProductInfoWrapper>
  );
}
