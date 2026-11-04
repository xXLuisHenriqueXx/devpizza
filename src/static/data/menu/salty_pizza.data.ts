import type { FilterType } from "./filter.data";

export interface SaltyPizza {
  id: number;
  title: string;
  ingredients: string;
  src: string;
  alt: string;
  type: FilterType;
}

export const SALTY_PIZZA_DATA: SaltyPizza[] = [
  {
    id: 1,
    title: "Frango",
    ingredients: "Molho de tomate, Mussarela, Frango, Cebola, Azeitonas",
    src: "https://sabores-new.s3.amazonaws.com/public/2024/11/pizza-de-frango-1.jpg",
    alt: "Pizza de frango",
    type: "pizza",
  },
  {
    id: 2,
    title: "Marguerita",
    ingredients: "Molho de tomate, Mussarela, Manjericão",
    src: "https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167.jpg",
    alt: "Pizza de margherita",
    type: "pizza",
  },
  {
    id: 3,
    title: "Pepperoni",
    ingredients: "Molho de tomate, Mussarela, Pepperoni",
    src: "https://www.seara.com.br/wp-content/uploads/2025/09/pizza-de-pepperoni-caseira-portal-minha-receita.jpg",
    alt: "Pizza de pepperoni",
    type: "pizza",
  },
  {
    id: 4,
    title: "Quatro Queijos",
    ingredients: "Molho de tomate, Mussarela, Parmesão, Gorgonzola, Provolone",
    src: "https://www.portalumami.com.br/app/uploads/2021/07/Pizza-4-queijos.jpg",
    alt: "Pizza de quatro queijos",
    type: "pizza",
  },
  {
    id: 5,
    title: "Portuguesa",
    ingredients:
      "Molho de tomate, Mussarela, Presunto, Ovos, Cebola, Azeitonas",
    src: "https://www.ogastronomo.com.br/upload/389528334-curiosidades-sobre-a-pizza-portuguesa.jpg",
    alt: "Pizza de portuguesa",
    type: "pizza",
  },
  {
    id: 6,
    title: "Calabresa",
    ingredients: "Molho de tomate, Mussarela, Calabresa, Cebola",
    src: "https://cantinagiovannifreddo.com.br/wp-content/uploads/2023/09/PIZZA-DE-CALABRESA.webp",
    alt: "Pizza de calabresa",
    type: "pizza",
  },
  {
    id: 7,
    title: "Frango com Catupiry",
    ingredients: "Molho de tomate, Mussarela, Frango, Catupiry",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHL3JxCMdVdMt2vKZMF-7h_y2okCIfasDsDQ&s",
    alt: "Pizza de frango com catupiry",
    type: "pizza",
  },
  {
    id: 8,
    title: "Brócolis com Bacon",
    ingredients: "Molho de tomate, Mussarela, Brócolis, Bacon",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUmYQZLp1iTV6CIegNXtyHlpB20O-g16Jtoi1mAU6ap1ssfkpUxfsrFzuyibr8hKi7FE&usqp=CAU",
    alt: "Pizza de brócolis com bacon",
    type: "pizza",
  },
  {
    id: 9,
    title: "Atum",
    ingredients: "Molho de tomate, Mussarela, Atum, Cebola, Azeitonas",
    src: "https://www.ogastronomo.com.br/upload/384288321-pizza-de-atum.jpg",
    alt: "Pizza de atum",
    type: "pizza",
  },
  {
    id: 10,
    title: "Bacon",
    ingredients: "Molho de tomate, Mussarela, Bacon, Cebola",
    src: "https://www.seara.com.br/wp-content/uploads/2025/09/pizza-de-bacon-portal-minha-receita.jpg",
    alt: "Pizza de bacon",
    type: "pizza",
  },
];
