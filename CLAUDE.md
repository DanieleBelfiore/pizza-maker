# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Type-check + production build
npm run type-check   # TypeScript check only (vue-tsc)
npm run build-only   # Production build without type-check
npm run preview      # Preview production build
```

No test suite configured.

## Architecture

Single-page Vue 3 app — no backend, no state management library.

- **`src/views/HomeView.vue`** — the entire application. All dough calculator logic lives here as `ref`/`computed` in `<script setup>`.
- **`src/router/index.ts`** — single route `/` → `HomeView`.
- **`src/App.vue`** — root component, just renders `<RouterView />`.
- **`@/`** alias resolves to `src/`.

### Calculator logic (HomeView)

Dough weights are computed via baker's percentages:

```
totalPercentage = 100 + hydration + saltPct + yeastPct
flour = (doughWeight / totalPercentage) * 100
water = (doughWeight / totalPercentage) * hydration
...
```

All values are `ref<number>` with min/max/step constraints enforced in `updateDoughWeight`, `updateQuantity`, `updateHydration` helpers. Results are multiplied by `quantity` for total amounts. Ingredients section only renders when `quantity > 0` (Vue `<Transition>`).

## Deployment

Deployed to Netlify. `public/_redirects` handles SPA routing.
