import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { Home } from "./pages/Home/Home.jsx";
import "./components/BrandTitle/BrandTitle.css";
import "./components/Header/Header.css";
import "./components/Hero/Hero.css";
import "./components/Footer/Footer.css";
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
