# Shortener URL

## Configuração

### Requisitos

- Docker
- Docker Compose
- Node.js

### Instruções

1. Clone o repositório:
    ```bash
    git clone https://github.com/lucaskelvin777/shortener-url.git
    cd shortener-url
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o MongoDB com Docker:
    ```bash
    docker-compose up -d
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

5. Acesse a aplicação em `http://localhost:3000`.

6. Acesse a documentação da aplicação em: `http://localhost:3000/api-docs`
