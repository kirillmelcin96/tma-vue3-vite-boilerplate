module.exports = {
    env: {
      browser: true,
      es2023: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        "indent": ["error", 4, {
            SwitchCase: 1,
        }],
        "vue/html-indent": ["error", 4, {
            alignAttributesVertically: false,
        }],
    }
}