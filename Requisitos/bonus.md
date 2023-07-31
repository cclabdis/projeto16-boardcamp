## Bônus (opcional)

- Buscas por query string
    
    <aside>
    🔍 Pesquise por **SQL LIKE operator** para realizar esses bônus.
    
    </aside>
    
    - **GET** `/games`
        - Caso seja passado um parâmetro `name` na **query string** da requisição, os jogos devem ser filtrados para retornar somente os que começam com a string passada (case insensitive).
            - Ex: Para a rota `/games?name=ba`, deve ser retornado uma array somente com os jogos que comecem com "ba", como "Banco Imobiliário", "Batalha Naval", etc.
    - **GET** `/customers`
        - Caso seja passado um parâmetro `cpf` na **query string** da requisição, os clientes devem ser filtrados para retornar somente os com CPF que comecem com a string passada.
            - Ex: Para a rota `/customers?cpf=012`, deve ser retornado uma array somente com os clientes que o CPF comece com "012", como "01234567890", "01221001200", etc.
    - **GET** `/rentals`
        - Caso seja passado um parâmetro `customerId` na **query string** da requisição, os aluguéis devem ser filtrados para retornar somente os do cliente solicitado.
            - Ex: Para a rota `/rentals?customerId=1`, deve ser retornado uma array somente com os aluguéis do cliente com id 1.
        - Caso seja passado um parâmetro `gameId` na **query string** da requisição, os aluguéis devem ser filtrados para retornar somente os do jogo solicitado.
            - Ex: Para a rota `/rentals?gameId=1`, deve ser retornado uma array somente com os aluguéis do jogo com id 1.
- Paginação
    
    <aside>
    🔍 Pesquise por **SQL OFFSET** para realizar esses bônus.
    
    </aside>
    
    - **GET** `/games`, `/customers`, `/rentals`
        - Caso seja passado um parâmetro `offset` na **query string** da requisição, deve-se obter somente os registros no banco após o offset determinado.
            - Ex: Se for passado `offset=20` e existirem 100 produtos no banco, só devem ser retornados os 80 últimos (do 21º ao 100º).
        - Caso seja passado um parâmetro `limit` na query string da requisição, deve-se limitar a quantidade de registros retornados a esse limite no máximo.
            - Ex: se for passado `limit=30` e existirem 100 produtos no banco, só devem ser retornados os 30 primeiros.
        - Caso tanto `limit` quanto `offset` sejam passados, ambos devem ser aplicados.
            - Ex: Se for passado `offset=20&limit=30`, caso existam 100 produtos no banco, só devem ser retornados os produtos do 21º ao 50º.
- Ordenação
    - **GET** `/games`, `/customers`, `/rentals`
        - Caso seja passado um parâmetro `order` na **query string** da requisição, deve-se retornar os registros ordenados pela coluna passada em ordem ascendente.
            - Ex: se for passado `order=name`, os registros devem ser ordenados alfabeticamente pela coluna `name`.
        - Caso seja passado também um parâmetro `desc` na **query string**, deve-se inverter esta ordem para descendente.
            - Ex: se for passado `order=name&desc=true`, os registros devem ser ordenados alfabeticamente invertidos pela coluna `name`.
- Filtragem por data
    - **GET** `/rentals`
        - Caso seja passado um parâmetro `status` na **query string** da requisição, os aluguéis devem ser filtrados para retornar somente aqueles que estão naquele estado.
            - Para a rota `/rentals?status=open`, deve ser retornado uma array somente com os aluguéis não finalizados
            - Para a rota `/rentals?status=closed`, deve ser retornado uma array somente com os aluguéis finalizados
        - Caso seja passado um parâmetro `startDate` na **query string** da requisição, os aluguéis devem ser filtrados para retornar somente os que foram feitos a partir daquela data.
            - Ex: Para a rota `/rentals?startDate=2021-06-10`, deve ser retornado uma array somente com os aluguéis com `rentDate` maior ou igual a `2021-06-10`