import Small from "@/assets/sizes/small_pizza.png";
import Medium from "@/assets/sizes/medium_pizza.png";
import Big from "@/assets/sizes/big_pizza.png";
import type { FilterType } from "./filter.data";

export interface Size {
  id: string;
  title: string;
  slices: string;
  maxFlavors: number;
  price: number;
  src: string;
  type: FilterType;
}

export const SIZES_DATA: Size[] = [
  {
    id: "small",
    title: "Broto",
    slices: "4 fatias",
    maxFlavors: 1,
    price: 30,
    src: Small,
    type: "pizza",
  },
  {
    id: "medium",
    title: "Média",
    slices: "8 fatias",
    maxFlavors: 2,
    price: 65,
    src: Medium,
    type: "pizza",
  },
  {
    id: "big",
    title: "Grande",
    slices: "12 fatias",
    maxFlavors: 3,
    price: 80,
    src: Big,
    type: "pizza",
  },
  {
    id: "giant",
    title: "Gigante",
    slices: "16 fatias",
    maxFlavors: 4,
    price: 100,
    src: Big,
    type: "pizza",
  },
];
