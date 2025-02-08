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
  font-weight: 700;
  line-height: 26px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${theme.color.gray100};
  font-size: 16px;
  font-weight: 400px;
  line-height: 26px;
  border-radius: 12px;
  border: none;
  color: ${theme.color.gray800};
  position: relative;
  ::placeholder {
    color: ${theme.color.gray400};
    line-height: normal;
    font-size: 16px;
    text-align: left;
    position: absolute;
    top: 10px;
    /* font: pretendard 16px r */
  }

  ${(props) =>
    props.$img &&
    css`
      width: 282px;
      height: 282px;

    ::placeholder {
      color: ${theme.color.gray400};
      line-height: normal;
      font-size: 16px;
      text-align: center;
      justify-content: center;
    `}
  ${(props) =>
    props.$normal &&
    css`
      height: 56px;
    `}
     ${(props) =>
    props.$textArea &&
    css`
      padding-top: 20px;
      height: 282px;
    `}
`;

export const Plus = styled.img`
  width: 48px;
`;
