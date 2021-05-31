# BoilerPlate Next TS

- Iniciar o next

  - <code>yarn create next-app</code>

- Message Linter /_Garante que os commits serão dentro do padrão [conventional](https://www.conventionalcommits.org/en/v1.0.0/#specification) _/

  - <code>yarn add -D git-commit-msg-linter</code>

- Typescript (criar o arquivo tsconfig.json que ele reconhecerá) Usar configurações de referencia do tsconfig.json desse repositório

  - <code>yarn add -D typescript @types/react</code>
  - <code>yarn dev</code>

- Linter /_Usar o .eslintrc.json, .eslintignore e .prettierrc como base_/
  - <code>npm i -D eslint eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-promise eslint-plugin-node @typescript-eslint/eslint-plugin eslint-plugin-react</code>

### Git Hooks

- Garantir que o código esteja formatado corretamente antes do commit/_Usar .lintstagedrc.json e .huskyrc.json como base_/
  - <code>npm i -D lint-staged husky</code>

### Jest

- Biblioteca de testes /_usar o jest.config.js como base e scripts estão package.json_/
  - <code>npm i -D jest @types/jest ts-jest faker identity-obj-proxy</code>

### React

- Bibliotecas principais
  - <code>npm i react react-dom</code>
  - <code>npm i -D @types/react @types/react-dom</code>

### Bundle

- Gerar arquivo JS /_usar webpack.config.js como base_/
  - <code>npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin</code>

### SASS

- Processador de CSS
  - <code>npm i -D node-sass sass-loader css-loader style-loader ts-loader</code>
