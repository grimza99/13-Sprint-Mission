import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";

const device = useWindowSize;

export const Contents = styled.div`
  width: 100%;
`;

export const Logo = styled.img`
  width: ${({ $device }) => ($device === "mobile" ? "103px" : "153px")};
`;
