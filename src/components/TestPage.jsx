/// 컴포넌트 테스트 페이지 완료후 삭제 예정

// import Button from "./common/Button/Button";
import BtnHeart from "./common/BtnHeart/BtnHeart";
// import { Input } from "./common/Input/Input";
export default function TestPage() {
  return (
    <>
      <BtnHeart value="100" active={false} small />
      <BtnHeart value="100" active={false} />
    </>
  );
}
