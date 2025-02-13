import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  overflow-x: none;
`;
export const Container = styled.div`
  width: 1200px;
  display: flex;
  gap: 29px;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 346px;
  }
  @media (min-width: none) and (max-width: 370px) {
    width: 696px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 42px;
  width: 100%;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;
export const ButtonContainer = styled.div`
  width: 74px;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TagInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
