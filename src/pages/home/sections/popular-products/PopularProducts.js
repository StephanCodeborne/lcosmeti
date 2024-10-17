import Banner from "../../../../components/banner/Banner";
import ProductCardsContainer from "../../../../components/product-cards-container/ProductCardsContainer";
import "./popular-products.css";

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
  {
    title: "Universal Cream",
    rate: 4,
    price: "$19.00",
    isNew: true,
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
    rate: 2,
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
];

export default function PopularProducts() {
  return (
    <section id="popular-products" className="df">
      <div className="inner-container">
        <div className="heading">
          <span className="pre-header-caption">l`cosmeti</span>
          <h2>popular products</h2>
        </div>

        <ProductCardsContainer productList={productList} />

        <div className="top-product-container">
          <div className="reference">
            <h2>hair balms</h2>
            <p className="description">
              Sulfate-free balms, restore natural shine
            </p>

            <a href="/">shop now</a>
          </div>

          <div className="video">
            <button className="play">
              <img src="icons/play.svg" alt="play" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
