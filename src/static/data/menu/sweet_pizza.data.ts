import type { FilterType } from "./filter.data";

export interface SweetPizza {
  id: number;
  title: string;
  ingredients: string;
  src: string;
  alt: string;
  type: FilterType;
}

export const SWEET_PIZZA_DATA: SweetPizza[] = [
  {
    id: 1,
    title: "Banana com Canela",
    ingredients: "Banana, Canela, Açúcar",
    src: "https://guiadacozinha.com.br/wp-content/uploads/2007/01/pizzadebananaecanela.jpg",
    alt: "Pizza de banana com canela",
    type: "pizza",
  },
  {
    id: 2,
    title: "Chocolate",
    ingredients: "Chocolate, Leite condensado",
    src: "https://cdn0.tudoreceitas.com/pt/posts/1/7/6/pizza_doce_de_chocolate_7671_600.jpg",
    alt: "Pizza de chocolate",
    type: "pizza",
  },
  {
    id: 3,
    title: "Morango com Nutella",
    ingredients: "Morango, Nutella",
    src: "https://www.sabornamesa.com.br/media/k2/items/cache/14985840dca330e3b808aa792fa422f9_XL.jpg",
    alt: "Pizza de morango com nutella",
    type: "pizza",
  },
  {
    id: 4,
    title: "Romeu e Julieta",
    ingredients: "Goiabada, Queijo Minas",
    src: "https://s2-receitas.glbimg.com/CzYYoU0C4Q2uy_ckO__di4UQGAw=/600x0/filters:quality(50)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/p/o/HAYVoDTMq8MZXt0P9qYQ/pizza-romeu-e-julieta.jpg",
    alt: "Pizza de romeu e julieta",
    type: "pizza",
  },
  {
    id: 5,
    title: "Prestígio",
    ingredients: "Chocolate, Coco",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziAGYqgj-9O3j3A_CLNQX2vkuBS-pSU63ZQ&s",
    alt: "Pizza de prestígio",
    type: "pizza",
  },
  {
    id: 6,
    title: "Banana com Nutella",
    ingredients: "Banana, Canela",
    src: "https://guiadacozinha.com.br/wp-content/uploads/2007/01/pizzadebananaecanela.jpg",
    alt: "Pizza de banana com canela",
    type: "pizza",
  },
];
