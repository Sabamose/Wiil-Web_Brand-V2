import { useState, useEffect } from 'react';
import { Assistant } from '@/core/types';

// Mock data for now - replace with actual API calls
const mockAssistants: Assistant[] = [
  {
    id: '1',
    name: 'Sarah',
    role: 'Receptionist',
    language: 'English',
    voice: 'Warm • Professional',
    industry: 'Healthcare',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'James',
    role: 'Support',
    language: 'English',
    voice: 'Clear • Assured',
    industry: 'Professional',
    isActive: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const useAssistants = () => {
  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssistants = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setAssistants(mockAssistants);
      } catch (err) {
        setError('Failed to fetch assistants');
      } finally {
        setLoading(false);
      }
    };

    fetchAssistants();
  }, []);

  const createAssistant = async (data: Omit<Assistant, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAssistant: Assistant = {
      ...data,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setAssistants(prev => [...prev, newAssistant]);
    return newAssistant;
  };

  const updateAssistant = async (id: string, data: Partial<Assistant>) => {
    setAssistants(prev => 
      prev.map(assistant => 
        assistant.id === id 
          ? { ...assistant, ...data, updatedAt: new Date() }
          : assistant
      )
    );
  };

  const deleteAssistant = async (id: string) => {
    setAssistants(prev => prev.filter(assistant => assistant.id !== id));
  };

  return {
    assistants,
    loading,
    error,
    createAssistant,
    updateAssistant,
    deleteAssistant,
  };
};