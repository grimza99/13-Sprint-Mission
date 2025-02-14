import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
import ProductInfo from "./ProductInfo";
import Comments from "./Comments";
import * as S from "./Product.style";
import { getProductInfo } from "../../api/product.api";
import { getProductComments } from "../../api/comment.api";
//
export default function Product() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [comments, setComments] = useState({});

  const handleLoad = async () => {
    const info = await getProductInfo(productId);
    setProductInfo(info);
    const getComments = await getProductComments(productId);
    setComments(getComments);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <S.PageWrapper>
        <S.Contents>
          <ProductInfo info={productInfo} />
          <Comments data={comments} />
        </S.Contents>
      </S.PageWrapper>
    </>
  );
}
