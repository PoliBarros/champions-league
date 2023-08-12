module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      
    ],
    rules: {
        'vue/no-unused-vars': 'error', 
        'vue/no-unused-components': 'error', 
        'vue/no-v-html': 'off', 
        'vue/html-indent': 'off',
        'vue/html-indent': ['error', 2], 
        'vue/singleline-html-element-content-newline': 'off', 
        'vue/max-attributes-per-line': ['error', { singleline: 3 }], 
        'vue/require-default-prop': 'off', 
        'vue/order-in-components': 'error', 
        'vue/no-mutating-props': 'error' 
      }
  };