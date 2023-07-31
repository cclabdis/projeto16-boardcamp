[X ]- CRUD de Jogos [Create | Read]
    - Formato de um jogo (tabela `games`)
        
        ```jsx
        {
          id: 1,
          name: 'Banco Imobiliário',
          image: 'http://',
          stockTotal: 3,
          pricePerDay: 1500,
        }
        ```
        
    - Listar jogos
        - **Rota**: **GET** `/games`
        - **Response:** lista dos jogos encontrados, seguindo o formato abaixo.
            
            ```jsx
            [
              {
                id: 1,
                name: 'Banco Imobiliário',
                image: 'http://',
                stockTotal: 3,
                pricePerDay: 1500
              },
              {
                id: 2,
                name: 'Detetive',
                image: 'http://',
                stockTotal: 1,
                pricePerDay: 2500
              },
            ]
            ```
            
    - Inserir um jogo
        - **Rota**: **POST** `/games`
        - **Request**: body no formato:
            
            ```jsx
            {
              name: 'Banco Imobiliário',
              image: 'http://www.imagem.com.br/banco_imobiliario.jpg',
              stockTotal: 3,
              pricePerDay: 1500
            }
            ```
            
        - **Response:** status 201, sem dados
        - **Regras de Negócio:**
            - `name` deve estar presente e não pode estar vazio; `stockTotal` e `pricePerDay` devem ser maiores que 0 ⇒ nesses casos, deve retornar **status 400.**
            - `name` não pode ser um nome de jogo já existente ⇒ nesse caso deve retornar **status 409.**