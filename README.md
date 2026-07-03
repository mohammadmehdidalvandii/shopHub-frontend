# ShopHub — Frontend

A modern e-commerce shop frontend built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Demo:** [shop-hub-sandy-iota.vercel.app](https://shop-hub-sandy-iota.vercel.app)

## 🚀 Tech Stack

- **Next.js 16** — React framework (App Router, Turbopack)
- **React 19** — UI library
- **TypeScript** — Static typing
- **Tailwind CSS v4** — Utility-first styling
- **Zustand** — Lightweight global state management
- **TanStack React Query** — Server state management & data fetching
- **Radix UI** (Alert Dialog, Checkbox, Dialog, Label, Radio Group, Scroll Area, Select, Slider, Tabs) — Accessible UI primitives
- **Lucide React** — Icons
- **Sonner** — Toast notifications
- **class-variance-authority** + **clsx** + **tailwind-merge** — Utility class management for component variants

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammadmehdidalvandii/shopHub-frontend.git
   cd shopHub-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run the production build**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
shopHub-frontend/
├── public/          # Static assets
├── src/             # Application source code
├── next.config.ts    # Next.js configuration
├── package.json       # Dependencies & scripts
├── postcss.config.mjs  # PostCSS configuration
└── tsconfig.json       # TypeScript configuration
```

## ☁️ Deployment

This project is deployed on **Vercel**, the recommended platform for Next.js applications. Any push to the `main` branch can be automatically deployed via Vercel's Git integration.

## 📄 License

This project currently has no specified license.
