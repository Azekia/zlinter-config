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

```json
  "devDependencies": {
    "eslint": "^9.15.0",
    "zlinter-config": "github:azekia/zlinter-config"
  },
  "eslintIgnore": [
    "dbmigrate/*"
  ]
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

### `eslint.config.js`
El fichero `eslint.config.js` vamos a configurar las opciones de ESLint.

```javascript
// module.exports = require('zlinter-config');
// eslint-disable-next-line import/no-extraneous-dependencies, import/newline-after-import
import zl from 'zlinter-config';
export default zl;

```

### `npm install & reboot VSCode`
Para que funcione correctamente el prettier/linter, depues de realizar estas configuraciones es necesario que hagas un `npm install` y reiniciar VSCode.





