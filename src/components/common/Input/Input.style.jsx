import styled, { css } from "styled-components";
import theme from "../../../style/theme";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 16px;
`;

export const Label = styled.label`
  width: 100%;
  height: 26px;
  font-size: 18px;
  color: ${theme.color.gray800};
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray100};
  font-size: 16px;
  font-weight: 400px;
  line-height: 26px;
  border-radius: 12px;
  color: ${theme.color.gray800};
  ::placeholder {
    color: ${theme.color.gray400};
    font-size: 16px;
    /* font: pretendard 16px r */
  }

  ${(props) =>
    props.$img &&
    css`
      width: 282px;
      height: 282px;
    `}
  ${(props) =>
    props.$normal &&
    css`
      height: 56px;
    `}
     ${(props) =>
    props.$textArea &&
    css`
      height: 282px;
    `}
`;

export const Plus = styled.img`
  width: 48px;
`;
