import pluginQuery from '@tanstack/eslint-plugin-query'


// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
    ...pluginQuery.configs['flat/recommended'],
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
