const Projetos = () => {
  const cards = [
    {
      titulo: "Fakestore",
      src: "./meow-cafe.png",
      descricao: "A",
      tecnologias: "a",
    },
    {
      titulo: "Meow Café",
      src: "./meow-cafe.png",
      descricao: "A",
      tecnologias: "a",
    },
    {
      titulo: "Meow Café",
      src: "./meow-cafe.png",
      descricao: "A",
      tecnologias: "a",
    },
    {
      titulo: "Meow Café",
      src: "./meow-cafe.png",
      descricao: "A",
      tecnologias: "a",
    },
  ];

  return (
    <main className="bg-black pt-20">
      <div className="flex flex-col mx-auto w-full max-w-4xl px-4">
        <div className="flex flex-col min-h-17 pl-5">
          <h3 className="text-soviet-red text-xs">Experiência</h3>
          <h1 className="font-bold text-[48px] text-white">Projetos</h1>

          <article className="hover:bg-soviet-grey/20 grid grid-cols-2 gap-8 duration-500 ease-in-out">
            {cards.map((card) => (
                <div className="">
                  <img src={card.src} alt="" className="w-400" />
                  <p className="text-white">{card.titulo}</p>
                </div>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
};

export default Projetos;
