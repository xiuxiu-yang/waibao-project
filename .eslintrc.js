module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-model-argument': 'off',
    'no-plusplus': 'off'
  }
}
