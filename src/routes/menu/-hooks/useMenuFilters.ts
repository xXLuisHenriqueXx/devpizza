import { useMemo, useState } from "react";

import type { FilterType } from "@/static/data/menu/filter.data";
import { ALL_DATA } from "@/static/data/menu/all.data";

export function useMenuFilters() {
  const [filter, setFilter] = useState<FilterType | null>(null);
  const [search, setSearch] = useState("");

  const selectFilter = (id: FilterType) => {
    setFilter((current) => (current === id ? null : id));
  };

  const clearSearch = () => setSearch("");

  const clearFilters = () => {
    setFilter(null);
    setSearch("");
  };

  const filteredData = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");

    return ALL_DATA.filter((item) => {
      const matchesFilter = filter === null || item.type === filter;

      const searchableText = [
        item.title,
        "description" in item ? item.description : "",
        "ingredients" in item ? item.ingredients : "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("pt-BR");

      return matchesFilter && searchableText.includes(normalizedSearch);
    });
  }, [filter, search]);

  return {
    filter,
    selectFilter,
    search,
    setSearch,
    filteredData,
    clearSearch,
    clearFilters,
  };
}
