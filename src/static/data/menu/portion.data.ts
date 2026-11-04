import type { FilterType } from "./filter.data";

export interface Portion {
  id: number;
  title: string;
  description: string;
  src: string;
  price: number;
  type: FilterType;
}

export const PORTIONS_DATA: Portion[] = [
  {
    id: 1,
    title: "Fritas P",
    description: "500g de batata",
    price: 25,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2Cy6tZl4Ubl4Qw0JuDauvwEjO0WhvpI9Ldi2twJppgDhbkTM3MpnSlA&s=10",
    type: "portion",
  },
  {
    id: 2,
    title: "Fritas G",
    description: "1Kg de batata",
    price: 40,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2Cy6tZl4Ubl4Qw0JuDauvwEjO0WhvpI9Ldi2twJppgDhbkTM3MpnSlA&s=10",
    type: "portion",
  },
  {
    id: 3,
    title: "Anéis de Cebola P",
    description: "500g de cebola",
    price: 35,
    src: "https://www.sabornamesa.com.br/media/k2/items/cache/e2dc343852dcc66e453f7f9901577ec5_XL.jpg",
    type: "portion",
  },
  {
    id: 4,
    title: "Anéis de Cebola G",
    description: "1Kg de cebola",
    price: 50,
    src: "https://www.sabornamesa.com.br/media/k2/items/cache/e2dc343852dcc66e453f7f9901577ec5_XL.jpg",
    type: "portion",
  },
  {
    id: 5,
    title: "Polenta Frita P",
    description: "500g de polenta",
    price: 25,
    src: "https://nacolher.com/wp-content/uploads/2023/01/polenta-frita.jpg",
    type: "portion",
  },
  {
    id: 6,
    title: "Polenta Frita G",
    description: "1Kg de polenta",
    price: 40,
    src: "https://nacolher.com/wp-content/uploads/2023/01/polenta-frita.jpg",
    type: "portion",
  },
];
