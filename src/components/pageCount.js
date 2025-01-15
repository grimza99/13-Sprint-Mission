import styled from "styled-components";

const PageBtn = styled.div`
  display: flex;
  gap: 4px;
  margin: 43px auto 58px;
  text-align: center;
  width: 304px;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #e5e7eb;
  opacity: 0px;
  color: #6b7280;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  background-color: #ffffff;
`;

function PageCount({ onClick }) {
  return (
    <PageBtn>
      <Btn value="previous" onClick={onClick}>
        전
      </Btn>
      <Btn value="1" onClick={onClick}>
        1
      </Btn>
      <Btn value="2" onClick={onClick}>
        2
      </Btn>
      <Btn value="3" onClick={onClick}>
        3
      </Btn>
      <Btn value="4" onClick={onClick}>
        4
      </Btn>
      <Btn value="5" onClick={onClick}>
        5
      </Btn>
      <Btn value="next" onClick={onClick}>
        후
      </Btn>
    </PageBtn>
  );
}
export default PageCount;
