# Portfolio Website Project

## Project Overview
Building a modern, minimal included with dynamic componentsportfolio website using React.js and Tailwind CSS and hosting a website . The site will showcase projects, experience, and contact information in a clean, innovative design.

## Tech Stack
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS v3
- **Dev Server**: Vite (runs on `npm run dev` at http://localhost:5173)

## Project Structure
```
src/
  components/
    ui/              // Reusable UI components
      Button.jsx
      Nav.jsx
    layout/          // Layout components
      Header.jsx
      Footer.jsx
  pages/             // Page-level components
    Hero.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
  App.jsx
  assets/            // Images, fonts
```

## Note: The structure of the directory might change later


## Design Reference
- **Inspiration**: https://www.franckpoingt.dev (minimal, clean layout)
- **Current site**: https://janardhanr.netlify.app
- **Design approach**: Minimal and innovative, component-based architecture


## Immediate Next Steps
1. Create folder structure (components/ui, components/layout, pages/, assets/)
2. Build Nav.jsx component (reusable navigation with icons)
3. Build Hero.jsx component (landing page based on Figma design)
4. Set up App.jsx to render Hero
5. Add profile image to assets/
6. Style with Tailwind (mobile-first, responsive)

## Development Guidelines
- Use functional components with hooks
- Mobile-first responsive design with Tailwind
- Keep components small and reusable
- Use Tailwind's utility classes (avoid custom CSS)
- Component file naming: PascalCase.jsx

## Running the Project
```bash
npm run dev     # Start dev server
```

## Notes
- User will provide profile image and other assets
- Navigation should be reusable across all pages/sections
- Future sections: Projects, Experience/Work, Contact
- Single-page app with smooth scrolling between sections