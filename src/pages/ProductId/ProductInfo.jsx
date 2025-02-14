import EditIcon from "../../assets/icons/Edit.Icon.svg";
import Tag from "../../components/Tag/Tag";
export default function ProductInfo({ info }) {
  return (
    <div>
      <div>
        <img alt="상품 이미지" />
        <div>
          <div>
            <div>
              <div>
                <div>{info.name}</div>
                <div>{info.price}</div>
              </div>
              <img src={EditIcon} alt="수정버튼" />
            </div>
            <div>
              <p>상품소개</p>
              <div>{info.description}</div>
              <p>상품 태그</p>
              <Tag value={info.tags[0]} />
            </div>
          </div>
          <div>
            <div>
              <img alt="프로필이미지" />
              <div>
                <p>{info.nickname}</p>
                <p>{info.createdAt}</p>
              </div>
            </div>
            <div>{info.favoriteCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
