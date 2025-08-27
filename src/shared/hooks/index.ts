// Re-export existing hooks
export { useIsMobile as useMobile } from '@/hooks/use-mobile';
export { useToast } from '@/hooks/use-toast';

// Custom hooks for shared functionality
export { useLocalStorage } from './useLocalStorage';
export { useDebounce } from './useDebounce';