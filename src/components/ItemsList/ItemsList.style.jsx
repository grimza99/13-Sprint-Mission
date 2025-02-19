import styled from "styled-components";
import theme from "../../style/theme";
const ByDevice = {
  best: {
    mobile: {
      gap: "none",
      gridTemplate: "repeat(1, 343px)",
      gridRow: "434px",
      height: "343px",
    },
    tablet: {
      gap: "10px",
      gridTemplate: "repeat(3, 343px)",
      gridRow: "434px",
      height: "343px",
    },
    desktop: {
      gap: "24px",
      gridTemplate: "repeat(4, 282px)",
      gridRow: "378px",
      height: "282px",
    },
  },
  products: {
    mobile: {
      gap: "32px 8px",
      gridTemplate: "repeat(2, 168px)",
      gridRow: "264px",
      height: "168px",
    },
    tablet: {
      gap: "40px 24px",
      gridTemplate: "repeat(3, 221px)",
      height: "221px",
      gridRow: "317px",
    },
    desktop: {
      gap: "40px 24px",
      gridTemplate: "repeat(5, 221px)",
      height: "221px",
      gridRow: "317px",
    },
  },
};
export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProductImg = styled.img`
  aspect-ratio: 1/1;
  height: ${({ $device, value }) => ByDevice[value][$device].height || "auto"};
`;

export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Title = styled.h4`
  font: ${theme.font.H7Medium};
  text-align: left;
  color: ${theme.color.gray800};
`;
export const Price = styled.div`
  font: ${theme.font.H5Bold};
  text-align: left;
  color: ${theme.color.gray800};
`;

export const ItemListStyle = styled.div`
  margin: 24px auto;
  display: grid;
  gap: ${({ $device, value }) => ByDevice[value][$device].gap};
  grid-template-columns: ${({ $device, value }) =>
    ByDevice[value][$device].gridTemplate};
  grid-auto-rows: ${({ value, $device }) => ByDevice[value][$device].gridRow};
`;
