import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { footerContent } from "../../content/site/footer.content.js";
import "./Footer.css";

function FooterColumn({ column }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`footer__column ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="footer__heading-btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {column.heading}
        <ChevronDown aria-hidden="true" />
      </button>
      <h3 className="footer__heading" aria-hidden={open}>
        {column.heading}
      </h3>
      <ul className="footer__links">
        {column.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const shop = footerContent.shopWays;
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__notes">
          {footerContent.notes.map((note, i) => (
            <p key={i}>{note}</p>
          ))}
        </div>

        <nav className="footer__grid" aria-label="Mapa del sitio">
          {footerContent.columns.map((column) => (
            <FooterColumn key={column.id} column={column} />
          ))}
        </nav>

        <p className="site-footer__shop">
          {shop.prefix}{" "}
          <a href={shop.storeLink.href}>{shop.storeLink.label}</a> {shop.separator}{" "}
          <a href={shop.retailerLink.href}>{shop.retailerLink.label}</a> {shop.suffix}{" "}
          <a href={shop.phoneLink.href}>{shop.phoneLink.label}</a>.
        </p>

        <div className="site-footer__legal">
          <p>{footerContent.legal.copyright}</p>
          <ul>
            {footerContent.legal.links.map((link, i) => (
              <li key={link.label}>
                {i > 0 && <span aria-hidden="true">|</span>}
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
