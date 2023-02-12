### - Instalando as dependencias:

Faça o clone na sua maquina e rode o comando `yarn`

### - Inicializando:

Configure o seu .env , rode o comando `yarn typeorm migration:run -d src/data-source.ts` e depois para inicializar a aplicacao `yarn dev`.

### - Dados esperados:

### - localhost:8000/users -- Rota de criação de cliente:

{
"username":"Teste",
"password":"1234",
"full_name": "Teste Testador",
"contacts": [{
"email": "teste@mail.com.br",
"telephone" :"99999-9999"
}]
}

Resposta Esperada -- 201 Created

{
"id": "31410c7f-5ffa-4ae6-84ef-269f74110867",
"username": "Teste",
"full_name": "Teste Testador",
"createdAt": "2023-12-08T04:54:47.130Z",
"client": [],
"contacts": [
{
"email": "teste@mail.com.br",
"telephone" :"99999-9999"
}
]
}

### - http://localhost:8000/login -- Rota para login

Rota utilizada para fazer o login e pegar o token:

Exemplo de envio:

{
"username": "Teste",
"password": "1234"
}

Resposta Esperada: 200 - Ok

{
"token": string
}
