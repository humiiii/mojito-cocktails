# Mojito Cocktails

A modern, animated cocktail bar website built with **React** and **Vite**. This project features smooth scroll, parallax effects, and beautiful UI animations using GSAP, with a responsive design powered by Tailwind CSS.

## Features

- **React + Vite**: Fast development and build experience.
- **GSAP Animations**: Scroll-triggered and text animations for engaging user experience.
- **Lenis Smooth Scroll**: Enhanced smooth scrolling.
- **Responsive Design**: Mobile-friendly layouts using Tailwind CSS.
- **Cocktail & Mocktail Menus**: Dynamic lists and featured drinks.
- **Art & About Sections**: Showcasing the artistry and story behind the bar.
- **Contact & Socials**: Store info, opening hours, and social media links.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd mojito-cocktails
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Linting

```sh
npm run lint
```

## Project Structure

- `src/` – Main source code
  - `components/` – Reusable UI components (e.g., NavBar)
  - `sections/` – Page sections (Hero, Cocktails, About, Art, Menu, Contact)
  - `constants/` – Data for menus, profiles, features, etc.
  - `index.css` – Tailwind and custom styles
- `public/` – Static assets (images, fonts, videos)
- `vite.config.js` – Vite configuration
- `eslint.config.js` – ESLint configuration

## Main Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GSAP](https://greensock.com/gsap/)
- [Lenis](https://github.com/studio-freight/lenis)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Responsive](https://github.com/contra/react-responsive)
- [gh-pages](https://github.com/tschaub/gh-pages) (for deployment)

## Deployment

This project is configured for deployment to GitHub Pages. To deploy:

```sh
npm run deploy
```

## Credits

- UI/UX and animation inspiration from [JSMastery](https://jsmastery.pro/)
- Images, icons, and assets are for demonstration purposes only.
