import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

const compat = new FlatCompat( {
  baseDirectory: __dirname,
} );

const eslintConfig = [
  ...compat.extends( "next/core-web-vitals", "next/typescript" ),
  {
    "rules": {
      "no-console": [ "error", { allow: [ "warn", "error" ] } ],
      "indent": [ "error", 2 ],
      "space-in-brackets": [ "error", "always" ],
      "object-curly-spacing": [ "error", "always" ],
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "complexity": [ "error", 4 ],
      "max-lines": [ "error", 500 ],
      "max-depth": [ "error", 4 ],
      "max-params": [ "error", 3 ],
      "no-console": "error",
      "no-empty": "error",
      "no-inline-comments": "error",
      "sort-imports": [ "error", {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": true,
        "memberSyntaxSortOrder": [ "none", "all", "multiple", "single" ],
        "allowSeparatedGroups": true
      } ],
      "yoda": "error"
    }
  },
];

export default eslintConfig;
