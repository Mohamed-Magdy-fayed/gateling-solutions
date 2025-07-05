# Gateling Website

A highly converting WordPress client acquisition website built with Next.js 15 (Canary), TypeScript, Tailwind CSS, shadcn/ui, and Drizzle ORM.

## 🚀 Features

- **High-Converting Landing Page** - Optimized for lead generation
- **Multi-Step Client Form** - Comprehensive requirement gathering
- **Template Showcase** - Organized by category with filtering
- **Admin Dashboard** - Complete request management system
- **Dark Mode Support** - Automatic theme switching
- **Responsive Design** - Mobile-first approach
- **Type-Safe** - Full TypeScript implementation
- **Modern UI** - Built with shadcn/ui components

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin routes group
│   ├── (public)/                 # Public routes group
│   ├── api/                      # API routes
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   └── typography.tsx        # Custom typography components
│   ├── forms/                    # Form components
│   ├── layout/                   # Layout components
│   │   └── header.tsx
│   ├── admin/                    # Admin-specific components
│   └── providers/                # Context providers
│       ├── theme-provider.tsx
│       └── index.tsx
├── features/                     # Feature-based modules
│   ├── client-requests/          # Client request management
│   ├── templates/                # Template showcase
│   └── admin-dashboard/          # Admin dashboard
├── lib/                          # Utility libraries
│   ├── db/                       # Database configuration
│   │   ├── schema.ts             # Drizzle schema
│   │   └── index.ts              # Database connection
│   └── utils.ts                  # Utility functions
├── hooks/                        # Custom React hooks
├── services/                     # API services
├── types/                        # TypeScript type definitions
│   └── index.ts
└── constants/                    # Application constants
    └── index.ts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Canary) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js (planned)
- **Email**: Nodemailer
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Design System

### Colors (Gateling Brand)
- **Primary**: Orange (#FF6B1A) - CTAs, highlights
- **Background**: Warm white (#FFFCF5) - Main background
- **Accent**: Light orange (#FFE4C4) - Subtle highlights
- **Success**: Green - Confirmations
- **Destructive**: Red - Errors

### Typography
Custom typography components with consistent styling:
- `H1`, `H2`, `H3`, `H4` - Headings
- `P` - Paragraphs
- `Lead` - Lead text
- `Muted` - Muted text
- `Large`, `Small` - Size variants

### Dark Mode
- Automatic system theme detection
- Manual toggle available
- Consistent brand colors in both themes

## 📊 Database Schema

### Core Tables
- **client_requests** - Client form submissions and project details
- **templates** - WordPress template showcase
- **admin_users** - Admin authentication and roles
- **communications** - Client-admin communication log
- **status_history** - Request status change tracking

### Key Features
- Type-safe with Drizzle ORM
- Zod validation schemas
- JSON fields for flexible data
- Comprehensive indexing

## 🔄 Request Workflow

1. **New Request** → **In Review** → **Quoted** → **Accepted** → **In Progress** → **Completed**
2. Alternative paths: Needs Clarification, Consultation Scheduled, Negotiating
3. Status management: On Hold, Cancelled, Archived

## 📧 Email System

- Automated notifications for new requests
- Template-based email system
- Admin alerts and client communications
- Follow-up reminders

## 🚦 Getting Started

1. **Clone and Install**
   ```bash
   git clone <repository>
   cd gateling-website
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   # Configure your database and email settings
   ```

3. **Database Setup**
   ```bash
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

4. **Development**
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

## 🔧 Configuration

### Theme Configuration
```typescript
export const THEME_CONFIG = {
  defaultTheme: 'light',
  enableDarkMode: true,
  enableSystemTheme: true,
};
```

### Internationalization (Future)
```typescript
export const I18N_CONFIG = {
  defaultLocale: 'en',
  locales: ['en'], // Expandable
  enableMultiLanguage: false,
};
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px  
  - Desktop: 1024px+
- **Touch Friendly**: 44px minimum touch targets

## 🔒 Security Features

- Type-safe database queries
- Input validation with Zod
- CSRF protection
- Rate limiting (planned)
- Secure authentication (planned)

## 📈 Performance Optimizations

- Next.js App Router with RSC
- Image optimization
- Code splitting
- Lazy loading
- Optimized fonts (Geist)

## 🧪 Testing (Planned)

- Unit tests with Jest
- Integration tests with Playwright
- Component testing with Testing Library

## 🚀 Deployment

- **Recommended**: Vercel (optimized for Next.js)
- **Database**: PostgreSQL (Supabase, Railway, etc.)
- **Email**: SMTP service (Gmail, SendGrid, etc.)

## 📄 License

[Your License Here]

## 🤝 Contributing

[Contributing Guidelines Here]

