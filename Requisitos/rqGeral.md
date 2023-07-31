- Geral
    - [X]  A porta utilizada pelo seu servidor deve ser a **5000**.
    - [X]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub **apenas com o código do back-end.**
    - [X]  Faça commits a cada funcionalidade implementada.
    - [X]  **Utilize dotenv.**
    - [X]  Não esqueça de criar o `.gitignore`: a `node_modules` e o `.env` não devem ser commitados.
    - [X]  Seu projeto deve ter, obrigatoriamente, os arquivos `package.json` e `package-lock.json`, que devem estar na raiz do projeto. Eles devem conter todas as **dependências** do projeto.
    - [X]  Adicione o código que inicia o servidor, com a função `listen`, no arquivo `src/app.js`.
    - [X]  Adicione um script no `package.json` para iniciar o servidor rodando `npm start` como no exemplo abaixo:
        
        ```json
        // package.json
        {
          //...
          "scripts": {
            //...
            "start": "node ./src/app.js"
          }
        }
        ```
        
    - [X]  A estrutura de arquivos e pastas do projeto deve seguir o padrão aprendido nas últimas semanas, com as camadas `controllers`, `routers`, `middlewares` e `schemas` (onde for necessário).