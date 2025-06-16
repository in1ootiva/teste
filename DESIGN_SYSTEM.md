# Design System do Cardápio Digital

Este documento descreve o design system utilizado no Cardápio Digital, baseado nos princípios do Apple Design System e Shadcn UI.

## Cores

### Cores Primárias
- `--color-primary`: #007AFF (Azul principal)
- `--color-primary-hover`: #0056b3 (Azul hover)
- `--color-primary-light`: #E5F2FF (Azul claro)
- `--color-primary-dark`: #004999 (Azul escuro)

### Cores de Estado
- `--color-success`: #34C759 (Verde)
- `--color-warning`: #FF9500 (Laranja)
- `--color-error`: #FF3B30 (Vermelho)
- `--color-info`: #5856D6 (Roxo)

### Cores de Superfície
- `--color-background`: #F5F5F7 (Fundo da página)
- `--color-surface`: #FFFFFF (Superfície de cards)
- `--color-surface-hover`: #F2F2F2 (Hover de superfícies)
- `--color-surface-active`: #E5E5E5 (Estado ativo)

### Cores de Texto
- `--color-text-primary`: #1D1D1F (Texto principal)
- `--color-text-secondary`: #86868B (Texto secundário)
- `--color-text-tertiary`: #6E6E73 (Texto terciário)
- `--color-text-disabled`: #999999 (Texto desabilitado)

### Cores de Borda
- `--color-border`: #D2D2D7 (Borda padrão)
- `--color-border-hover`: #C7C7CC (Borda hover)
- `--color-border-active`: #B8B8B8 (Borda ativa)

## Tipografia

### Família de Fonte
```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Tamanhos de Fonte
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)

### Pesos de Fonte
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Altura da Linha
- `--line-height-tight`: 1.2
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.75

## Espaçamento

Sistema de espaçamento baseado em múltiplos de 4px:
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 0.75rem (12px)
- `--spacing-4`: 1rem (16px)
- `--spacing-5`: 1.25rem (20px)
- `--spacing-6`: 1.5rem (24px)
- `--spacing-8`: 2rem (32px)
- `--spacing-10`: 2.5rem (40px)
- `--spacing-12`: 3rem (48px)

## Bordas

- `--radius-sm`: 0.25rem (4px)
- `--radius-md`: 0.5rem (8px)
- `--radius-lg`: 0.75rem (12px)
- `--radius-xl`: 1rem (16px)
- `--radius-full`: 9999px (Borda circular)

## Sombras

- `--shadow-sm`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.1)
- `--shadow-lg`: 0 10px 15px rgba(0, 0, 0, 0.1)
- `--shadow-xl`: 0 20px 25px rgba(0, 0, 0, 0.15)

## Transições

- `--transition-fast`: 150ms cubic-bezier(0.4, 0, 0.2, 1)
- `--transition-normal`: 250ms cubic-bezier(0.4, 0, 0.2, 1)
- `--transition-slow`: 350ms cubic-bezier(0.4, 0, 0.2, 1)

## Z-index

Sistema de camadas para elementos sobrepostos:
- `--z-index-dropdown`: 1000
- `--z-index-sticky`: 1020
- `--z-index-fixed`: 1030
- `--z-index-modal-backdrop`: 1040
- `--z-index-modal`: 1050
- `--z-index-popover`: 1060
- `--z-index-tooltip`: 1070

## Princípios de Design

1. **Consistência**: Uso consistente de cores, tipografia e espaçamento em toda a aplicação.
2. **Hierarquia Visual**: Uso de tamanhos, pesos e cores para criar hierarquia clara.
3. **Feedback**: Feedback visual imediato para todas as interações do usuário.
4. **Acessibilidade**: Contraste adequado e tamanhos de fonte legíveis.
5. **Responsividade**: Design adaptativo para diferentes tamanhos de tela.

## Componentes

### Cards
- Fundo branco com sombra suave
- Bordas arredondadas
- Transição suave no hover
- Espaçamento interno consistente

### Botões
- Cores primárias para ações principais
- Estados hover e active bem definidos
- Feedback tátil ao clicar
- Bordas arredondadas consistentes

### Controles de Quantidade
- Design minimalista
- Feedback visual claro
- Fácil de tocar em dispositivos móveis
- Estados hover e active bem definidos

### Menu Flutuante
- Posicionamento fixo na parte inferior
- Animações suaves
- Contraste adequado
- Ícones claros e intuitivos

### Carrinho
- Popup que sobe de baixo
- Lista clara de itens
- Controles de quantidade integrados
- Total sempre visível 