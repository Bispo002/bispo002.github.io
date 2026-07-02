---
sidebar_position: 3
title: Build e Deploy
description: Processo de build, otimizações e publicação
---

# Build e Deploy

## Build de produção

```bash
npm run build
```

### Configurações aplicadas

| Configuração | Valor |
|---|---|
| Output | `dist/front-gerenciador-planos-aula/` |
| Environment | `environment.ts` (produção) |
| Output hashing | `all` (cache busting) |
| Optimization | Habilitada (padrão production) |

### Budgets

Limites configurados em `angular.json`:

```json
{
  "type": "initial",
  "maximumWarning": "1.5mb",
  "maximumError": "2mb"
}
```

Se o bundle exceder 2 MB, o build falha.

## Build de desenvolvimento

```bash
ng build --configuration development
```

| Configuração | Valor |
|---|---|
| Optimization | Desabilitada |
| Source maps | Habilitados |
| Environment | `environment.development.ts` |

## Deploy estático

O Angular gera arquivos estáticos (HTML, JS, CSS) que podem ser hospedados em:

- **Nginx / Apache** — servir `dist/front-gerenciador-planos-aula/`
- **Vercel / Netlify** — deploy direto do diretório `dist`
- **Railway / Render** — container com servidor estático

### Configuração de SPA routing

Como é uma SPA, o servidor web deve redirecionar rotas desconhecidas para `index.html`:

**Nginx exemplo:**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Variáveis de ambiente em produção

Antes do deploy, confirme que `src/environments/environment.ts` aponta para a URL correta da API de produção:

```typescript
apiUrl: 'https://extensao-unifil-production-82a8.up.railway.app'
```

## Dependências externas (CDN)

O `index.html` carrega Font Awesome via CDN:

```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
```

Em ambientes offline ou com CSP restritivo, considere servir os assets localmente.

## Checklist de deploy

- [ ] `environment.ts` com URL de produção correta
- [ ] `npm run build` sem erros de budget
- [ ] Backend acessível pela URL configurada
- [ ] CORS habilitado no backend para o domínio do front-end
- [ ] SPA fallback configurado no servidor web
- [ ] HTTPS habilitado

## CI/CD sugerido

Pipeline mínimo recomendado:

```yaml
steps:
  - npm ci
  - npm run build
  - npm test -- --watch=false --browsers=ChromeHeadless
  - deploy dist/front-gerenciador-planos-aula/
```

:::note
Não há pipeline CI/CD configurado no repositório atualmente.
:::
