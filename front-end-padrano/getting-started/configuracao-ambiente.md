---
sidebar_position: 2
title: Configuração de Ambiente
description: Variáveis de ambiente e configuração da API
---

# Configuração de Ambiente

A aplicação utiliza arquivos de environment do Angular para definir a URL base da API conforme o ambiente de execução.

## Arquivos de environment

### Desenvolvimento

Arquivo: `src/environments/environment.development.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

### Produção

Arquivo: `src/environments/environment.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://extensao-unifil-production-82a8.up.railway.app'
};
```

## Troca automática de environment

O `angular.json` define `fileReplacements` na configuração `development`:

```json
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.development.ts"
  }
]
```

| Comando | Environment utilizado |
|---|---|
| `ng serve` (padrão) | `environment.development.ts` |
| `ng build` (padrão) | `environment.ts` (produção) |
| `ng build --configuration development` | `environment.development.ts` |

## Alterando a URL da API

1. Edite o arquivo de environment correspondente ao ambiente desejado.
2. Reinicie o servidor de desenvolvimento (`ng serve`) se estiver rodando localmente.
3. Para produção, gere um novo build após a alteração.

## Bootstrap da aplicação

O ponto de entrada é `src/main.ts`, que registra os providers globais:

```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
});
```

:::note Observação
O arquivo `src/app/app.config.ts` também define providers (`provideRouter`, `provideZoneChangeDetection`), porém **não é utilizado** no bootstrap atual. A configuração efetiva está em `main.ts`.
:::

## Autenticação — armazenamento local

O token JWT é persistido no `localStorage` com a chave `token`. Não há interceptor HTTP global; cada serviço anexa manualmente o header `Authorization: Bearer <token>`.
