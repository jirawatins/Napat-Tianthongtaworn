# Napat Portfolio

A modern, interactive personal portfolio website showcasing professional experience, skills, and projects with smooth animations and a contemporary design.

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme Toggle** - Users can switch between light and dark modes
- **Smooth Scrolling** - Elegant scroll animations powered by Lenis
- **Modern Animations** - Smooth transitions and motion effects using Motion library
- **3D Graphics** - Three.js integration for engaging visual elements
- **Component-Based** - Modular React components for easy maintenance and scalability
- **Interactive UI** - Floating dock navigation and rich interactive components
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Performance Optimized** - Built with Vite for fast development and production builds

## 📋 Project Structure

```
napat-portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact form/section
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── FloatingDock.tsx    # Floating navigation dock
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── ThemeToggle.tsx     # Theme switcher component
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Skeleton.tsx
│   │       └── Spinner.tsx
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme context provider
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main App component
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles
│   └── types.ts                # TypeScript type definitions
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── metadata.json               # Project metadata
└── README.md                   # This file

```

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Motion (formerly Framer Motion)
- **Smooth Scrolling**: Lenis
- **3D Graphics**: Three.js with React Three Fiber
- **UI Components**: Custom built with Lucide React icons
- **Charts**: Recharts

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Bun package manager (or npm/yarn as alternatives)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd napat-portfolio
```

2. Install dependencies:
```bash
bun install
```

### Development

Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:3000`

### Build

Create a production build:
```bash
bun run build
```

### Preview

Preview the production build locally:
```bash
bun run preview
```

### Cleanup

Remove the dist directory:
```bash
bun run clean
```

### Linting

Check TypeScript types without emitting:
```bash
bun run lint
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start dev server on port 3000 |
| `build` | Build for production |
| `preview` | Preview production build |
| `clean` | Remove build artifacts |
| `lint` | Type check with TypeScript |

## 🎨 Customization

### Theme
Edit the `ThemeContext.tsx` to customize color schemes and theme settings.

### Content
Update component files in `src/components/` to customize:
- Hero section copy
- About section content
- Experience/timeline items
- Skills and technologies
- Contact information

### Styling
Tailwind CSS classes are used throughout. Modify styles in component files or update `index.css` for global styles.

## 📱 Components

- **Navbar** - Navigation header with links to sections
- **Hero** - Landing section with introduction
- **About** - Information about professional background
- **Experience** - Timeline of work experience
- **Skills** - Showcase of technical skills
- **Contact** - Contact form/information section
- **FloatingDock** - Floating navigation elements
- **ThemeToggle** - Dark/light mode switcher

## 🔧 Configuration

### Vite Config (`vite.config.ts`)
Custom Vite configuration with React plugin and Tailwind CSS support.

### TypeScript Config (`tsconfig.json`)
Configured for React JSX with strict type checking.

### Metadata
Update `metadata.json` to customize:
- Portfolio name
- Meta description for SEO

## 🚀 Deployment

The project can be deployed to:
- **Vercel** - Zero-config deployment
- **Netlify** - Drag and drop or Git integration
- **GitHub Pages** - Static hosting
- **Traditional Hosting** - Any static host via `bun run build`

The `dist/` folder contains all production-ready files.

## 📦 Dependencies Overview

### Core
- `react` & `react-dom` - UI library
- `vite` & `@vitejs/plugin-react` - Build tooling

### Styling & Animation
- `tailwindcss` & `@tailwindcss/vite` - Utility-first CSS
- `motion` - Animation library
- `lenis` - Smooth scrolling

### 3D & Graphics
- `three` - 3D library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber

### UI & Utilities
- `lucide-react` - Icon library
- `recharts` - Chart library
- `clsx` & `tailwind-merge` - CSS utilities
- `dotenv` - Environment variables

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see individual files for SPDX headers.

## 👥 Author

**Napat Tianthongtaworn**

## 🔗 Links

- [Live Portfolio](#) - Your deployed portfolio link
- [GitHub](#) - Your GitHub profile
- [LinkedIn](#) - Your LinkedIn profile

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Integrate with CMS for dynamic content
- [ ] Add project showcase gallery
- [ ] Implement contact form backend
- [ ] Add more interactive 3D elements
- [ ] Performance optimizations
- [ ] Accessibility improvements
- [ ] Multi-language support

## ⚠️ Notes

- This project uses the Apache License 2.0
- Ensure all environment variables are set up if required
- For production deployment, optimize images and assets

---

**Last Updated**: February 2026
