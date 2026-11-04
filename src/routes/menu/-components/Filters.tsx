import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import type { Filter, FilterType } from "@/static/data/menu/filter.data";

interface Props {
  data: Filter[];
  search: string;
  setSearch: (value: string) => void;
  clearSearch: () => void;
  filter: FilterType | null;
  setFilter: (value: FilterType) => void;
}

function Filters({
  data,
  search,
  setSearch,
  clearSearch,
  filter,
  setFilter,
}: Props) {
  return (
    <Card className="mt-20 flex w-full max-w-4xl flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Pesquise pelo nome ou ingredientes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Pesquisar produtos do cardápio"
        />

        {search.length > 0 && (
          <Button type="button" variant="outline" onClick={clearSearch}>
            Limpar
          </Button>
        )}
      </div>

      <nav
        aria-label="Categorias do cardápio"
        className="flex w-full flex-row flex-wrap items-center justify-center gap-2"
      >
        {data.map(({ id, title, icon: Icon }) => (
          <Button
            key={id}
            type="button"
            variant={filter === id ? "default" : "outline"}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            <Icon aria-hidden="true" />
            {title}
          </Button>
        ))}
      </nav>
    </Card>
  );
}

export { Filters };
