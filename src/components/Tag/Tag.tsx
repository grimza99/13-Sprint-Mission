import DeleteButton from "../../assets/icons/DeleteIcon.svg";
import * as S from "./Tag.style";
//
interface Props extends S.StyledProps {
  tags: string[];
}
export default function Tag({ tags, ...props }: Props) {
  return (
    <S.TagsContainer {...props}>
      {tags?.length > 0 &&
        tags.map((tag) => {
          return (
            <S.Container key={tag}>
              <S.FlexContents>
                <S.Tag>#{tag}</S.Tag>
                {!props.$product && (
                  <S.DeleteButton tag={tag} src={DeleteButton} {...props} />
                )}
              </S.FlexContents>
            </S.Container>
          );
        })}
    </S.TagsContainer>
  );
}
