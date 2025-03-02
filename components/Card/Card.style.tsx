import styled from "styled-components";
import theme from "@/styles/theme";
import Image from "next/image";
export const CardWrapper = styled.div`
  border: none;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
`;

export const Img = styled(Image)`
  width: 72px;
`;
