import {
  CupSoda,
  Hamburger,
  Pizza,
  Salad,
  type LucideIcon,
} from "lucide-react";

export type FilterType = "pizza" | "burger" | "portion" | "drink";

export interface Filter {
  id: FilterType;
  title: string;
  icon: LucideIcon;
  requiresSize: boolean;
}

export const FILTERS_DATA: Filter[] = [
  { id: "pizza", title: "Pizzas", icon: Pizza, requiresSize: true },
  { id: "burger", title: "Xis", icon: Hamburger, requiresSize: false },
  { id: "portion", title: "Porções", icon: Salad, requiresSize: false },
  { id: "drink", title: "Bebidas", icon: CupSoda, requiresSize: false },
];
