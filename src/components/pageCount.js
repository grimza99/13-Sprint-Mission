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
  background-color: ${({ page, value }) =>
    page === value ? "#2f80ed" : "#ffffff"};
  &:active {
    background-color: #2f80ed;
    color: #f9fafb;
  }

  &:hover {
    background-color: #2f80ed;
    color: #f9fafb;
  }
`;

export function PageButton({ page, value, onClick }) {
  return (
    <Btn value={value} onClick={onClick} page={page}>
      {value}
    </Btn>
  );
}
function PageCount({ page, value, onClick }) {
  const BtnArray = [1, 2, 3, 4, 5];
  const handleClickBtn = (e) => {
    const currentPage = e.target.value;
    onClick(currentPage);
  };

  return (
    <PageBtn>
      {BtnArray.map((btn) => {
        return (
          <li style={{ listStyle: "none" }}>
            <PageButton onClick={handleClickBtn} value={btn} page={page} />
          </li>
        );
      })}
    </PageBtn>
  );
}
export default PageCount;
