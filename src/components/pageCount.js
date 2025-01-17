import { useState } from "react";
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

  &:active {
    background-color: #2f80ed;
    color: #f9fafb;
  }
`;

const SelectBtn = styled.button`
  background-color: #2f80ed;
  color: #f9fafb;
`;

function PageCount({ value, onClick }) {
  const [className, setClassName] = useState(Btn);

  const handleClickBtn = (e) => {
    const currentPage = e.target.value;
    setClassName(SelectBtn);
    onClick(currentPage);
  };

  return (
    <PageBtn>
      <Btn value="previous" onClick={handleClickBtn}>
        전
      </Btn>
      <Btn value="1" onClick={handleClickBtn}>
        1
      </Btn>
      <button className={className} value="2" onClick={handleClickBtn}>
        2
      </button>
      <Btn value="3" onClick={handleClickBtn}>
        3
      </Btn>
      <Btn value="4" onClick={handleClickBtn}>
        4
      </Btn>
      <Btn value="5" onClick={handleClickBtn}>
        5
      </Btn>
      <Btn value="next" onClick={handleClickBtn}>
        후
      </Btn>
    </PageBtn>
  );
}
export default PageCount;
