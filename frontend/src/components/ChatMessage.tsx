import { User, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
      )}
      
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'backdrop-blur-sm bg-card/50 border border-border text-card-foreground rounded-bl-sm'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{content}</p>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <User className="h-4 w-4 text-accent-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
