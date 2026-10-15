function Header() {
  return (
    <header className="flex flex-col items-center lg:items-start gap-y-4 w-full text-center lg:text-start">
      <h1 className="text-3xl md:text-4xl font-bold">
        Bem-vindo(a) ao{" "}
        <span className="text-4xl md:text-5xl font-black text-primary">
          DevPizza
        </span>{" "}
        a pizza queridinha da cidade
      </h1>

      <p className="text-xs md:text-sm text-foreground/75">
        Estamos há 2 anos no mercado alimentício, dedicados a oferecer uma
        experiência gastronômica de alta qualidade. Nosso foco é proporcionar
        sabores inesquecíveis, com pratos preparados com cuidado e ingredientes
        selecionados para garantir a satisfação de nossos clientes.
      </p>
    </header>
  );
}

export { Header };
