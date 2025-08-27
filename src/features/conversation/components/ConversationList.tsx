import { Conversation } from '@/core/types';
import { formatDate, formatTime } from '@/core/utils';
import { Card } from '@/components/ui/card';

interface ConversationListProps {
  conversations: Conversation[];
  onSelect?: (conversation: Conversation) => void;
  selectedId?: string;
}

export const ConversationList = ({ conversations, onSelect, selectedId }: ConversationListProps) => {
  return (
    <div className="space-y-3">
      {conversations.map((conversation) => (
        <Card
          key={conversation.id}
          className={`p-4 cursor-pointer transition-colors hover:bg-slate-50 ${
            selectedId === conversation.id ? 'border-teal-500 bg-teal-50' : ''
          }`}
          onClick={() => onSelect?.(conversation)}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-slate-900 truncate">{conversation.title}</h4>
              <p className="text-sm text-slate-600 mt-1">
                {conversation.messages.length} messages
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                <span>{formatDate(conversation.updatedAt)}</span>
                <span>{formatTime(conversation.updatedAt)}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  conversation.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : conversation.status === 'completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {conversation.status}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};