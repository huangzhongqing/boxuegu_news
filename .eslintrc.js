// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // add your custom rules here
  "rules": {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "always"
    }],
    "semi": 0,
    "indent": 0,
    "quotes": 0,
    "spaced-comment": 0,
    "comma-dangle": 0,
    "operator-linebreak": 0,
    "eol-last": 0,
    "handle-callback-err": 0,
    "standard/no-callback-literal": 0,
    "no-template-curly-in-string": 0,
    "yoda": 0,
    "object-property-newline": 0,
    "camelcase": 0,
    "no-multiple-empty-lines": 0,
    "no-mixed-operators": 0,
    "no-multi-spaces": 0,
    "padded-blocks": 0,
    "no-eval": 0,
    "no-useless-escape": 0,
    "import/no-duplicates": 0,
    //去掉 vue v-for 必须添加 :key
    "vue/valid-v-for": 0,
    "vue/require-v-for-key": 0,
    //去掉 computed 中不应该改变data中的数据
    "vue/no-side-effects-in-computed-properties": 0,
    "fun-call-spacing": 0, //函数调用时，函数名与()之间不能有空格
    // allow async-await
    "generator-star-spacing": "off",
    "no-irregular-whitespace":"off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}
