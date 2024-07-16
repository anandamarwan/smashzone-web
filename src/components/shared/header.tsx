import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="p-4 fixed w-full z-20 top-0 start-0 border-b">
        <div className="flex justify-between items-center max-w-7xl">
          <Link to={`/`} className="text-xl text-black">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span>Smash</span>
                <span>Zone </span>
              </div>
              <span className="text-4xl">🏸</span>
            </div>
          </Link>
          <ul className="flex flex-row gap-10  text-sm text-black ">
            <li>
              <Link to={`/`} className="text-xl">
                Rackets
              </Link>
            </li>
            <li>
              <Link to={`/shoes`} className="text-xl ">
                Shoes
              </Link>
            </li>
            <li>
              <Link to={`/bag`} className="text-xl ">
                Bag
              </Link>
            </li>
            <li>
              <Link to={`/clothing`} className="text-xl">
                Clothing
              </Link>
            </li>
          </ul>
          <div className="flex gap-23">
            <Link to={`/login`} className="text-xl ">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
