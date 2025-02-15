import DeleteButton from "../../assets/icons/DeleteIcon.svg";
import * as S from "./Tag.style";
export default function Tag({ tags, ...props }) {
  const { onClick, ...rest } = props;
  return (
    <S.TagsContainer>
      {tags?.length > 0 &&
        tags.map((tag) => {
          return (
            <S.Container key={tag}>
              <S.FlexContents>
                <S.Tag>#{tag}</S.Tag>
                <S.DeleteButton
                  tag={tag}
                  onClick={() => onClick(tag)}
                  src={DeleteButton}
                  {...rest}
                />
              </S.FlexContents>
            </S.Container>
          );
        })}
    </S.TagsContainer>
  );
}
{
  /* 
              {formData.tags &&
                formData.tags.map((tag) => {
                  return (
                    <div key={tag}>
                      <Tag value={tag} onClick={handleClickTagDelete} />
                    </div>
                  );
                })}
            */
}
