import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./layout/nav/Nav";
import SaleNotif from "./layout/sale-notif/SaleNotif";
import Footer from "./layout/footer/Footer";

export default function App() {
  return (
    <>
      <SaleNotif />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
