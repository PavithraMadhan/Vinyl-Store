import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the FlatCompat helper
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: [
    'next/core-web-vitals', // Next.js rules
    'next/typescript', // Next.js TypeScript rules
  ],
  ignores: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],
  rules: {
    // Enforce single quotes for strings
    'quotes': ['error', 'single'],
  },
};

export default eslintConfig;