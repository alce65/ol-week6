# Inicios JS: week 6

## Día 0. From previous projects

### Entorno

#### EditorConfig

```md
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file

root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = true

[*.yml]
indent_size = 2
```

#### Prettier

-   Plugin de VSC
-   package.json

```json
    "prettier": {
        "singleQuote": true
    },
```

#### ESLint

-   Plugin de VSC
-   Instalación

```shell
npm i -D eslint eslint-plugin-import eslint-config-prettier
```

-   Configuración: eslintrc.json / package.json
-   Incluye coordinación con prettier

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
        // "jest": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {}
}
```

### Jest

-   Instalación
-   Incluye uso de módulos ESM

```shell
npm i jest @babel/plugin-transform-modules-commonjs @jest/types
```

-   Configuración: package.json

```json
    "babel": {
        "env": {
            "test": {
                "plugins": [
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }
        }
    }
```

-   Configuración: eslintrc.json

```json
    "env": {

            "jest": true
    },
```

-   Intellisense para jest en VSC (instalados los tipos de jest: @types/jest )
-   jsconfig.json

```json
{
    "typeAcquisition": {
        "include": ["jest"]
    }
}
```

### Jest coverage in Sonar

-   sonar-project.properties

```md
sonar.projectKey=alce65_ol-week5
sonar.organization=alce65

# This is the name and version displayed in the SonarCloud UI.

#sonar.projectName=ol-week5
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.

sonar.sources=.

#sonar.test.inclusions=./src/\*_/_.test.\*

sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.coverage.exclusions=js/index.js, js/\*_/_.test.\*

# Encoding of the source code. Default is default system encoding

#sonar.sourceEncoding=UTF-8
```

### Github Actions

## Dia 1

## Dia 2

## Dia 3

### Typescript
