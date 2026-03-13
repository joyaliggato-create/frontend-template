import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      "semi": ["error", "always"],
      "no-unused-vars": "error",
    },
  },
]);