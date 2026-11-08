import { Link } from "react-router";

const HoverAnimado = ({ to, children, className }) => {
  return (
    <li className={`relative m-6 group w-max hover:text-white ${className}`}>
      <Link to={to} className="flex">{children}</Link>
      <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-soviet-red group-hover:w-full"></span>
    </li>
  );
};

export default HoverAnimado;
