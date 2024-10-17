import { useMemo } from "react";
import "./product-card.css";

export default function ProductCard({
  title,
  price,
  rate = 0,
  isNew = false,
  forSale = false,
  image,
}) {
  const stars = useMemo(() => {
    return new Array(5)
      .fill(null)
      .map((_, idx) => (idx < rate ? "filled" : "empty"));
  }, [rate]);

  return (
    <div className="product-card">
      <div className="product-status-container">
        {forSale && <div className="status sale">Sale</div>}
        {isNew && <div className="status new">New</div>}
      </div>

      <div className="product-image"></div>

      <div className="product-info">
        <div className="hover-action-choice">
          <button>
            <img src="icons/plus-white.svg" alt="add-to-cart" />
          </button>
          <button>
            <img src="icons/eye-white-border.svg" alt="view-more" />
          </button>
          <button>
            <img src="icons/heart-white-border.svg" alt="add-to-favorites" />
          </button>
        </div>

        <div className="rate">
          {stars.map((status, idx) => (
            <img
              key={idx}
              src={`icons/${status}-star.svg`}
              alt={status === "filled" ? "filled star" : "empty star"}
            />
          ))}
        </div>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}
