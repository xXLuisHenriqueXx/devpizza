import type { FilterType } from "@/static/data/menu/filter.data";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  src: string;
  type: FilterType;
}
