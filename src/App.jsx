import { useEffect, useState } from "react";
import { Footer } from "./layouts/Footer/Footer.jsx";
import { Header } from "./layouts/Header/Header.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { Home } from "./pages/Home/Home.jsx";
import { Product } from "./pages/Product/Product.jsx";
import { getRouteProductId } from "./content/products/products.content.js";
import "./components/BrandTitle/BrandTitle.css";
import "./layouts/Header/Header.css";
import "./sections/Hero/Hero.css";
import "./sections/FamilyNav/FamilyNav.css";
import "./layouts/Footer/Footer.css";
import "./pages/Home/Home.css";
import "./pages/Product/Product.css";

export default function App() {
  const { theme, toggle } = useTheme();
  const [productId, setProductId] = useState(() => getRouteProductId(window.location.hash));

  useEffect(() => {
    function onHashChange() {
      setProductId(getRouteProductId(window.location.hash));
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      {productId ? <Product productId={productId} /> : <Home />}
      <Footer />
    </>
  );
}
