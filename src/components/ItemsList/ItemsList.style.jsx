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
      gridRow: "343px",
      height: "168px",
    },
    tablet: {
      gap: "40px 24px",
      gridTemplate: "repeat(3, 221px)",
      height: "221px",
    },
    desktop: {
      gap: "40px 24px",
      gridTemplate: "repeat(5, 221px)",
      height: "221px",
    },
  },
};
export const Title = styled.h4`
  font: ${theme.font.H7Medium};
  text-align: left;
  color: ${theme.color.gray800};
`;
export const Price = styled.div`
  font: ${theme.font.H5Bold};
  text-align: left;
  color: ${theme.color.gray800};
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const FavoriteCount = styled.span`
  color: ${theme.color.gray600};
  font: ${theme.font.H8};
  text-align: left;
`;

export const ProductImg = styled.img`
  aspect-ratio: 1/1;
  height: ${({ device, value }) => ByDevice[value][device].height || "auto"};
`;

export const ItemListStyle = styled.ul`
  margin: 24px auto;
  padding: 0px;
  display: grid;
  list-style: none;
  gap: ${({ device, value }) => ByDevice[value][device].gap};
  grid-template-columns: ${({ device, value }) =>
    ByDevice[value][device].gridTemplate};
  grid-auto-rows: ${({ value, device }) => ByDevice[value][device].gridRow};
`;

export const Item = styled.div`
  display: flex;
  height: 317px;
  flex-direction: column;
  gap: 16px;
`;
