# 🎬 Movie Game

A guess which of two movies has the higher rating. Keep your streak alive against the clock, then save your score to the global leaderboard.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6.svg?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-4-646CFF.svg?logo=vite&logoColor=white)

## How It Works

You're shown two movies side by side and asked: **"Which movie has the highest rating?"**

- Pick the higher-rated movie to earn a point and extend your streak.
- A countdown timer runs each round — let it expire and it's game over.
- Guess wrong and it's game over.
- When the game ends, submit your name to save your streak to the highscores leaderboard.

## Tech Stack

| Area         | Technology                                        |
| ------------ | ------------------------------------------------- |
| Framework    | [React 18](https://reactjs.org/)                  |
| Language     | [TypeScript 4.9](https://www.typescriptlang.org/) |
| Build tool   | [Vite 4](https://vitejs.dev/)                     |
| Routing      | [React Router 6](https://reactrouter.com)         |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com/)        |
| Backend / DB | [Supabase](https://supabase.com/)                 |
| Testing      | [Vitest](https://vitest.dev/)                     |
| Tooling      | ESLint, Prettier, Husky, commitlint, EditorConfig |

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) 18+
- A [Supabase](https://supabase.com/) project (for the highscores leaderboard)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd movie_game

# Install dependencies
npm install
```

### Run

```bash
# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build (http://localhost:3000)
npm run serve
```

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the Vite development server    |
| `npm run build` | Type-check and build for production  |
| `npm run serve` | Preview the production build locally |
| `npm run lint`  | Lint the codebase with ESLint        |
| `npm run test`  | Run the test suite with Vitest       |

## Project Structure

The project follows a feature-based ("bulletproof React") structure:

```
src/
├── app/          # App entry, providers, router, and route pages
│   └── routes/   # Landing, Game, Highscores, NotFound
├── components/   # Shared UI (Button, Input, Modal, Progressbar, …)
│   └── errors/   # Error boundary fallbacks
├── config/       # Env and route path constants
├── features/     # Domain features
│   ├── game/     # Game logic, movie data, components
│   └── highscores/ # Leaderboard API and components
├── hooks/        # Reusable hooks (e.g. useKeyboardShortcut)
├── lib/          # Third-party clients (Supabase)
└── utils/        # Generic helpers
```

## Testing

```bash
npm run test
```

Unit tests cover the core game utilities (`getHighestRating`, `getRandomArrayElements`, `getQualityPoster`) and live in the `__tests__/` directory.
