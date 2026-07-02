---
sidebar_position: 1
slug: /
title: Introdução
description: Visão geral do front-end PlanoFácil — Gerenciador de Planos de Aula
---

# PlanoFácil — Gerenciador de Planos de Aula

O **PlanoFácil** é uma aplicação web desenvolvida em **Angular 19** que permite a professores e coordenadores pedagógicos criar, gerenciar, exportar e organizar planos de aula alinhados à **BNCC** (Base Nacional Comum Curricular).

## Objetivo do sistema

O front-end atua como interface de usuário para um backend REST, oferecendo:

- Cadastro e autenticação de usuários
- Dashboard com estatísticas de planos criados
- CRUD completo de planos de aula
- Busca e vinculação de habilidades BNCC
- Exportação de planos em **PDF** e **Excel**
- Duplicação de planos existentes

## Stack tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| Angular | 19.x | Framework SPA |
| TypeScript | 5.6.x | Linguagem principal |
| RxJS | 7.8.x | Programação reativa |
| SCSS | — | Estilização por componente |
| jsPDF | 4.x | Geração de PDF no cliente |
| SheetJS (xlsx) | 0.18.x | Geração de Excel no cliente |
| Font Awesome | 6.5 (CDN) | Ícones da interface |
| Karma + Jasmine | — | Testes unitários |

## Público-alvo da documentação

Esta documentação é destinada a:

- Desenvolvedores que irão manter ou evoluir o front-end
- Integradores que precisam conectar o front-end ao backend
- Revisores técnicos que avaliam a arquitetura da solução

## Próximos passos

- [Instalação e execução](./getting-started/instalacao)
- [Configuração de ambiente](./getting-started/configuracao-ambiente)
- [Visão geral da arquitetura](./arquitetura/visao-geral)
