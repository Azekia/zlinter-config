# zlinter-config
our **shared [ES]linter config** for js/mjs/ts...

---
### `Extensiones necesarias`
- ESLint `dbaeumer.vscode-eslint`

### Módulos necesarios
Importante instalar los paquetes de `ESLint` y `zlinter-config`
```
npm install --save-dev eslint
npm install --save-dev github:azekia/zlinter-config
or
npm update zlinter-config
```

### `package.json`
En `package.json` quedarán configurdas configurar las siguientes dependencias de desarrollo

Parece que la versión 9.x de slint rompió cosas, por lo que por el momento nos quedamos en 8.49

```json
  "devDependencies": {
    "eslint": "^9.15.0",
    "zlinter-config": "github:azekia/zlinter-config"
  }
  "eslintIgnore": [
    "dbmigrate/*"
  ],
```

### `.vscode/settings.json`
En las preferencias del Workspace vamos a configurar los formateadores por defecto para cada tipo de archivo.
Por ejemplo, para el código javascript **no usaremos** Pettier, sino ESLint.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### `.eslintrc.json`
El fichero `.eslintrc.json` vamos a configurar las opciones de ESLint.


```json
{
  "extends": ["airbnb-base"],
  "env": {
    "es2021": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "globals": {
    "msal": true,
    "google": true
  },
  "rules": {
    "no-param-reassign": ["off"],
    "linebreak-style": ["off", "unix"],
    "import/extensions": ["error", "always", { "ignorePackages": true }],
    "import/no-absolute-path": ["error"],
    "no-console": ["warn", { "allow": ["log", "warn", "error"] }],
    "no-plusplus": "off",
    "class-methods-use-this": ["off"],
    "max-len": ["error", { "code": 136, "tabWidth": 2, "ignoreTrailingComments": true }],
    "prefer-destructuring": ["off"],
    "lines-between-class-members": [
      "warn",
      {
        "enforce": [
          { "blankLine": "always", "prev": "method", "next": "*" }
        ]
      }
    ]
  }
}
```

### `npm install & reboot VSCode`
Para que funcione correctamente el prettier/linter, depues de realizar estas configuraciones es necesario que hagas un `npm install` y reiniciar VSCode.


### `npx prettier --write .`
Para reformatear todos los archivos del proyecto podemos ejecutar el siguiente comando, pero ten en cuenta que puede afectar a archivos de un modo no esperado (css, etc)

```
npx prettier --write .
```




