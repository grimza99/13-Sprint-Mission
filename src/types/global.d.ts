export {};

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
  type onClick = (e: MouseEvent<HTMLButtonElement>) => void;
}
