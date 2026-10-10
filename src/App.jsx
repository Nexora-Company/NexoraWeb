import { Footer } from "./layouts/Footer/Footer.jsx";
import { Header } from "./layouts/Header/Header.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { Home } from "./pages/Home/Home.jsx";
import "./components/BrandTitle/BrandTitle.css";
import "./layouts/Header/Header.css";
import "./sections/Hero/Hero.css";
import "./layouts/Footer/Footer.css";
import "./pages/Home/Home.css";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <Home />
      <Footer />
    </>
  );
}
