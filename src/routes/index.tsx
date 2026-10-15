import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Header } from "./-components/Header";
import { Info } from "./-components/Info";
import { Actions } from "./-components/Actions";

import Pizza from "@/assets/pizza.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 w-full h-dvh px-4">
      <Navbar screen="menu" />

      <section className="flex flex-col items-center gap-y-12 w-full max-w-xl">
        <Header />
        <Info />
        <Actions />
      </section>

      <img
        className="hidden lg:block w-full max-w-xl"
        src={Pizza}
        alt="Pizza de Marguerita"
        loading="lazy"
      />
    </main>
  );
}
