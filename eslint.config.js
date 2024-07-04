import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";
import js from "@eslint/js";
import globals from "globals";

export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    rules: {
      // override/add rules settings here, such as:
      // 'svelte/rule-name': 'error'
    },
    languageOptions: {
      parserOptions: {
        svelteConfig,
        parser: "@typescript-eslint/parser",
      },
      globals: {
        ...globals.browser,
        // myCustomGlobal: "readonly",
      },
    },
  },
  // https://github.com/eslint/eslint/discussions/17429
  {
    ignores: [
      "node_modules",
      "dist/*",
      "build/*",
      ".svelte-kit",
      "svelte.config.js",
    ],
  },
];
