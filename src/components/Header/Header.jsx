import { useState } from "react";
import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { headerContent } from "../../content/site/header.content.js";
import { metaContent } from "../../content/site/meta.content.js";
import "./Header.css";

export function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";
  const toggleLabel = isDark ? metaContent.themeLabels.toLight : metaContent.themeLabels.toDark;

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="site-header__logo"
          href={headerContent.logo.href}
          aria-label={headerContent.logo.ariaLabel}
        >
          <span className="site-header__mark" aria-hidden="true">
            {headerContent.logo.mark}
          </span>
          {headerContent.logo.text}
        </a>

        <nav className="site-header__nav" aria-label={headerContent.nav.ariaLabel}>
          {headerContent.nav.links.map((link) => (
            <a key={link.label} className="site-header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="site-header__icon-btn"
            href={headerContent.actions.searchHref}
            aria-label={headerContent.actions.searchLabel}
          >
            <Search aria-hidden="true" />
          </a>
          <a
            className="site-header__icon-btn"
            href={headerContent.actions.cartHref}
            aria-label={headerContent.actions.cartLabel}
          >
            <ShoppingBag aria-hidden="true" />
          </a>
          <button
            type="button"
            className="site-header__icon-btn"
            onClick={onToggleTheme}
            aria-label={toggleLabel}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="site-header__icon-btn site-header__menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? headerContent.actions.menuCloseLabel : headerContent.actions.menuOpenLabel}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-header__mobile" aria-label={headerContent.nav.ariaLabel}>
          {headerContent.nav.links.map((link) => (
            <a
              key={link.label}
              className="site-header__mobile-link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
