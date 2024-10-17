import Banner from "../../../../components/banner/Banner";
import ProductCardsContainer from "../../../../components/product-cards-container/ProductCardsContainer";
import "./new-products.css";

const productList = [
  {
    title: "Universal Cream",
    rate: 4,
    price: "$19.00",
    isNew: true,
    forSale: true,
  },
  {
    title: "Universal Cream",
    rate: 5,
    price: "$19.00",
    isNew: false,
    forSale: true,
  },
  {
    title: "Universal Cream",
    rate: 4,
    price: "$19.00",
    isNew: true,
    forSale: true,
  },
  {
    title: "Universal Cream",
    rate: 3,
    price: "$19.00",
    isNew: true,
    forSale: false,
  },
];

export default function NewProducts() {
  return (
    <section id="new-products" className="df">
      <div className="inner-container">
        <div className="heading">
          <span className="pre-header-caption">l`cosmeti</span>
          <h2>New Products</h2>
        </div>

        <Banner>
          <div className="reference">
            <h2>nature is our friend</h2>
            <p className="description">
              Phasellus egestas tellus rutrum tellus. Arcu cursus euismod quis
              viverra nibh cras pulvinar mattis.
            </p>

            <button className="main-button-style empty">learn more</button>
          </div>
        </Banner>

        <ProductCardsContainer productList={productList} />

        <div className="dot-slider">
          <div className="dot-container active">
            <span className="dot"></span>
          </div>
          <div className="dot-container">
            <span className="dot"></span>
          </div>
          <div className="dot-container">
            <span className="dot"></span>
          </div>
          <div className="dot-container">
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
