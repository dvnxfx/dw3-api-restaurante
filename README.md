# API - Restaurante
Esta API é utilizada para gerenciar um catálogo de restaurantes, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre os pratos.

## Endpoints
### - GET ALL /pratos
Esse endpoint é responsável por retornar a listagem de todos os pratos cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os pratos.

Exemplo de resposta:

```
{
    "pratos": [
        {
            "id":1,
            "name": "Vatapá Paraense",
            "price": 45.00,
            "status": true,
            "descriptions": [
                {
                    "type": "Entrada",
                    "ingredients": "Camarão, Leite de coco, Farinha de trigo...",
                    "hmpds": "1"
                }
            ]
        },
        {
            "id":2,
            "name": "Tacacá",
            "price": 37.90,
            "status": true,
            "descriptions": [
                {
                    "type": "Entrada",
                    "ingredients": "Camarão, Tucupi, Goma de tapioca, Jambu",
                    "hmpds": "1"
                }
            ]
        }
    ]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor. Não foi possivel listar os pratos."
}
```

### - POST /pratos
Esse endpoint é responsável por cadastrar um novo prato no banco de dados.

#### Parâmetros:
name: Nome do prato.<br>
price: Preço do prato.<br>
status: Diz se o prato esta ativo no sistema.<br>
descriptions: Descrições adicionais sobre o prato(opcional).

Exemplo de requisição:

```
{
    "id":3,
    "name": "Pato no Tucupi",
    "price": 75.00,
    "status": true,
    "descriptions": [
        {
            "type": "Principal",
            "ingredients": "Pato, Tucupi, Jambu",
            "hmpds": "1"
        }
    ]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo prato foi adicionado com sucesso.

Exemplo de resposta: "O prato foi cadastrado com sucesso!"

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor. Não foi possivel deletar os pratos."
}
```


### - DELETE /pratos/
Esse endpoint é responsável por deletar um prato específico pelo seu ID.

#### Parâmetros:
id: ID do prato a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o prato foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: "HTTP/1.1 204 No Content"

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "Ocorreu um erro de validação de ID."
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor. Não foi possivel listar os pratos."
}
```

### - PUT /pratos/
Esse endpoint é responsável por atualizar as informações de um prato específico pelo seu ID.

#### Parâmetros:
id: ID do prato a ser atualizado.<br>
name: Título do prato (opcional).<br>
price: Preço do prato (opcional).<br>
status: Diz se o prato esta ativo no sistema.<br>
descriptions: Descrições adicionais sobre o prato (opcional).<br>

Exemplo de requisição:

```
{
    "id":2,
    "name": "Tacacá",
    "price": 37.90,
    "status": false,
    "descriptions": [
        {
            "type": "Entrada",
            "ingredients": "Camarão, Tucupi, Goma de tapioca, Jambu",
            "hmpds": "1"
        }
    ]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do prato foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "pratos": {
        "id":2,
        "name": "Tacacá",
        "price": 37.90,
        "status": false,
        "descriptions": [
            {
                "type": "Entrada",
                "ingredients": "Camarão, Tucupi, Goma de tapioca, Jambu",
                "hmpds": "1"
            }
        ]
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "Ocorreu um erro de validação de ID."
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor. Não foi possivel listar os pratos."
}
```

### - GET /pratos/
Esse endpoint é responsável por retornar as informações de um prato específico pelo seu ID.

#### Parâmetros:
id: ID do prato a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do prato solicitado.

Exemplo de resposta:

```
{
    "pratos": {
        "id":1,
        "name": "Vatapa Paraense",
        "price": 45.00,
        "status": true,
        "descriptions": [
            {
                "type": "Entrada",
                "ingredients": "Camarão, Leite de coco, Farinha de trigo...",
                "hmpds": "1"
            }
        ]
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "Ocorreu um erro de validação de ID."
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor. Não foi possivel listar os pratos."
}
```
