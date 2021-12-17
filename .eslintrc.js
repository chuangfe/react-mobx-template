module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      module: true,
      legacyDecorators: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    useJSXTextNode: false
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js']
      }
    }
  },
  rules: {
    'prettier/prettier': ['off', {}],
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0, 'never'],
    'no-unused-vars': 'off',
    'padded-blocks': ['off', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'arrow-parens': 'error',
    'no-console': 'off',
    'no-confusing-arrow': 'warn',
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'no-multiple-empty-lines': 'off',
    'class-methods-use-this': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'react/require-default-props': 'warn',
    'react/no-unused-prop-types': 'warn',
    'import/no-unresolved': [2, { caseSensitive: true }],
    'operator-linebreak': ['error', 'before'],
    'prefer-destructuring': 'off',
    'react/sort-comp': 'off',
    'lines-between-class-members': 'off',
    'no-useless-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'react/self-closing-comp': 'warn',
    'quote-props': 'warn'
  }
};
