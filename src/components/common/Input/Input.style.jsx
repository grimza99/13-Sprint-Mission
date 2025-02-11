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
  padding: 24px;
  ::placeholder {
    color: ${theme.color.gray400};
    line-height: normal;
    font-size: 16px;
    text-align: left;
    /* font: pretendard 16px r */
  }

  ${(props) =>
    props.$normal &&
    css`
      height: 56px;
    `}
  ${(props) =>
    props.$textArea &&
    css`
      padding-top: 24px;
      height: 282px;
    `}
`;

export const ImgInputTag = styled.input`
  z-index: -1;
  display: none;
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
  }
`;

export const ImgInput = styled.div`
  width: 282px;
  height: 282px;
  color: ${theme.color.gray800};
  background-color: ${theme.color.gray100};
  border-radius: 12px;
  position: relative;
  border: none;
`;
export const PlusLabelContainer = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.color.gray400};
  line-height: normal;
  font-size: 16px;
  text-align: center;
`;
export const PlusIcon = styled.img`
  width: 48px;
`;
export const ImgInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
export const PreviewImg = styled.img`
  width: 282px;
  height: 282px;
`;

export const ImgPreviewWrapper = styled.div`
  position: relative;
`;
export const DeleteImg = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;
