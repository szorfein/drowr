// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import Header from "./src/Header.astro";
import Footer from "./src/blocks/Footer.astro";
import HeroHome from "./src/blocks/hero/Home.astro";
import HeroPost from "./src/blocks/hero/Post.astro";
import HeroAbout from "./src/blocks/hero/About.astro";
import HeroBlogPost from "./src/blocks/hero/BlogPost.astro";
import CardOutlined from "./src/Card/Outlined.astro";
import CardSkill from "./src/Card/Skill.astro";
import ChipsSuggestion from "./src/components/chips/Suggestion.astro";
import ChipsFilter from "./src/components/chips/Filter.astro";
import MarkdownCode from "./src/blocks/markdown/code.astro";
import ShareIt from "./src/blocks/ShareIt.astro";
import Social from "./src/components/Social.astro";
import ButtonFilled from "./src/components/button/Filled.astro";
import ButtonStyledGithub from "./src/components/button/StyledGithub.astro";
import TextFieldFilled from "./src/components/text-field/Filled.astro";

// Don't use 'export default' here
export {
  Header,
  Footer,
  CardOutlined,
  CardSkill,
  ChipsSuggestion,
  ChipsFilter,
  HeroHome,
  HeroPost,
  HeroBlogPost,
  HeroAbout,
  MarkdownCode,
  ShareIt,
  Social,
  ButtonFilled,
  ButtonStyledGithub,
  TextFieldFilled,
};
