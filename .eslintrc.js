module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            "^@?\\w",

            // Side effect imports.
            "^\\u0000\\w",

            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            "^\\w",

            // Relative imports.
            // Anything that starts with a dot.
            "^\\.\\w",

            "^.+\\.s?css$\\w", // Style imports.
          ],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
