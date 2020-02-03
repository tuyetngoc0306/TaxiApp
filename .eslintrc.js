{
  "parser": "babel-eslint",

  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "allowImportExportEverywhere": false,
    "target": "es6",
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "noImplicitAny": false
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-native",
    "jsx-a11y",
    "import",
    "prettier",
    "react-hooks",
    "eslint-plugin-import",
    "eslint-import-resolver-babel-plugin-root-import"
  ],
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {
        "rootPathPrefix": "~",
        "rootPathSuffix": "src"
      }
    }
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "global-require": "off",
    "max-len": ["error", { "code": 120 }]
  }
}
