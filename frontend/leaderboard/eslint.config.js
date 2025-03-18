import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended, // Core JS rules
  react.configs.recommended, // React-specific rules
  reactHooks.configs.recommended, // React hooks-specific rules
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'react/prop-types': 'off', // Disable prop-types (if using TypeScript)
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }], // Ignore vars starting with '_'
      'react-hooks/exhaustive-deps': 'warn', // Warn for missing hook dependencies
    },
  },
];
