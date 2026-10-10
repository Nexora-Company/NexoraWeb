import { BrandTitle } from "../BrandTitle/BrandTitle.jsx";
import "./Hero.css";

function HeroButtons({ buttons }) {
  if (!buttons?.length) return null;
  return (
    <div className="hero__ctas">
      {buttons.map((button) => (
        <a
          key={button.label}
          className={`btn ${button.style === "secondary" ? "btn--secondary" : "btn--primary"}`}
          href={button.href}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
}

export function HeroClassic({ content, headingLevel = 2 }) {
  return (
    <section id={content.id} className="hero hero--classic" aria-labelledby={`${content.id}-title`}>
      <div className="hero__content" id={`${content.id}-title`}>
        <BrandTitle text={content.title} level={headingLevel} />
        {content.subtitle && <p className="hero__subtitle">{content.subtitle}</p>}
        <HeroButtons buttons={content.buttons} />
      </div>
      <div className="hero__media">
        <img src={content.image.src} alt={content.image.alt} loading="lazy" />
      </div>
    </section>
  );
}

export function HeroUpcoming({ content, headingLevel = 2 }) {
  return (
    <section id={content.id} className="hero hero--upcoming" aria-labelledby={`${content.id}-title`}>
      <div className="hero__content" id={`${content.id}-title`}>
        <BrandTitle text={content.title} level={headingLevel} />
        {content.subtitle && <p className="hero__subtitle">{content.subtitle}</p>}
        {content.launchNote && <p className="hero__note">{content.launchNote}</p>}
        <HeroButtons buttons={content.buttons} />
      </div>
      <div className="hero__media">
        <img src={content.image.src} alt={content.image.alt} loading="lazy" />
      </div>
    </section>
  );
}

export function HeroWatch({ content, headingLevel = 2 }) {
  return (
    <section id={content.id} className="hero hero--watch" aria-labelledby={`${content.id}-title`}>
      <div className="hero__content hero__content--top" id={`${content.id}-title`}>
        <BrandTitle text={content.title} level={headingLevel} />
      </div>
      <div className="hero__media hero__media--watch">
        <img src={content.image.src} alt={content.image.alt} loading="lazy" />
      </div>
      <div className="hero__content hero__content--bottom">
        {content.subtitle && (
          <p className="hero__subtitle">
            {content.subtitle}
            {content.footnote && <sup>{content.footnote}</sup>}
          </p>
        )}
        <HeroButtons buttons={content.buttons} />
      </div>
    </section>
  );
}

export function Hero({ content, headingLevel = 2 }) {
  if (content.variant === "upcoming") return <HeroUpcoming content={content} headingLevel={headingLevel} />;
  if (content.variant === "watch") return <HeroWatch content={content} headingLevel={headingLevel} />;
  return <HeroClassic content={content} headingLevel={headingLevel} />;
}
