import { brandTitleContent } from "../../content/site/brandTitle.content.js";
import "./BrandTitle.css";

function TitleWord({ word, isFirst }) {
  if (isFirst && word.charAt(0) === brandTitleContent.initial) {
    const initial = word.charAt(0);
    const rest = word.slice(1);
    return (
      <>
        <span className="brand-title__initial" aria-hidden="true">
          {initial}
        </span>
        <span className="sr-only">{initial}</span>
        {rest}
      </>
    );
  }
  if (brandTitleContent.displayWords.includes(word)) {
    return <span className="brand-title__display">{word}</span>;
  }
  return word;
}

export function BrandTitle({ text, level = 2, className = "" }) {
  const Tag = level === 1 ? "h1" : "h2";
  if (!text) return null;
  const words = text.split(" ");

  return (
    <Tag className={`brand-title ${className}`.trim()}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <TitleWord word={word} isFirst={index === 0} />
        </span>
      ))}
    </Tag>
  );
}
