// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    // Specify the environments directly in the "overrides" array
    overrides: [
        {
            files: ['*.js'], // Apply this config to all .js files
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
            plugins: ['node'], // Use any plugins you want
            rules: {
                'no-console': 'off', // Example rule
            },
        },
    ],
});

