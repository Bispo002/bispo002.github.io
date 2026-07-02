---
sidebar_position: 2
title: Estrutura do Projeto
description: Organização de diretórios e responsabilidades
---

# Estrutura do Projeto

```
front-gerenciador-planos-aula/
├── angular.json                 # Configuração do Angular CLI
├── package.json                 # Dependências e scripts npm
├── tsconfig.json                # Configuração TypeScript (strict mode)
├── tsconfig.app.json            # TS config específica da aplicação
├── tsconfig.spec.json           # TS config para testes
├── docs/                        # Documentação técnica (Docusaurus-ready)
└── src/
    ├── index.html               # HTML base + Font Awesome CDN
    ├── main.ts                  # Bootstrap da aplicação
    ├── styles.scss              # Estilos globais
    ├── environments/
    │   ├── environment.ts               # Produção
    │   └── environment.development.ts   # Desenvolvimento
    └── app/
        ├── app.component.*      # Componente raiz (RouterOutlet)
        ├── app.config.ts        # Config alternativa (não utilizada no bootstrap)
        ├── app.routes.ts        # Definição de rotas
        ├── components/
        │   └── topbar/          # Barra lateral + navegação autenticada
        ├── guards/
        │   └── auth.guard.ts    # Proteção de rotas autenticadas
        ├── services/
        │   ├── auth.service.ts
        │   ├── plano-service.service.ts
        │   └── bncc.service.ts
        ├── landing-page/        # Página pública inicial
        ├── tela-login/          # Autenticação
        ├── tela-cadastro/       # Registro de usuário
        ├── tela-recuperar-senha/# Recuperação (mock/local)
        ├── home/                # Dashboard autenticado
        ├── lista-planos/        # Listagem e ações em planos
        └── plano-aula/          # Formulário criar/editar plano
```

## Convenções de nomenclatura

| Elemento | Convenção | Exemplo |
|---|---|---|
| Componentes | kebab-case (pasta) + PascalCase (classe) | `tela-login/TelaLoginComponent` |
| Serviços | kebab-case + `.service.ts` | `auth.service.ts` |
| Guards | kebab-case + `.guard.ts` | `auth.guard.ts` |
| Seletores | prefixo `app-` | `app-topbar` |
| Estilos | SCSS por componente | `*.component.scss` |

## Configuração TypeScript

O projeto utiliza **strict mode** completo:

- `strict: true`
- `strictTemplates: true` (Angular)
- `strictInjectionParameters: true`
- `noImplicitReturns: true`
- Target: **ES2022**

## Assets e recursos estáticos

O `angular.json` referencia uma pasta `public/` para assets estáticos. Ícones são carregados via CDN do Font Awesome no `index.html`.

## Saída de build

```
dist/front-gerenciador-planos-aula/
```

Budgets configurados para produção:

| Tipo | Warning | Error |
|---|---|---|
| Bundle inicial | 1.5 MB | 2 MB |
| Estilo por componente | 10 KB | 15 KB |
