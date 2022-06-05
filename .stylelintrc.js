module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  "customSyntax": "postcss-less",
  "plugins": ["stylelint-declaration-block-no-ignored-properties"],
  "rules": {
    "function-name-case": ["lower", { "ignoreFunctions": ["/colorPalette/"] }],
    "function-no-unknown": [
      true,
      {
        "ignoreFunctions": [
          "fade",
          "fadeout",
          "tint",
          "darken",
          "ceil",
          "fadein",
          "floor",
          "unit",
          "shade",
          "lighten",
          "percentage",
          "-",
          "~`colorPalette"
        ]
      }
    ],
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
    "declaration-empty-line-before": null,
    "keyframes-name-pattern": null,
    "custom-property-pattern": null,
    "number-max-precision": 8,
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
    "selector-class-pattern": null,
    "selector-id-pattern": null
  },
  "ignoreFiles": ["components/style/color/{bezierEasing,colorPalette,tinyColor}.less"]
}