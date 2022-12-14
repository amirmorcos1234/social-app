module.exports = {
    parser: '@typescript-eslint/parser',
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  
        // As mentioned in the comments, you should extend TypeScript plugins here,
        // instead of extending them outside the `overrides`.
        // If you don't want to extend any rules, you don't need an `extends` attribute.
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
  
        parserOptions: {
          project: ['./tsconfig.json'], // Specify it only for TypeScript files
        },
      },
    ],
    parserOptions: {
      project: 'tsconfig.json',
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
      lib: ['esnext'],
      ecmaVersion: 2018,
      sourceType: 'module',
      extraFileExtensions: ['.json'],
    },
    globals: {
      JSX: true,
      NodeJS: true,
    },
    ignorePatterns: ['__mocks__'],
    plugins: [
      'react',
      'react-hooks',
      'react-native',
      'simple-import-sort',
      '@typescript-eslint',
      '@typescript-eslint/eslint-plugin',
      'functional',
      'prefer-arrow',
      'prettier',
      'sonarjs',
    ],
    root: true,
    settings: {
      'import/ignore': ['node_modules'],
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    extends: [
      '@react-native-community',
      'plugin:react/recommended',
      'plugin:functional/no-mutations',
      'plugin:import/typescript',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-identical-expressions': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'no-useless-return': 'error',
      eqeqeq: ['error', 'always'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'import/no-unresolved': 'off',
      'no-extra-boolean-cast': 'off',
      'no-void': ['error', { allowAsStatement: true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
      'react/jsx-boolean-value': 'error',
      'react/self-closing-comp': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/display-name': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-useless-rename': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'Please use named imports from react',
            },
            {
              name: 'react-native-size-matters',
              message: 'Please use "react-native-size-matters/extend" instead.',
            },
            {
              importNames: ['useIntl'],
              name: 'react-intl',
              message:
                'Please use "src/integrations/i18n/hooks/useIntl.ts" instead.',
            },
            {
              importNames: ['useRoute'],
              name: '@react-navigation/core',
              message:
                'Please use "src/integrations/navigation/hooks/useRoute.ts" instead.',
            },
          ],
        },
      ],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'no-nested-ternary': 'error',
      'functional/no-loop-statement': 'error',
      'functional/prefer-readonly-type': 'off',
      'functional/no-let': 'off',
      'functional/immutable-data': [
        'error',
        { ignorePattern: ['current', 'value'] },
      ],
      'no-console': 'error',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      curly: ['error', 'all'],
      'import/no-named-as-default': 'off',
      'import/first': 'error',
      'import/default': 'off',
      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-relative-parent-imports': 'error',
      'object-shorthand': 'error',
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'off',
      'react-native/no-single-element-style-arrays': 'error',
    },
  };
  