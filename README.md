# Frontend – Vue 3 + TypeScript Template

A modern frontend template using **Vue 3**, **TypeScript**, **Pinia** for state management, **Tailwind CSS** for styling, and **unplugin-vue-router** for automatic routing.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- Pinia for state management
- Tailwind CSS for utility-first styling
- Automatic file-based routing with unplugin-vue-router
- Path aliases for clean imports
- Fast development with Vite

## Getting Started

### Install dependencies

```bash
npm install
```

### Development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Path Aliases

Import modules using aliases, e.g.:

```typescript
import { useCounterStore } from '@stores/counter'
import MyComponent from '@components/MyComponent.vue'
```

## Requirements

- Node.js >= 22
- npm >= 10
