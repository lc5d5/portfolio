// export default function ButtonAnimado({ children, onClick, className = "" }) {
//   return (
//     <button 
//       onClick={onClick} 
//       className={`relative isolate group w-max px-4 py-2 hover:text-white transition-colors duration-300 ${className}`}
//     >
//       <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-[#ff0000] scale-0 transition-transform duration-300 group-hover:scale-100 -z-10 pointer-events-none"></span>
//       <span className="relative z-10">
//         {children}
//       </span>
//     </button>
//   );
// }

const HoverAnimado = ({ onClick, children, className }) => {
  return (
    <button
    onClick={onClick} 
    className={`relative group w-max hover:text-white ${className}`}>
      {children}
      <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-soviet-red group-hover:w-full"></span>
    </button>
  );
};

export default HoverAnimado;