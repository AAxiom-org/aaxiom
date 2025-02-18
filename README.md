# React Template

A modern, performant React template with TypeScript, Tailwind CSS, and authentication built-in.

## Features

- ⚡️ **React 18** with Vite for fast development and builds
- 🎨 **Tailwind CSS** with dark mode support
- 📘 **TypeScript** for type safety
- 🔒 **Clerk** for authentication
- 🔄 **TanStack Query** for data fetching
- 🛣️ **React Router** for navigation
- 🔍 **ESLint** for code quality
- 📦 **PNPM** for fast, disk-efficient package management

## Getting Started

1. Clone this template:
```bash
git clone https://github.com/yourusername/react-template.git my-project
cd my-project
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

4. Start the development server:
```bash
pnpm dev
```

## Project Structure

```
src/
  ├── assets/      # Static assets
  ├── components/  # Reusable components
  ├── pages/       # Page components
  ├── types/       # TypeScript types
  ├── App.tsx      # Main app component
  ├── main.tsx     # Entry point
  └── index.css    # Global styles
```

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key

## Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview production build
- `pnpm lint`: Run ESLint

## Styling

This template uses Tailwind CSS with system-driven dark mode support. The color scheme automatically adjusts based on system preferences.

## License

MIT
