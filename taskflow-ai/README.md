# TaskFlow AI 🚀

Managed tasks with the speed of thought. A premium, production-grade SaaS productivity platform.

## Features 🌟

- **Ultra Modern UI**: Glassmorphism, smooth Framer Motion animations, and custom design system.
- **AI Core**: Built-in task breakdown, smart scheduling, and a productivity coach powered by GPT-4.
- **Deep Work Systems**: Integrated Pomodoro timer, focus modes, and XP gamification.
- **Collaboration**: Shared workspaces, team member roles, and real-time feel.
- **Advanced UX**: Keyboard shortcuts (Alt+Key), Command Palette (⌘K), and Quick Action modals.
- **Analytics**: Beautiful Recharts-powered heatmaps and productivity trends.
- **PWA Ready**: Offline-capable manifest and mobile-responsive layout.

## Tech Stack 🛠️

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4, Framer Motion
- **Database**: PostgreSQL (Prisma ORM)
- **Auth**: NextAuth.js (Google & GitHub)
- **State**: Zustand
- **AI**: OpenAI API

## Getting Started 🏁

1.  **Clone & Install**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Copy `.env.example` to `.env` and add your keys.
    ```bash
    cp .env.example .env
    ```

3.  **Database Migration**:
    ```bash
    npx prisma db push
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Keyboard Shortcuts ⌨️

- `⌘K`: Open Command Palette / Search
- `Alt + N`: Create New Task
- `Alt + D`: Go to Dashboard
- `Alt + T`: Go to Tasks
- `Alt + A`: Go to Analytics
- `Alt + C`: Go to Calendar

---
Built with ❤️ by TaskFlow AI Team.
