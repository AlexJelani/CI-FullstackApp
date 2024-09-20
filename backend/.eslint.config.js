import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
    ],
    rules: {
        // Your custom rules here
    },
});

