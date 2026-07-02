---
sidebar_position: 5
title: Vínculos plano-habilidade
---

# API — Vínculos plano-habilidade

**Base path:** `/plano-habilidade-bncc`

Todas as rotas exigem autenticação JWT.

Endpoint dedicado para gerenciar a relação **N:N** entre planos de aula e habilidades BNCC de forma explícita.

> **Alternativa:** ao criar ou atualizar um plano via `POST/PUT /planos-aula`, é possível vincular habilidades passando `habilidadesBnccIds` no DTO, sem usar este recurso.

## POST /plano-habilidade-bncc

Cria um vínculo entre um plano e uma habilidade.

**Body:** `PlanoHabilidadeBNCC`

```json
{
  "plano": { "id": "uuid-do-plano" },
  "habilidade": { "id": "uuid-da-habilidade" }
}
```

**Resposta `200 OK`:** objeto `PlanoHabilidadeBNCC` com `id` gerado.

---

## GET /plano-habilidade-bncc

Lista todos os vínculos existentes.

**Resposta `200 OK`:** array de `PlanoHabilidadeBNCC`

---

## GET /plano-habilidade-bncc/{id}

Busca um vínculo pelo UUID.

**Respostas:**

| Status | Descrição |
|---|---|
| `200 OK` | Vínculo encontrado |
| `404 Not Found` | Vínculo não encontrado |

---

## GET /plano-habilidade-bncc/plano/{planoId}

Lista todos os vínculos de um plano específico.

**Parâmetros:**

| Nome | Tipo | Descrição |
|---|---|---|
| `planoId` | UUID (path) | ID do plano de aula |

**Resposta `200 OK`:** array de `PlanoHabilidadeBNCC`

---

## GET /plano-habilidade-bncc/habilidade/{habilidadeId}

Lista todos os vínculos de uma habilidade específica.

**Parâmetros:**

| Nome | Tipo | Descrição |
|---|---|---|
| `habilidadeId` | UUID (path) | ID da habilidade BNCC |

**Resposta `200 OK`:** array de `PlanoHabilidadeBNCC`

---

## DELETE /plano-habilidade-bncc/{id}

Remove um vínculo plano-habilidade.

**Respostas:**

| Status | Descrição |
|---|---|
| `204 No Content` | Vínculo removido |
| `404 Not Found` | Vínculo não encontrado |

---

## Modelo PlanoHabilidadeBNCC

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | UUID | Identificador do vínculo |
| `plano` | `PlanoAula` | Referência ao plano (`plano_id`) |
| `habilidade` | `HabilidadeBNCC` | Referência à habilidade (`habilidade_bncc_id`) |

## Repositório — consultas customizadas

| Método | Descrição |
|---|---|
| `findByPlanoId(UUID)` | Vínculos por plano |
| `findByHabilidadeId(UUID)` | Vínculos por habilidade |
