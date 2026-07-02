---
sidebar_position: 4
title: Autenticação e Autorização
description: Fluxo JWT, guard de rotas e gerenciamento de sessão
---

# Autenticação e Autorização

## Modelo de autenticação

A aplicação utiliza **JWT (JSON Web Token)** obtido no login e armazenado no `localStorage`.

### Ciclo de vida do token

1. Usuário envia credenciais em `/login`
2. Backend retorna `{ token: "..." }`
3. `AuthService.saveToken()` persiste em `localStorage` (chave: `token`)
4. Requisições autenticadas incluem `Authorization: Bearer <token>`
5. Logout remove o token do `localStorage`

## AuthService

Localização: `src/app/services/auth.service.ts`

| Método | Descrição |
|---|---|
| `cadastrar(dto)` | `POST /usuarios` |
| `login(email, senha)` | `POST /usuarios/login` |
| `saveToken(token)` | Salva JWT no localStorage |
| `getToken()` | Recupera JWT do localStorage |
| `getUserData()` | `GET /usuarios/me` (dados do usuário logado) |
| `logout()` | Remove token do localStorage |

## AuthGuard

Localização: `src/app/guards/auth.guard.ts`

Implementado como **functional guard** (`CanActivateFn`):

```typescript
export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('token');

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
```

### Comportamento

- **Token presente** → acesso permitido
- **Token ausente** → redirecionamento para `/login`

:::warning Limitação atual
O guard verifica apenas a **existência** do token, não sua validade ou expiração. Tokens inválidos resultam em erros HTTP nas chamadas subsequentes, sem logout automático.
:::

## Validações de formulário

### Login (`TelaLoginComponent`)

| Campo | Validações |
|---|---|
| email | required, email |
| password | required, minLength(6) |

### Cadastro (`TelaCadastroComponent`)

| Campo | Validações |
|---|---|
| nome | required, minLength(3) |
| email | required, email |
| password | required, regex (1 maiúscula + 1 especial, min 8 chars) |
| confirmPassword | required, deve coincidir com password |

Tratamento de erro HTTP 409 para email duplicado.

## Recuperação de senha

A tela `/recuperar` (`TelaRecuperarSenhaComponent`) **não está integrada ao backend**. O submit simula sucesso com `setTimeout` e redireciona para login.

## Exibição do usuário logado

O `TopbarComponent` chama `getUserData()` no `ngOnInit` para exibir informações do usuário na barra lateral. Em caso de erro (token inválido), `usuario` permanece `null`.

## Recomendações futuras

- Implementar **HTTP Interceptor** para anexar token automaticamente
- Tratar respostas `401 Unauthorized` com logout e redirect
- Validar expiração do JWT antes de permitir acesso às rotas protegidas
- Migrar token para `sessionStorage` ou cookies `httpOnly` conforme requisitos de segurança
