const Footer = () => {
  return (
    <footer className="border-t border-gray-600 *:font-mono *:text-xs">
      <div className="flex flex-col mx-auto w-full max-w-2xl px-4">
        <div className="flex justify-start items-center min-h-17 gap-3">
          <div>Contato</div>
          <ul className="flex gap-3">
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
