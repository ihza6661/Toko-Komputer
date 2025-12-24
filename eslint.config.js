import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
      // Custom rule: Prevent hardcoded Tailwind colors
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/className.*((text|bg|border)-(blue|green|red|purple|orange|yellow|pink|indigo|teal|cyan|lime|emerald|sky|violet|fuchsia|rose)-[0-9]{2,3})/]",
          message: "Avoid hardcoded Tailwind colors. Use semantic color tokens (success, warning, info, destructive, primary, accent, etc.) instead."
        }
      ]
    },
  },
);
