# Mahadev Manerikar — AI Engineer Portfolio

A VS Code-inspired portfolio showcasing my work in AI engineering, agent orchestration, RAG, Azure, and backend development. Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Features

- VS Code-style workspace with Explorer, tabs, activity bar, terminal panel, and command palette
- Responsive portfolio sections for experience, technical skills, projects, education, and contact
- Persistent dark/light theme toggle (dark is the default)
- Individual technology and Azure service icons
- Contact form powered by Formspree
- Resume download and links to GitHub and LinkedIn

## Run locally

### Requirements

- Node.js 20.9 or newer
- npm

### Setup

Clone the repository from its GitHub page, then run these commands from the project directory:

```bash
npm install
```

The contact form uses the Formspree endpoint configured in the app by default. To override it for your own deployment, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to your Formspree form endpoint.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Customize

- Portfolio content, navigation, project details, contact links, and resume URL: `app/components/portfolio.tsx`
- Theme and responsive styles: `app/globals.css`
- Profile image and skill logos: `public/`
- Formspree endpoint: `.env.local` using `.env.example` as a template

## License

The project source code is available under the MIT License. See [LICENSE](./LICENSE). Third-party logos, libraries, and other assets remain subject to their respective licenses; personal content and imagery are not relicensed by this notice.
