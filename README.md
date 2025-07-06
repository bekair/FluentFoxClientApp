# FluentFox Client App

The frontend client application for the FluentFox language learning platform, built with Next.js 15 and TypeScript.

## Related Repositories

- **Frontend**: This repository - Next.js client application
- **Backend**: [FluentFox](https://github.com/bekair/FluentFox) - .NET Web API

## Project Structure

```
FluentFoxClientApp/
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── theme/              # Material-UI theme configuration
│       ├── ThemeProvider.tsx
│       ├── index.ts
│       ├── palette.ts
│       └── typography.ts
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/bekair/FluentFoxClientApp.git
cd FluentFoxClientApp

# Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Connecting to Backend API

This client app is designed to work with the [FluentFox Backend API](https://github.com/bekair/FluentFox).

1. Start the backend API (it will run on https://localhost:7093)
2. Start this frontend client (it will run on http://localhost:3000)
3. The client is pre-configured to connect to the backend API

### API Configuration

The app expects the backend API to be running on:
- **HTTPS**: https://localhost:7093
- **HTTP**: http://localhost:5076

You can modify the API endpoints in the application configuration as needed.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI)
- **Styling**: CSS Modules + MUI Theme
- **Package Manager**: npm
- **Linting**: ESLint

## Features

- 🚀 **Next.js 15**: Latest version with app directory
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Material-UI**: Modern and accessible components
- 🌙 **Theme Support**: Customizable theme system
- 📝 **TypeScript**: Full type safety
- ⚡ **Fast Refresh**: Instant feedback during development
- 🔧 **ESLint**: Code quality and consistency

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development

### File Structure

- Edit pages in `src/app/`
- Add components in `src/components/` (to be created)
- Modify theme in `src/theme/`
- Add static assets in `public/`

### Code Style

- Follow TypeScript best practices
- Use Material-UI components when possible
- Maintain consistent code formatting with ESLint
- Use meaningful component and variable names

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test the application
5. Submit a pull request

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` for static export
- **Docker**: Create Dockerfile for containerized deployment

## License

Private project - All rights reserved
