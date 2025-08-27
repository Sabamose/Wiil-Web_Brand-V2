// Global type definitions
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  avatar?: string;
}

export interface Assistant extends BaseEntity {
  name: string;
  role: string;
  language: string;
  voice: string;
  industry: string;
  isActive: boolean;
}

export interface Conversation extends BaseEntity {
  assistantId: string;
  userId: string;
  title: string;
  status: 'active' | 'completed' | 'archived';
  messages: Message[];
}

export interface Message extends BaseEntity {
  conversationId: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// UI Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}