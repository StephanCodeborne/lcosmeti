import ProductCard from "../product-card/ProductCard";
import "./product-cards-container.css";

export default function ProductCardsContainer({ productList }) {
  return (
    <div className="product-cards-container">
      {productList.map(({ title, price, rate, isNew, forSale }, idx) => (
        <ProductCard
          key={idx}
          title={title}
          price={price}
          rate={Math.round(rate)}
          isNew={isNew}
          forSale={forSale}
        />
      ))}
    </div>
  );
}
