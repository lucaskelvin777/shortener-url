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

2. Copie o arquivo `.env.example` para `.env`:
    ```bash
    cp .env.example .env
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o MongoDB com Docker:
    ```bash
    docker-compose up -d
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

6. Acesse a aplicação em `http://localhost:3000`.

7. Acesse a documentação da aplicação em: `http://localhost:3000/api-docs`
