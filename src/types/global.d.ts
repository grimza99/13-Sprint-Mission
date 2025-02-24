export {};

//전역 타입을 할 예정
declare global {
  type Tag = string;

  interface Params {
    productId: string;
  }
  interface Device {
    device: string;
  }
  interface Product {
    name: string;
    price: number;
    tags: Tag[];
    images: [string];
    description: string;
    [key: string]: any;
    //원래 any 부분에 string| boolean| [string]|number 를 적었었는데,
    //유니온 타입에 이터러블이 아닌 값이 섞여있어서 includes랑 ...prev가 안되더라고요... ㅠㅠ
  }
  interface Writer {
    image: string;
    nickname: string;
    id: number;
  }
  interface Comment {
    writer: Writer;
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
  }
}

export interface Props {
  src: string;
}

//컴포넌트 부분

//commentCard
interface Props {
  data: Comment;
}

//btnheart

interface Props extends S.StyledProps {
  value: number;
  active?: boolean;
}
//button

interface Props extends S.ButtonProps {
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
  disabled?: boolean;
}

//input

interface Props extends S.StyleProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  name: string;
  tag?: boolean;
  value?: string;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "password" | "email";
}

interface ImgProps extends Omit<Props, "onChange"> {
  onChange: (value: File | string) => void;
}
//select

interface Props {
  onChange: (option: string) => void;
}
//itemlist
interface Prop {
  value: string;
  items: Item[];
}
interface ListItemProps {
  value: string;
  item: Item;
}

interface Props {
  value: string;
  $device: string;
}

//pageCount
interface Props extends S.StyleProps {
  onClick: (e: MouseEvent<HTMLButtonElement> | number) => void;
}
export interface StyleProps {
  page: number;
  value: number;
}
//tag

interface DeleteButtonProps {
  tag: Tag;
  onClick?: () => void;
}
interface Props extends S.StyledProps {
  tags: Tag[];
  onClick?: (tag: string) => void;
}
