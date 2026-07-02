---
sidebar_position: 2
title: Configuração
---

# Configuração

As configurações da aplicação ficam em `src/main/resources/application.yml`.

## Variáveis de ambiente obrigatórias

| Variável | Descrição | Exemplo |
|---|---|---|
| `PROD_DB_HOST` | Host do PostgreSQL | `localhost` |
| `PROD_DB_PORT` | Porta do PostgreSQL | `5432` |
| `PROD_DB_NAME` | Nome do banco | `gerenciador_planos_aula` |
| `PROD_DB_USERNAME` | Usuário do banco | `postgres` |
| `PROD_DB_PASSWORD` | Senha do banco | `sua_senha` |
| `JWT_SECRET` | Chave secreta JWT em **Base64** | Ver abaixo |

### Gerando o JWT_SECRET

A chave deve ser uma string codificada em Base64 com tamanho mínimo compatível com HMAC-SHA (256 bits):

```bash
openssl rand -base64 32
```

Defina o valor gerado na variável `JWT_SECRET`.

## application.yml

```yaml
spring:
  application:
    name: gerenciador-planos-aula

  datasource:
    url: jdbc:postgresql://${PROD_DB_HOST}:${PROD_DB_PORT}/${PROD_DB_NAME}
    username: ${PROD_DB_USERNAME}
    password: ${PROD_DB_PASSWORD}
    driver-class-name: org.postgresql.Driver

  jpa:
    show-sql: true
    hibernate:
      ddl-auto: none
    properties:
      hibernate:
        format_sql: true

jwt:
  secret: ${JWT_SECRET}
  expiration: 3600000
```

## JWT — expiração do token

| Propriedade | Valor | Descrição |
|---|---|---|
| `jwt.expiration` | `3600000` | Tempo de vida do token em milissegundos (**1 hora**) |

## JPA / Hibernate

| Propriedade | Valor | Efeito |
|---|---|---|
| `show-sql` | `true` | Exibe SQL no console (útil em desenvolvimento) |
| `ddl-auto` | `none` | Não altera o schema automaticamente |
| `format_sql` | `true` | Formata o SQL exibido no log |

## Exemplo de `.env` local

```env
PROD_DB_HOST=localhost
PROD_DB_PORT=5432
PROD_DB_NAME=gerenciador_planos_aula
PROD_DB_USERNAME=postgres
PROD_DB_PASSWORD=postgres
JWT_SECRET=<sua-chave-base64>
```

> Em produção, injete essas variáveis pelo provedor de hospedagem (Railway, Render, etc.) e **nunca** commite credenciais no repositório.
