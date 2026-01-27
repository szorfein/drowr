//import { astroConfig } from "@drowr/eslint-config/astro-js";

/** @type {import("eslint").Linter.Config[]} */
//export default astroConfig;

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import turboPlugin from "eslint-plugin-turbo";
import astroParser from "astro-eslint-parser";

// OhMyGod... it's sucks
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  // ignore pattern
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "**/*.d.ts", // Ignore generated TypeScript declaration files
    ],
  },
  // Base config
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  // ESLint recommended rules
  js.configs.recommended,
  // js
  {
    files: ["**/*.js"],
    rules: {
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
  // typescript
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  // Astro
  {
    files: ["**/*.astro"],
    plugins: {
      eslintPluginAstro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...eslintPluginAstro.configs.recommended.rules,
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
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
]);
