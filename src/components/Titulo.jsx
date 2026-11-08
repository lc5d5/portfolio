import { useState } from "react";

const Titulo = () => {
  const [hover, setHover] = useState(false);
  const nomes = {
    nome1: "Lucas",
    nome2: "@lgdev",
  };

  return (
    <h1 class="group/swap relative inline-grid overflow-clip py-[0.3em] font-bold text-white leading-[1.15] tracking-[-0.02em] no-underline transition-colors duration-300 hover:bg-tth05-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2">
      <span class="col-start-1 row-start-1 block transition-transform duration-450 ease-[cubic-bezier(.76,0,.24,1)] group-hover/swap:translate-y-[-150%] motion-reduce:transition-none">
        {nomes.nome1}
      </span>
      <span
        aria-hidden="true"
        lang="ja"
        class="col-start-1 row-start-1 block translate-y-[150%] text-soviet-red transition-transform duration-450 ease-[cubic-bezier(.76,0,.24,1)] group-hover/swap:translate-y-0 group-focus-visible/swap:translate-y-0 motion-reduce:transition-none"
      >
        {nomes.nome2}
      </span>
    </h1>
  );
};

export default Titulo;
