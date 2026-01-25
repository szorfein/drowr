// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import Header from "./src/Header.astro";
import HeroHome from "./src/blocks/hero/Home.astro";
import HeroPost from "./src/blocks/hero/Post.astro";
import PreloadFontsHead from "./src/PreloadFontsHead.astro";
import CardOutlined from "./src/Card/Outlined.astro";
import TypoDisplayLarge from "./src/Typo/DisplayLarge.astro";
import ChipsSuggestion from "./src/components/chips/Suggestion.astro";
import MarkdownCode from "./src/blocks/markdown/code.astro";
import ShareIt from "./src/blocks/ShareIt.astro";

// Don't use 'export default' here
export {
  PreloadFontsHead,
  Header,
  CardOutlined,
  TypoDisplayLarge,
  ChipsSuggestion,
  HeroHome,
  HeroPost,
  MarkdownCode,
  ShareIt,
};
