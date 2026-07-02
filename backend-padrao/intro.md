---
sidebar_position: 1
title: Introdução
slug: /
---

# Gerenciador de Planos de Aula — Back-end

API REST desenvolvida em **Spring Boot 3.5** para gerenciamento de planos de aula alinhados à **BNCC** (Base Nacional Comum Curricular). O sistema permite que professores cadastrem, consultem e atualizem planos de aula vinculados a habilidades da BNCC, com autenticação baseada em **JWT**.

## Objetivo

Fornecer uma camada de serviço persistente e segura para o front-end Angular, centralizando:

- Cadastro e autenticação de usuários (professores)
- CRUD de planos de aula
- Catálogo de habilidades BNCC por disciplina
- Associação entre planos e habilidades

## Stack tecnológica

| Tecnologia | Versão / Uso |
|---|---|
| Java | 21 |
| Spring Boot | 3.5.5 |
| Spring Data JPA | Persistência |
| Spring Security | Autenticação e autorização |
| PostgreSQL | Banco de dados |
| JJWT | Geração e validação de tokens JWT |
| Lombok | Redução de boilerplate |
| Maven | Gerenciamento de dependências |

## Repositório

- **GroupId:** `com.github.gabrielbachega1`
- **ArtifactId:** `gerenciador-planos-aula`
- **Versão:** `0.0.1-SNAPSHOT`
- **Classe principal:** `GerenciadorPlanosAulaApplication`

## Endpoints base

Por padrão, a aplicação sobe na porta **8080** (configurável via Spring Boot):

```
http://localhost:8080
```

Todas as rotas protegidas exigem o header:

```
Authorization: Bearer <token_jwt>
```

## Próximos passos

- [Instalação e execução](./getting-started/installation)
- [Variáveis de ambiente](./getting-started/configuration)
- [Visão geral da arquitetura](./architecture/overview)
- [Referência da API REST](./api/overview)
