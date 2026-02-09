// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import Header from "./src/Header.astro";
import Footer from "./src/blocks/Footer.astro";
import HeroHome from "./src/blocks/hero/Home.astro";
import HeroPost from "./src/blocks/hero/Post.astro";
import HeroAbout from "./src/blocks/hero/About.astro";
import HeroBlogPost from "./src/blocks/hero/BlogPost.astro";
import PreloadFontsHead from "./src/PreloadFontsHead.astro";
import CardOutlined from "./src/Card/Outlined.astro";
import CardSkill from "./src/Card/Skill.astro";
import TypoDisplayLarge from "./src/Typo/DisplayLarge.astro";
import ChipsSuggestion from "./src/components/chips/Suggestion.astro";
import ChipsFilter from "./src/components/chips/Filter.astro";
import MarkdownCode from "./src/blocks/markdown/code.astro";
import ShareIt from "./src/blocks/ShareIt.astro";
import Social from "./src/components/Social.astro";

// Don't use 'export default' here
export {
  PreloadFontsHead,
  Header,
  Footer,
  CardOutlined,
  CardSkill,
  TypoDisplayLarge,
  ChipsSuggestion,
  ChipsFilter,
  HeroHome,
  HeroPost,
  HeroBlogPost,
  HeroAbout,
  MarkdownCode,
  ShareIt,
  Social,
};
