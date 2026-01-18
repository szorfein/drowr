import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    ignores: ["dist/**"],
  },
]);
