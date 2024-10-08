import Blog from "./sections/blog/Blog";
import Categories from "./sections/categories/Categories";
import InstagramPhotos from "./sections/insatgram-photos/InstagramPhotos";
import Main from "./sections/main/Main";
import NewProducts from "./sections/new-products/NewProducts";
import PopularProducts from "./sections/popular-products/PopularProducts";
import Recomendation from "./sections/recomendation/Recomendation";
import SubscriptionOffer from "./sections/subscription-offer/SubscriptionProposal";

export default function Home() {
  return (
    <>
      <Main />
      <Recomendation />
      <PopularProducts />
      <Categories />
      <NewProducts />
      <Blog />
      <SubscriptionOffer />
      <InstagramPhotos />
    </>
  );
}
