import "./BrandTitle.css";

export function BrandTitle({ text, level = 2, className = "" }) {
  const Tag = level === 1 ? "h1" : "h2";
  if (!text) return null;
  const first = text.charAt(0);
  const rest = text.slice(1);
  const useDisplay = first === "N";

  return (
    <Tag className={`brand-title ${className}`.trim()}>
      {useDisplay ? (
        <>
          <span className="brand-title__initial" aria-hidden="true">
            {first}
          </span>
          <span className="sr-only">{first}</span>
          {rest}
        </>
      ) : (
        text
      )}
    </Tag>
  );
}
