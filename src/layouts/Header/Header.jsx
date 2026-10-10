import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { headerContent } from "../../content/site/header.content.js";
import { metaContent } from "../../content/site/meta.content.js";
import { navMenusContent } from "../../content/site/navMenus.content.js";
import "./Header.css";

export function Header({ theme, onToggleTheme }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);
  const rootRef = useRef(null);
  const isDark = theme === "dark";
  const toggleLabel = isDark ? metaContent.themeLabels.toLight : metaContent.themeLabels.toDark;

  useEffect(() => {
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpenMenu(null);
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileMenu(null);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileMenu(null);
  }

  const activeMenu = openMenu ? navMenusContent[openMenu] : null;
  const mobileMenuContent = mobileMenu ? navMenusContent[mobileMenu] : null;

  return (
    <header className="site-header" ref={rootRef}>
      <div className="container site-header__inner">
        <a
          className="site-header__logo"
          href={headerContent.logo.href}
          aria-label={headerContent.logo.ariaLabel}
        >
          <img
            className="site-header__mark"
            src={headerContent.logo.mark.src}
            alt={headerContent.logo.mark.alt}
            aria-hidden={headerContent.logo.mark.alt === ""}
          />
          {headerContent.logo.text}
        </a>

        <nav className="site-header__nav" aria-label={headerContent.nav.ariaLabel}>
          {headerContent.nav.links.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`site-header__link ${openMenu === link.menuId ? "is-active" : ""}`}
              aria-expanded={openMenu === link.menuId}
              aria-haspopup="true"
              onClick={() => setOpenMenu((prev) => (prev === link.menuId ? null : link.menuId))}
            >
              {link.label}
            </button>
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
            onClick={() => setMobileOpen(true)}
            aria-label={headerContent.actions.menuOpenLabel}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      {activeMenu && (
        <div className="nav-panel">
          <div className="container nav-panel__inner">
            {activeMenu.groups.map((group) => (
              <div key={group.label} className="nav-panel__column">
                <p className="nav-panel__label">{group.label}</p>
                <ul className={group.featured ? "nav-panel__links nav-panel__links--featured" : "nav-panel__links"}>
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} onClick={() => setOpenMenu(null)}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="nav-overlay" role="dialog" aria-modal="true" aria-label={headerContent.nav.ariaLabel}>
          <div className="nav-overlay__top">
            {mobileMenuContent ? (
              <button type="button" className="nav-overlay__icon-btn" onClick={() => setMobileMenu(null)} aria-label={headerContent.nav.backLabel}>
                <ChevronLeft aria-hidden="true" />
              </button>
            ) : (
              <span />
            )}
            <button type="button" className="nav-overlay__icon-btn" onClick={closeMobile} aria-label={headerContent.nav.closeLabel}>
              <X aria-hidden="true" />
            </button>
          </div>

          {!mobileMenuContent && (
            <ul className="nav-overlay__list">
              {headerContent.nav.links.map((link) => (
                <li key={link.label}>
                  <button type="button" onClick={() => setMobileMenu(link.menuId)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {mobileMenuContent && (
            <div className="nav-overlay__submenu">
              {mobileMenuContent.groups.map((group) => (
                <div key={group.label} className="nav-overlay__group">
                  <p className="nav-overlay__label">{group.label}</p>
                  <ul className={group.featured ? "nav-overlay__links nav-overlay__links--featured" : "nav-overlay__links"}>
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} onClick={closeMobile}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
