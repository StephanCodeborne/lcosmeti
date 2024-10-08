import "./main.css";

export default function Main() {
  return (
    <main className="df">
      <div className="inner-container">
        <div className="section-intro-text">
          <span className="pre-header-caption">from $29 — $119</span>
          <h1>Complex Multi-Stage Facial Skin Care</h1>
          <ul className="advantages">
            <li>
              <img src="icons/feather.svg" alt="" />
              Morbi enim nunc faucibus a pellentesque sit amet porttitor
            </li>
            <li>
              <img src="icons/feather.svg" alt="" />
              Diam in arcu cursus euismod
            </li>
            <li>
              <img src="icons/feather.svg" alt="" />
              Aliquam nulla facilisi cras fermentum
            </li>
          </ul>

          <div className="button-row">
            <button className="main-button-style filled">shop now</button>
            <button className="main-button-style empty">learn more</button>
          </div>
        </div>
      </div>
    </main>
  );
}
