import { Headphones, Laptop, Scale, ShoppingBag, Smartphone, Sparkles, Tablet, Watch } from "lucide-react";
import { BrandTitle } from "../../components/BrandTitle/BrandTitle.jsx";
import "./FamilyNav.css";

const familyIcons = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
  watch: Watch,
  headphones: Headphones,
  compare: Scale,
  help: Sparkles,
  bag: ShoppingBag,
};

export function FamilyNav({ content }) {
  if (!content) return null;
  return (
    <section className="family-nav" aria-labelledby={`${content.id}-family-title`}>
      <div className="family-nav__inner">
        <BrandTitle text={content.title} level={1} className="family-nav__title" />
        <ul className="family-nav__strip">
          {content.items.map((item) => {
            const Icon = familyIcons[item.icon] || Smartphone;
            return (
              <li key={item.label} className="family-nav__item">
                <a className="family-nav__link" href={item.href}>
                  <Icon className="family-nav__icon" aria-hidden="true" />
                  <span className="family-nav__label">{item.label}</span>
                  {item.tag && <span className="family-nav__tag">{item.tag}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
