import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

const compat = new FlatCompat( { baseDirectory: __dirname, } );

const eslintConfig = [
  ...compat.extends( "next/core-web-vitals", "next/typescript" ),
  {
    "rules": {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
      "no-empty": "error",
      "no-duplicate-imports": "error",
      "object-curly-newline": [ "error", {
        "ObjectExpression": {
          "multiline": true, "minProperties": 3, "consistent": true
        },
        "ObjectPattern": {
          "multiline": true, "minProperties": 3, "consistent": true
        },
        "ImportDeclaration": {
          "multiline": true, "minProperties": 3, "consistent": true
        },
        "ExportDeclaration": "never"
      } ],
      "indent": [ "error", 2 ],
      "indent-legacy": [ "error", 2, {
        "ObjectExpression": 1,
        "ArrayExpression": 1,
        "SwitchCase": 1,
      } ],
      "object-curly-spacing": [ "error", "always" ],
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "complexity": [ "error", 4 ],
      "max-lines": [ "error", 500 ],
      "max-depth": [ "error", 4 ],
      "max-params": [ "error", 3 ],
      "no-inline-comments": "error",
      "sort-imports": [ "error", {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": true,
        "memberSyntaxSortOrder": [ "none", "all", "multiple", "single" ],
        "allowSeparatedGroups": true
      } ],
    }
  },
];

export default eslintConfig;
