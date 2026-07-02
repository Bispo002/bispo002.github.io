---
sidebar_position: 1
title: Componentes
description: Referência de todos os componentes da aplicação
---

# Componentes

Todos os componentes são **standalone** e seguem a estrutura padrão Angular: `.ts`, `.html`, `.scss` e `.spec.ts`.

## Componente raiz

### AppComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-root` |
| Arquivo | `src/app/app.component.ts` |
| Responsabilidade | Shell da aplicação; renderiza `<router-outlet>` |
| Encapsulation | `ViewEncapsulation.None` |

---

## Páginas públicas

### LandingPageComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-landing` |
| Rota | `/` |
| Arquivo | `src/app/landing-page/` |

Página institucional do **PlanoFácil** com:

- Lista de features (`features[]`) — 6 cards descritivos
- Passos de uso (`steps[]`) — fluxo em 4 etapas
- Links para cadastro e login via `RouterModule`

### TelaLoginComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-tela-login` |
| Rota | `/login` |
| Dependências | `AuthService`, `ReactiveFormsModule` |

Funcionalidades:

- Formulário reativo com validação
- Toggle de visibilidade de senha
- Estado de loading durante autenticação
- Mensagem de erro para credenciais inválidas
- Navegação para cadastro e recuperação de senha

### TelaCadastroComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-tela-cadastro` |
| Rota | `/cadastro` |
| Dependências | `AuthService` |

Funcionalidades:

- Validação de senha forte (maiúscula + caractere especial)
- Validador customizado de confirmação de senha
- Integração com `POST /usuarios`
- Tratamento de conflito (email já cadastrado — HTTP 409)

### TelaRecuperarSenhaComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-tela-recuperar-senha` |
| Rota | `/recuperar` |

:::info Status
Formulário funcional apenas na UI. Submit simulado sem chamada HTTP ao backend.
:::

---

## Páginas autenticadas

### HomeComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-home` |
| Rota | `/home` |
| Dependências | `PlanoService`, `TopbarComponent` |

Exibe:

- Estatística de planos criados (via `listarMeusPlanos()`)
- Cards de ações rápidas (criar plano / meus planos)

### ListaPlanosComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-lista-planos` |
| Rota | `/planos` |
| Dependências | `PlanoService`, jsPDF, xlsx |

Ações disponíveis por plano:

| Ação | Método | Descrição |
|---|---|---|
| Editar | `editarPlano(id)` | Navega para `/planos/editar/:id` |
| Excluir | `excluirPlano(id)` | `DELETE` com confirmação |
| Duplicar | `duplicarPlano(plano)` | Clona plano com sufixo "(Cópia)" |
| Exportar PDF | `exportarPDF(id)` | Gera PDF formatado via jsPDF |
| Exportar Excel | `exportarExcel(id)` | Gera `.xlsx` via SheetJS |

### PlanoAulaComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-plano-aula` |
| Rotas | `/planos/novo`, `/planos/editar/:id` |
| Dependências | `PlanoService`, `BnccService`, `TopbarComponent` |

Modos de operação:

- **Criação** — rota `/planos/novo` (sem parâmetro `:id`)
- **Edição** — rota `/planos/editar/:id` (carrega dados via `obterPorId`)

Campos do formulário:

| Campo | Validação |
|---|---|
| serie | required |
| disciplina | required |
| data | opcional |
| duracao | min(1) |
| tema | opcional |
| conteudo | opcional |
| objetivos | opcional |
| materiais | opcional |
| metodologia | opcional |
| avaliacao | opcional |
| referencia | opcional |
| habilidadesBnccIds | array de IDs |

Funcionalidades BNCC:

- Busca com debounce de 400ms (mínimo 3 caracteres)
- Seleção múltipla de habilidades
- Remoção individual de habilidades selecionadas

Disciplinas disponíveis: 15 opções (Ensino Fundamental e Médio).

---

## Componentes compartilhados

### TopbarComponent

| Propriedade | Valor |
|---|---|
| Seletor | `app-topbar` |
| Arquivo | `src/app/components/topbar/` |

Sidebar responsiva com:

- Menu de navegação (`navItems[]`)
- Dados do usuário logado (`getUserData()`)
- Botão de logout
- Fechamento via ESC (`@HostListener`)
