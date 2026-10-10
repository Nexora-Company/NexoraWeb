import { useEffect, useState } from 'react'
import { ChevronLeft, Hexagon, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react'
import { headerContent } from '../../content/site/header.content.js'
import { metaContent } from '../../content/site/meta.content.js'
import { navMenusContent } from '../../content/site/navMenus.content.js'
import './Header.css'

export function Header({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(null)
  const isDark = theme === 'dark'
  const toggleLabel = isDark ? metaContent.themeLabels.toLight : metaContent.themeLabels.toDark

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setMobileMenu(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function closeMobile() {
    setMobileOpen(false)
    setMobileMenu(null)
  }

  const mobileMenuContent = mobileMenu ? navMenusContent[mobileMenu] : null

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__logo"
          href={headerContent.logo.href}
          aria-label={headerContent.logo.ariaLabel}
        >
          <Hexagon className="site-header__mark" aria-hidden="true" />
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
            onClick={() => setMobileOpen(true)}
            aria-label={headerContent.actions.menuOpenLabel}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={headerContent.nav.ariaLabel}
        >
          <div className="nav-overlay__top">
            {mobileMenuContent ? (
              <button
                type="button"
                className="nav-overlay__icon-btn"
                onClick={() => setMobileMenu(null)}
                aria-label={headerContent.nav.backLabel}
              >
                <ChevronLeft aria-hidden="true" />
              </button>
            ) : (
              <span className="nav-overlay__top-logo" aria-hidden="true">
                <Hexagon aria-hidden="true" />
              </span>
            )}
            <button
              type="button"
              className="nav-overlay__icon-btn"
              onClick={closeMobile}
              aria-label={headerContent.nav.closeLabel}
            >
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
                  <ul
                    className={
                      group.featured
                        ? 'nav-overlay__links nav-overlay__links--featured'
                        : 'nav-overlay__links'
                    }
                  >
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
  )
}
