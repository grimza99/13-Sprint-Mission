export {};

//전역 타입을 할 예정
declare global {
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  interface Window {
    myGlobalVar: string;
  }
}

//addItem
interface Form {
  img: string | File;
  name: string;
  content: string;
  price: number;
  tags: string[];
  [key: string]: string | File | number | string[];
}

//itemsPage
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: [string];
  ownerId: number;
  favoriteCount: number;
  createdAt: Date;
  updatedAt: Date;
}
//comment
interface Writer {
  image: string;
  nickname: string;
  id: number;
}

export interface Comment {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
//product
export interface Params {
  productId: string;
}
