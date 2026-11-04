import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Filters } from "./-components/Filters";
import { Sizes } from "./-components/Sizes";
import { Burgers } from "./-components/Burgers";
import { Portions } from "./-components/Portions";
import { Drinks } from "./-components/Drinks";

import { useMenuFilters } from "./-hooks/useMenuFilters";
import { FILTERS_DATA } from "@/static/data/menu/filter.data";
import { SIZES_DATA } from "@/static/data/menu/sizes.data";
import { BURGER_DATA } from "@/static/data/menu/burger.data";
import { PORTIONS_DATA } from "@/static/data/menu/portion.data";
import { DRINK_DATA } from "@/static/data/menu/drink.data";

export const Route = createFileRoute("/menu/")({
  component: Menu,
});

function Menu() {
  const {
    filter,
    search,
    selectFilter,
    setSearch,
    clearSearch,
    clearFilters,
    filteredData,
  } = useMenuFilters();

  const hasSearch = search.trim().length > 0;
  const hasActiveFilters = filter !== null || hasSearch;

  const showPizzas =
    (!filter || filter === "pizza") &&
    (!hasSearch || filteredData.some((item) => item.type === "pizza"));

  const showBurgers =
    (!filter || filter === "burger") &&
    (!hasSearch || filteredData.some((item) => item.type === "burger"));

  const showPortions =
    (!filter || filter === "portion") &&
    (!hasSearch || filteredData.some((item) => item.type === "portion"));

  const showDrinks =
    (!filter || filter === "drink") &&
    (!hasSearch || filteredData.some((item) => item.type === "drink"));

  return (
    <main className="flex h-dvh w-full flex-col overflow-y-auto">
      <Navbar screen="menu" />

      <section className="flex flex-col items-center gap-y-8 p-4">
        <Filters
          data={FILTERS_DATA}
          search={search}
          setSearch={setSearch}
          clearSearch={clearSearch}
          filter={filter}
          setFilter={selectFilter}
        />

        {hasActiveFilters && filteredData.length === 0 && (
          <div role="status" className="w-full max-w-4xl py-8 text-center">
            <p>Nenhum produto encontrado.</p>

            <Button
              type="button"
              variant="outline"
              onClick={clearFilters}
              className="mt-4"
            >
              Limpar filtros
            </Button>
          </div>
        )}

        <Sizes
          show={showPizzas}
          data={
            hasSearch || filter === "pizza"
              ? (filteredData.filter(
                  (item) => item.type === "pizza",
                ) as typeof SIZES_DATA)
              : SIZES_DATA
          }
        />

        <Burgers
          show={showBurgers}
          data={
            hasSearch || filter === "burger"
              ? (filteredData.filter(
                  (item) => item.type === "burger",
                ) as typeof BURGER_DATA)
              : BURGER_DATA
          }
        />

        <Portions
          show={showPortions}
          data={
            hasSearch || filter === "portion"
              ? (filteredData.filter(
                  (item) => item.type === "portion",
                ) as typeof PORTIONS_DATA)
              : PORTIONS_DATA
          }
        />

        <Drinks
          show={showDrinks}
          data={
            hasSearch || filter === "drink"
              ? (filteredData.filter(
                  (item) => item.type === "drink",
                ) as typeof DRINK_DATA)
              : DRINK_DATA
          }
        />
      </section>
    </main>
  );
}
