module.exports = {
  "plugins":[
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules":{
    "indentation":2,
    "declaration-block-no-shorthand-property-overrides":true,
    "declaration-colon-newline-after":null,
    "at-rule-no-unknown":[true,{
      "ignoreAtRules":["function","if","for","each","include","mixin","content"]
    }],
  },
  "extends":[
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ]
}
