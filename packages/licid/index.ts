// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import PreloadFontsHead from "./src/PreloadFontsHead.astro";
import Header from "./src/Header.astro";
import MyComponent from "./src/MyComponent.astro";
import CardOutlined from "./src/Card/Outlined.astro";
import TypoDisplayLarge from "./src/Typo/DisplayLarge.astro";
import ChipsSuggestion from "./src/components/chips/Suggestion.astro";
import HeroBlogPost from "./src/blocks/hero/BlogPost.astro";
import MarkdownCode from "./src/blocks/markdown/code.astro";

// Don't use 'export default' here
export {
  PreloadFontsHead,
  Header,
  MyComponent,
  CardOutlined,
  TypoDisplayLarge,
  ChipsSuggestion,
  HeroBlogPost,
  MarkdownCode,
};
