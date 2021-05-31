# BoilerPlate Next TS

- Iniciar o next

  - <code>yarn create next-app</code>

- Message Linter /_Garante que os commits serão dentro do padrão [conventional](https://www.conventionalcommits.org/en/v1.0.0/#specification) _/

  - <code>yarn add -D git-commit-msg-linter</code>

- Typescript (criar o arquivo tsconfig.json que ele reconhecerá) Usar configurações de referencia do tsconfig.json desse repositório

  - <code>yarn add -D typescript @types/react</code>
  - <code>yarn dev</code>

- Linter /_Usar o .eslintrc.json, .eslintignore, .prettierrc e .editorconfig como base_/
  - <code>npx eslint --init</code>
    - Check sintax and find problems
    - import/export
    - React
    - Use Typescript (Yes)
    - Browser
    - Não instalar com npm, e rodar com yarn
  - <code>yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest</code>
  - <code>yarn add -D eslint-plugin-react-hooks</code>

### Git Hooks

- Garantir que o código esteja formatado corretamente antes do commit/_Usar .lintstagedrc.json e .huskyrc.json como base_/
  - <code>yarn add -D lint-staged husky</code>
  - <code>yarn husky install</code>
  - <code>yarn husky add .husky/pre-commit "yarn pre-commit"</code>
  - <code>"pre-commit": "lint-staged"</code>

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
