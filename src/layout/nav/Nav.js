import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="df">
      <div className="inner-container">
        <a href="/" className="logo">
          <img src="logo.svg" alt="logo" />
        </a>
        <ul className="nav-list">
          <li>
            <span role="button">
              home
              <img src="icons/chevron.svg" alt="chevron" />
            </span>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <span role="button">
              PAGES
              <img src="icons/chevron.svg" alt="chevron" />
            </span>
          </li>
          <li>
            <span role="button">
              SHOP
              <img src="icons/chevron.svg" alt="chevron" />
            </span>
          </li>
          <li>
            <span role="button">
              Blog
              <img src="icons/chevron.svg" alt="chevron" />
            </span>
          </li>
        </ul>

        <div className="nav-info">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <img src="icons/search.svg" alt="search" />
          </div>
          <a href="/" className="favorites">
            <span className="amount">0</span>
            <img src="icons/heart-header.svg" alt="" />
          </a>
          <a href="/" className="cart">
            <span className="sum">$19.00</span>
            <img src="icons/bag.svg" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}
