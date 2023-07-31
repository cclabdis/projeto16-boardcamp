- Formato de um cliente (tabela `customers`)
    
    ```jsx
    {
      id: 1,
      name: 'João Alfredo',
      phone: '21998899222',
      cpf: '01234567890',
      birthday: '1992-10-25'
    }
    ```
    
- Listar clientes
    - **Rota: GET** `/customers`
    - **Response:** lista com todos os clientes
        
        ```jsx
        [
          {
            id: 1,
            name: 'João Alfredo',
            phone: '21998899222',
            cpf: '01234567890',
            birthday: '1992-10-05'
          },
          {
            id: 2,
            name: 'Maria Alfreda',
            phone: '21998899221',
            cpf: '12345678910',
            birthday: '1994-12-25'
          },
        ]
        ```
        
- Buscar um cliente por id
    - **Rota: GET** `/customers/:id`
    - **Response:** somente o objeto do usuário com o id passado:
        
        ```sql
        {
          id: 1,
          name: 'João Alfredo',
          phone: '21998899222',
          cpf: '01234567890',
          birthday: '1992-10-05'
        }
        ```
        
    - **Regras de Negócio:**
        - Se o cliente com id dado não existir, deve responder com **status 404.**
- Inserir um cliente
    - **Rota:** **POST** `/customers`
    - **Request:** body no formato abaixo
        
        ```sql
        {
          name: 'João Alfredo',
          phone: '21998899222',
          cpf: '01234567890',
          birthday: '1992-10-25'
        }
        ```
        
    - **Response:** status 201, sem dados
    - **Regras de negócio:**
        - `cpf` deve ser uma string com 11 caracteres numéricos; `phone` deve ser uma string com 10 ou 11 caracteres numéricos; `name` deve estar presente e não pode ser uma string vazia; `birthday` deve ser uma data válida; ⇒ nesses casos, deve retornar **status 400.**
        - `cpf` não pode ser de um cliente já existente; ⇒ nesse caso deve retornar **status 409.**
- Atualizar um cliente
    - **Rota:** **PUT** `/customers/:id`
    - **Request:** body no formato:
        
        ```sql
        {
          name: 'João Alfredo',
          phone: '21998899222',
          cpf: '01234567890',
          birthday: '1992-10-05'
        }
        ```
        
    - **Response:** status 200, sem dados.
    - **Regras de negócio:**
        - `cpf` deve ser uma string com 11 caracteres numéricos; `phone` deve ser uma string com 10 ou 11 caracteres numéricos; `name` deve estar presente e não pode ser uma string vazia; `birthday` deve ser uma data válida ⇒ nesses casos, deve retornar **status 400.**
        - `cpf` não pode ser de um cliente já existente ⇒ nesse caso deve retornar **status 409.** Observe que o conflito só deve ocorrer caso o CPF enviado pertença **a outro usuário**. O ****usuário pode desejar atualizar outras propriedades, mas manter seu CPF atual.