import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        }
    },

    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    someConfig,
    eslintConfigPrettier
];
