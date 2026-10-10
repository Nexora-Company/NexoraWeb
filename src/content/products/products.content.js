import { nexabookContent } from "./nexabook.content.js";
import { nexapodsContent } from "./nexapods.content.js";
import { nexatabContent } from "./nexatab.content.js";
import { nexawatchContent } from "./nexawatch.content.js";
import { nphoneContent } from "./nphone.content.js";

export const productContents = {
  nphone: nphoneContent,
  nexabook: nexabookContent,
  nexatab: nexatabContent,
  nexawatch: nexawatchContent,
  nexapods: nexapodsContent,
};

export function getRouteProductId(hash) {
  const match = /^#\/([a-z]+)/.exec(hash || "");
  if (!match) return null;
  return productContents[match[1]] ? match[1] : null;
}
