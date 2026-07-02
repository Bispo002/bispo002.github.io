---
sidebar_position: 1
title: Padrões de Código
description: Convenções e boas práticas adotadas no projeto
---

# Padrões de Código

## Angular

### Componentes standalone

Todos os componentes são standalone. Ao criar novos componentes:

```typescript
@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss']
})
export class ExemploComponent {}
```

### Injeção de dependências

Utilizar constructor injection nos serviços e componentes:

```typescript
constructor(
  private authService: AuthService,
  private router: Router
) {}
```

Functional guards usam `inject()`:

```typescript
const router = inject(Router);
```

### Formulários

Preferir **Reactive Forms** para telas com validação:

```typescript
this.form = this.fb.group({
  campo: ['', [Validators.required]]
});
```

Marcar campos como touched em submit inválido via helper `markFormGroupTouched`.

## TypeScript

- **Strict mode** habilitado — evitar `any` quando possível
- Target ES2022
- Decorators experimentais habilitados

## Estilos

- SCSS por componente (`*.component.scss`)
- Estilos globais mínimos em `src/styles.scss`
- Font Awesome via CDN no `index.html`
- Pacote `@fortawesome/fontawesome-free` também listado em dependências

## Organização de arquivos

```
feature/
├── feature.component.ts
├── feature.component.html
├── feature.component.scss
└── feature.component.spec.ts
```

Serviços em `src/app/services/`, guards em `src/app/guards/`, componentes reutilizáveis em `src/app/components/`.

## Nomenclatura

| Tipo | Padrão |
|---|---|
| Classes | PascalCase |
| Arquivos | kebab-case |
| Variáveis/métodos | camelCase |
| Constantes enum-like | UPPER_SNAKE_CASE (valores de disciplina) |
| Seletores | `app-kebab-case` |

## RxJS

- Sempre fazer `unsubscribe` de subscriptions manuais no `ngOnDestroy`
- Preferir `async` pipe no template quando possível
- Usar operadores adequados: `debounceTime`, `distinctUntilChanged`, `switchMap`

## Tratamento de erros

Padrão atual nos subscribe:

```typescript
.subscribe({
  next: (data) => { /* sucesso */ },
  error: (err) => console.error('Mensagem:', err)
});
```

Para novas features, considerar serviço centralizado de notificações em vez de `alert()` e `confirm()`.

## Prefixo de componentes

Configurado em `angular.json`:

```json
"prefix": "app"
```
