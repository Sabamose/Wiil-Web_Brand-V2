// Application constants
export const APP_CONFIG = {
  name: 'TraNeXus',
  version: '1.0.0',
  description: 'AI Assistant Platform',
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || '',
    timeout: 30000,
  },
  ui: {
    maxWidth: '1200px',
    breakpoints: {
      mobile: '640px',
      tablet: '768px',
      desktop: '1024px',
      wide: '1280px',
    },
  },
} as const;

export const ROUTES = {
  HOME: '/',
  PLATFORM: '/platform',
  CONTACT: '/contact',
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;