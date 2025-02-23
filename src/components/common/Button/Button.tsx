import * as S from "./Button.style";
import { ReactNode, MouseEvent } from "react";

//

interface Props extends S.ButtonProps {
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
  disabled?: boolean;
}
export default function Button({ onClick, children, ...props }: Props) {
  return (
    <>
      <S.Button onClick={onClick} {...props}>
        {children}
      </S.Button>
    </>
  );
}
