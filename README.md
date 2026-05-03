# Tumelo Same — Portfolio

Personal portfolio website for Tumelo Same, backend and cloud engineer, Amazon SDE intern, and final-year Computer Science student at the University of Pretoria.

**Live site:** https://tumelo-same.github.io/tumelo-portfolio/

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7
- **Styling:** Tailwind CSS 4, Shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Routing:** Wouter
- **Server:** Express.js (static SPA serving)
- **Testing:** Vitest, React Testing Library
- **Deployment:** GitHub Pages via GitHub Actions

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Testing

```bash
pnpm test
```

60 unit tests covering all sections, navigation, responsiveness, and accessibility.

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.
