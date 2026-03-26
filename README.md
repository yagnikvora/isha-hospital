# Isha Hospital Website

Static hospital website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or later
- npm (comes with Node.js)
- Git

## Run This Project From GitHub

1. Clone the repository:

```bash
git clone <your-github-repo-url>
```

2. Go into the project folder:

```bash
cd isha-hospital
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open in browser:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint checks

## Production Run (Local)

To test production mode on your PC:

```bash
npm run build
npm run start
```

Then open:

```text
http://localhost:3000
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- motion (animations)

## Project Structure (Main)

```text
app/
	page.tsx              # Home page
	about/page.tsx        # About page
	contact/page.tsx      # Contact page
	components/           # Reusable UI sections/components
	data/siteData.ts      # Centralized static content
public/
	images/               # Site images/assets
```

## Common Issues

- Port already in use:

```bash
npm run dev -- -p 3001
```

- Clean install (if dependency issues happen):

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

macOS/Linux:

```bash
rm -rf node_modules package-lock.json
npm install
```
