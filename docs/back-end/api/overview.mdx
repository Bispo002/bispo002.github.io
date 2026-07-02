---
sidebar_position: 1
title: Visão geral da API
---

# Visão geral da API

Base URL: `http://localhost:8080`

## Autenticação

Rotas protegidas exigem:

```
Authorization: Bearer <token>
Content-Type: application/json
```

Obtenha o token via `POST /usuarios/login`.

## Códigos de resposta HTTP

| Código | Significado |
|---|---|
| `200 OK` | Sucesso com corpo na resposta |
| `201 Created` | Recurso criado |
| `204 No Content` | Sucesso sem corpo (update/delete) |
| `400 Bad Request` | Validação ou regra de negócio violada |
| `401 Unauthorized` | Token ausente, inválido ou credenciais incorretas |
| `404 Not Found` | Recurso não encontrado |

## Recursos

| Prefixo | Documentação | Autenticação |
|---|---|---|
| `/usuarios` | [Usuários](./usuarios) | Parcial (login/cadastro públicos) |
| `/planos-aula` | [Planos de aula](./planos-aula) | Obrigatória |
| `/habilidades-bncc` | [Habilidades BNCC](./habilidades-bncc) | Obrigatória |
| `/plano-habilidade-bncc` | [Vínculos plano-habilidade](./plano-habilidade-bncc) | Obrigatória |

## Formato de datas

- **Data da aula:** ISO 8601 — `"2026-07-01"`
- **Timestamps de auditoria:** ISO 8601 com hora — `"2026-07-01T14:30:00"`

## Formato de UUIDs

Todos os identificadores são UUID v4 em string:

```
"550e8400-e29b-41d4-a716-446655440000"
```

## DTOs compartilhados

### CadastroUsuarioDTO

```json
{
  "nome": "Maria Silva",
  "email": "maria@escola.edu.br",
  "senha": "senha1234"
}
```

| Campo | Validação |
|---|---|
| `nome` | Obrigatório, máx. 150 caracteres |
| `email` | Obrigatório, formato e-mail, máx. 150 |
| `senha` | 8–50 caracteres (obrigatória no cadastro) |

### LoginDTO

```json
{
  "email": "maria@escola.edu.br",
  "senha": "senha1234"
}
```

### PlanoAulaDTO

```json
{
  "serie": "6º ano",
  "disciplina": "MATEMATICA",
  "data": "2026-07-15",
  "duracao": 50,
  "tema": "Frações",
  "conteudo": "Introdução às frações equivalentes",
  "objetivos": "Identificar frações equivalentes",
  "materiais": "Material dourado, caderno",
  "metodologia": "Aula expositiva dialogada",
  "avaliacao": "Lista de exercícios",
  "referencia": "BNCC EF06MA09",
  "habilidadesBnccIds": [
    "uuid-habilidade-1",
    "uuid-habilidade-2"
  ]
}
```
