---
sidebar_position: 1
title: Fluxo do Usuário
description: Jornada completa do usuário na aplicação
---

# Fluxo do Usuário

## Jornada de primeiro acesso

```mermaid
flowchart TD
    A[Landing Page /] --> B{Clicou em Cadastrar?}
    B -->|Sim| C[/cadastro]
    B -->|Não| D[/login]
    C --> E[Preenche formulário]
    E --> F[POST /usuarios]
    F --> G[Sucesso → /login]
    D --> H[Preenche credenciais]
    H --> I[POST /usuarios/login]
    I --> J[Token salvo → /home]
```

## Jornada autenticada — planos de aula

```mermaid
flowchart TD
    A[/home] --> B[Ação rápida ou menu]
    B --> C[/planos/novo]
    B --> D[/planos]
    C --> E[Preenche formulário]
    E --> F[Busca habilidades BNCC]
    F --> G[Seleciona habilidades]
    G --> H[Salvar]
    H --> I[POST /planos-aula]
    I --> D
    D --> J{Ação no plano}
    J -->|Editar| K[/planos/editar/:id]
    J -->|Duplicar| L[POST cópia]
    J -->|Excluir| M[DELETE]
    J -->|PDF| N[Gera no browser]
    J -->|Excel| O[Gera no browser]
    K --> P[PUT /planos-aula/:id]
    P --> D
```

## Telas e responsabilidades

| Etapa | Tela | Ação principal |
|---|---|---|
| 1 | Landing | Conhecer o produto; ir para login/cadastro |
| 2 | Cadastro | Criar conta |
| 3 | Login | Autenticar |
| 4 | Home | Ver resumo; acessar funcionalidades |
| 5 | Novo plano | Criar plano com BNCC |
| 6 | Meus planos | Gerenciar planos existentes |
| 7 | Editar plano | Alterar plano salvo |

## Estados de feedback ao usuário

| Estado | Onde aparece | Indicador |
|---|---|---|
| Loading | Login, Cadastro | Flag `isLoading` |
| Erro | Login, Cadastro | `errorMessage` |
| Sucesso | Cadastro | `successMessage` + redirect |
| Confirmação | Excluir/Duplicar plano | `confirm()` nativo |
| Sucesso | Salvar plano | `alert()` nativo |

## Logout

1. Usuário clica em "Sair" no `TopbarComponent`
2. `AuthService.logout()` remove token
3. Redirecionamento para `/login`
