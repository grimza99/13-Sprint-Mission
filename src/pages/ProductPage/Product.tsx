import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
import ProductInfo from "./ProductInfo";
import Comments from "./Comments";
import * as S from "./Product.style";
//
interface Params {
  productId: string;
}
export default function Product() {
  const { productId } = useParams<Params>();
  if (!productId) {
    alert("페이지를 찾을 수 없습니다. 다시 시도해 주세요");
  }
  return (
    <>
      <S.PageWrapper>
        <S.ContentsWrapper>
          <S.Contents>
            <ProductInfo productId={productId!} />
            <Comments productId={productId!} />
          </S.Contents>
        </S.ContentsWrapper>
      </S.PageWrapper>
    </>
  );
}
