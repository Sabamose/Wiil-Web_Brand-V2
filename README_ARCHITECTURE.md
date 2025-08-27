# Project Structure

This project follows a Next.js-inspired structure adapted for React + Vite, maintaining the organizational patterns from your previous Next.js application.

## 📁 Folder Structure

```
src/
├── app/                    # Page-based routing (Next.js style)
│   ├── page.tsx           # Home page (/)
│   ├── platform/
│   │   └── page.tsx       # Platform page (/platform)
│   ├── contact/
│   │   └── page.tsx       # Contact page (/contact)
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                  # Utility libraries and configurations
│   └── utils.ts          # Utility functions
├── core/                 # Business logic (new addition)
│   ├── constants/        # Application constants
│   ├── types/           # TypeScript definitions
│   └── utils/           # Core utilities
├── features/            # Feature-based modules (new addition)
│   ├── assistant/       # Assistant management
│   └── conversation/    # Conversation handling
└── shared/              # Shared components and utilities (new addition)
    ├── ui/             # UI component exports
    ├── layout/         # Layout components
    └── hooks/          # Shared hooks
```

## 🔄 Migration from Previous Structure

Your previous Next.js structure has been adapted:

### ✅ Maintained Patterns
- **Page-based routing**: `src/app/` folder contains page components
- **Components organization**: Shared components in `src/components/`
- **Hooks separation**: Custom hooks in `src/hooks/`
- **Lib utilities**: Configuration and utilities in `src/lib/`
- **Global styles**: `globals.css` in the app folder

### 🆕 Enhanced Patterns
- **Core business logic**: Centralized types, constants, utilities
- **Feature modules**: Domain-specific functionality encapsulation
- **Shared resources**: Reusable components and utilities

## 🚀 Key Improvements for CTO

### 1. **Familiar Structure**
- Maintains the page-based organization you're used to
- Components, hooks, and lib folders remain in expected locations
- Easy transition for developers familiar with your previous codebase

### 2. **Enhanced Maintainability**
- **Feature isolation**: Each business domain is self-contained
- **Type safety**: Centralized TypeScript definitions
- **Clear dependencies**: Well-defined import paths and relationships

### 3. **Scalability**
- **Modular architecture**: Add new features without restructuring
- **Page organization**: Easy to add new routes following established patterns
- **Component reusability**: Shared UI components reduce duplication

### 4. **Developer Experience**
- **Consistent patterns**: Standardized folder structure and naming
- **Type-safe development**: Strong TypeScript integration
- **Easy debugging**: Clear separation of concerns

## 📋 Migration Strategy

### Phase 1: Core Setup ✅
- Established app-based page routing
- Maintained existing component structure
- Added enhanced type system and utilities

### Phase 2: Feature Enhancement (Current)
- Implement feature-based modules for complex domains
- Maintain backward compatibility with existing components
- Gradual migration of related functionality

### Phase 3: Advanced Features (Future)
- API service layer implementation
- Advanced state management if needed
- Performance optimizations

## 🛠️ Development Guidelines

### Adding New Pages
1. Create folder in `src/app/[route-name]/`
2. Add `page.tsx` component
3. Update routing in `App.tsx`
4. Follow existing component patterns

### Component Development
- Keep shared components in `src/components/`
- Use feature-specific components in respective feature folders
- Maintain TypeScript interfaces for all props
- Follow established naming conventions

### State Management
- Start with React built-in state (useState, useReducer)
- Use feature hooks for domain-specific state
- Consider global state management only when necessary

This structure maintains the familiar patterns from your Next.js application while adding enterprise-level organization that your CTO will appreciate for long-term maintainability.