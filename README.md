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
  - <code>yarn add -D --exact prettier</code>
  - <code>yarn add -D eslint-plugin-prettier</code>
  - <code>yarn add -D eslint-config-prettier</code>
  - Adicionar arquivo ./vscode/settings.json
    - <code>{
            "editor.formatOnSave": false,
            "editor.codeActionsOnSave": {
              "source.fixAll.eslint": true
            }
          }
      </code>

### Git Hooks

- Garantir que o código esteja formatado corretamente antes do commit/_Usar .lintstagedrc.json e .huskyrc.json como base_/
  - <code>yarn add -D lint-staged husky</code>
  - <code>yarn husky install</code>
  - <code>yarn husky add .husky/pre-commit "yarn pre-commit"</code> ou <code>npx husky init</code> e alterar o .husky/pre-commit
  - <code>"pre-commit": "lint-staged"</code>

### Jest

- Biblioteca de testes /_usar o jest.config.js, .babelrc e .jest/setup.ts como base e scripts estão package.json_/
  - <code>yarn add -D jest @types/jest @babel/preset-typescript </code>
  - <code>yarn add -D @testing-library/react @testing-library/jest-dom</code>

### Styled Components
- Biblioteca de estilos (necessita alterações no arquivo .babelrc e [_document.tsx](https://github.com/React-Avancado/boilerplate/blob/master/src/pages/_document.tsx))
  - <code>yarn add -D @types/styled-components babel-plugin-styled-components</code>
  - <code>yarn add styled-components</code>
  - <code>yarn add -D jest-styled-components</code>

### StoryBook
- Biblioteca de testes (arquivos de configuração dentro da pasta storybook)
  - <code>npx sb init</code>

### Usar
- <code>yarn create next-app -e https://github.com/drummerpva/boilerplate-next-ts</code>
