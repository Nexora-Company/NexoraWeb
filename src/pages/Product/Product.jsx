import { FamilyNav } from "../../sections/FamilyNav/FamilyNav.jsx";
import { productContents } from "../../content/products/products.content.js";
import "./Product.css";

export function Product({ productId }) {
  const content = productContents[productId];
  if (!content) return null;
  return (
    <main id={content.id} className="product">
      <FamilyNav content={content} />
    </main>
  );
}
