module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};
