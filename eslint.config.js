import react from 'eslint-plugin-react'
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'
import reactCompiler from 'eslint-plugin-react-compiler'
import next from '@next/eslint-plugin-next'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  {
    ignores: [
      'dist',
      'docs',
      'vite.config.ts',
      '**/env.d.ts',
      '**/vite-env.d.ts',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      '@next/next': next,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      'react/react-in-jsx-scope': 'off',
      // TypeScript performs prop validation at compile time.
      'react/prop-types': 'off',
      // forwardRef components already expose stable names in this library.
      'react/display-name': 'off',
      camelcase: 'error',
      'spaced-comment': 'error',
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      'sort-imports': 'off',
      'import/order': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'off',
      'import/no-duplicates': 'error',
      '@next/next/no-img-element': 'off',
      'brace-style': ['error', '1tbs'],
      curly: ['error', 'all'],

      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
        },
      ],

      'object-shorthand': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-arrow-callback': 'error',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-irregular-whitespace': 'off',
      'import/no-unresolved': [
        'error',
        { ignore: ['^@/', '^virtual:', '\\?react$'] },
      ],
    },
  },
  {
    files: [
      '**/*.stories.{ts,tsx}',
      '**/*.test.{ts,tsx}',
      '.storybook/**/*.{ts,tsx}',
    ],
    rules: {
      // Stories and tests intentionally use local fixture components.
      'react/function-component-definition': 'off',
      'react-compiler/react-compiler': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
)
