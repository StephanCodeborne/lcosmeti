import "./categories.css";

export default function Categories() {
  return (
    <section id="categories" className="df">
      <div className="inner-container">
        <div className="category">
          <a href="/">
            <span className="pre-header-caption">serum</span>
            <h2>Facial Skin Care</h2>
          </a>
        </div>
        <div className="category">
          <a href="/">
            <span className="pre-header-caption">devices</span>
            <h2>Cosmetic Devices</h2>
          </a>
        </div>
        <div className="category">
          <a href="/">
            <span className="pre-header-caption">cream</span>
            <h2>Complex Skin Care</h2>
          </a>
        </div>
      </div>
    </section>
  );
}
