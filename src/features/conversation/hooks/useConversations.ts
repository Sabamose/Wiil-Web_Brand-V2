import { useState, useEffect } from 'react';
import { Conversation, Message } from '@/core/types';

// Mock data
const mockConversations: Conversation[] = [
  {
    id: '1',
    assistantId: '1',
    userId: 'user1',
    title: 'Healthcare Inquiry',
    status: 'active',
    messages: [
      {
        id: '1',
        conversationId: '1',
        content: 'Hello, I need help with appointment booking',
        sender: 'user',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        conversationId: '1',
        content: 'I\'d be happy to help you book an appointment. What type of appointment are you looking for?',
        sender: 'assistant',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setConversations(mockConversations);
      } catch (err) {
        setError('Failed to fetch conversations');
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const createConversation = async (data: Omit<Conversation, 'id' | 'createdAt' | 'updatedAt' | 'messages'>) => {
    const newConversation: Conversation = {
      ...data,
      id: Math.random().toString(36).substring(7),
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setConversations(prev => [...prev, newConversation]);
    return newConversation;
  };

  const addMessage = async (conversationId: string, content: string, sender: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Math.random().toString(36).substring(7),
      conversationId,
      content,
      sender,
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setConversations(prev =>
      prev.map(conv =>
        conv.id === conversationId
          ? { ...conv, messages: [...conv.messages, newMessage], updatedAt: new Date() }
          : conv
      )
    );

    return newMessage;
  };

  return {
    conversations,
    loading,
    error,
    createConversation,
    addMessage,
  };
};