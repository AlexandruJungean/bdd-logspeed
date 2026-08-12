# BDD Logspeed - International Transport Company Website

<div align="center">
  <img src="public/logo-black.png" alt="BDD Logspeed Logo" width="300"/>
  
  **🚚 The Performance-Dedicated Road Transport Company**
  
  [Live Website](https://bddlogspeed.ro) • [Facebook](https://www.facebook.com/bdd.logspeed)
</div>

---

## 🌍 About

Modern, responsive corporate website for **BDD Logspeed**, a professional road transport and logistics company based in Arad, Romania. Founded in 2016, BDD Logspeed provides efficient and reliable transportation services across 12 European countries.

## ✨ Features

- **🌐 Multi-language Support** - Available in 9 languages:
  - English (default)
  - Romanian (Română)
  - Hungarian (Magyar)
  - German (Deutsch)
  - French (Français)
  - Italian (Italiano)
  - Spanish (Español)
  - Polish (Polski)
  - Czech (Čeština)

- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **📧 Contact Form** - Integrated with Web3Forms for reliable form submissions
- **🗺️ Interactive Map** - Google Maps integration for office location
- **⚡ Performance** - Built with Next.js 16 for optimal loading speeds

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.1 | React Framework |
| [React](https://react.dev/) | 19.2.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styling |
| [Web3Forms](https://web3forms.com/) | - | Form Backend |

## 📦 Project Structure

```
web-bdd-logspeed/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Navbar.tsx
│   │   ├── Stats.tsx
│   │   ├── Values.tsx
│   │   └── WhyUs.tsx
│   ├── i18n/               # Internationalization
│   │   ├── LanguageContext.tsx
│   │   └── translations.ts
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   ├── images/             # Business & stock images
│   ├── logo-black.png      # Dark logo variant
│   ├── logo-white.png      # Light logo variant
│   └── icon.png            # Favicon
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/web-bdd-logspeed.git
   cd web-bdd-logspeed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Web3Forms** (for contact form)
   
   Get your access key from [web3forms.com](https://web3forms.com/) and update `app/components/ContactForm.tsx`:
   ```typescript
   formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🏢 Company Information

**S.C. BE DOUBLE D LOGSPEED S.R.L.**

| Detail | Value |
|--------|-------|
| **CUI** | 35422580 |
| **Registry Number** | J02/58/2016 |
| **Address** | Str. Slatinei, Nr. 2, Arad, Romania |
| **Phone** | +40 755 297 614 |
| **Email** | office@bddlogspeed.ro |
| **Website** | https://bddlogspeed.ro |

## 📊 Company Stats

- 🚛 **10** Modern Trucks
- 📦 **110+** Shipments per Month  
- 🌍 **12** European Countries

## 🌐 Deployment

This website is hosted on cPanel (CyberFolks).

## 📄 License

© 2025 BDD Logspeed. All rights reserved.

---

<div align="center">
  <sub>Built with ❤️ for BDD Logspeed</sub>
</div>
