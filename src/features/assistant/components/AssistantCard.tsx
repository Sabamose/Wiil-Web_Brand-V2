import { Assistant } from '@/core/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AssistantCardProps {
  assistant: Assistant;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const AssistantCard = ({ assistant, onEdit, onDelete }: AssistantCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">{assistant.name}</h3>
          <p className="text-sm text-slate-600 mt-1">{assistant.role}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
            <span>Language: {assistant.language}</span>
            <span>Voice: {assistant.voice}</span>
            <span>Industry: {assistant.industry}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${assistant.isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
          <span className="text-xs text-slate-500">{assistant.isActive ? 'Active' : 'Inactive'}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline" size="sm" onClick={() => onEdit?.(assistant.id)}>
          Edit
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete?.(assistant.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};