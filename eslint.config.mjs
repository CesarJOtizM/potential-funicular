import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFilePlugin from "eslint-plugin-check-file";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  importPlugin.flatConfigs.recommended,
  {
    files: ["src/**"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src/"],
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      "check-file": checkFilePlugin,
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "React" },
      ],
      "import/namespace": "off",
      "react/react-in-jsx-scope": "off",
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/!(app)/**/*": "CAMEL_CASE",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        {
          "src/!(app|types)/**/*.{jsx,tsx}": "PASCAL_CASE",
          "src/!(app|types)/**/*.{js,ts}": "CAMEL_CASE",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "import/prefer-default-export": "off",
      "no-restricted-syntax": ["error", "ExportDefaultDeclaration"],
      "import/no-named-as-default": "off",
      "import/no-default-export": "error",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "sibling",
            "parent",
            "index",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "**",
              group: "external",
              position: "after",
            },
            {
              pattern: "src/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "**/*.{css,scss}",
              group: "index",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
        },
      ],
    },
  },
  {
    files: ["src/app/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-default-export": "off",
      "no-restricted-syntax": "off",
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "public/",
      "**/.next/",
      "**/*.css", // Excluir archivos CSS
      "**/*.scss", // Excluir archivos SCSS si los tienes
      "**/*.mjs", // Excluir archivos mjs si los tienes
      ".next/",
      ".husky/",
      ".vscode/",
    ],
  },
];

export default eslintConfig;
