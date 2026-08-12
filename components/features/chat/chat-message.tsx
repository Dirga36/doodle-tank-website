import { Bot, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessageData = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith("**") && part.endsWith("**") ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong> : <span key={`${part}-${index}`}>{part}</span>);
}

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const isBullet = line.startsWith("- ");
    const text = isBullet ? line.slice(2) : line;
    return <span key={`${line}-${index}`} className={cn("block", isBullet && "pl-3 before:mr-2 before:content-['•']")}>{renderInline(text)}</span>;
  });
}

export function ChatMessage({ message }: { message: ChatMessageData }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex items-end gap-2", isUser ? "justify-end" : "justify-start")}>
      {!isUser && <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary" aria-hidden="true"><Bot className="size-4" /></span>}
      <div className={cn("max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm", isUser ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm border border-foreground/10 bg-card text-card-foreground")}>
        <div>{renderContent(message.content)}</div>
        <time className={cn("mt-1 block text-[10px]", isUser ? "text-primary-foreground/65" : "text-muted-foreground")} dateTime={message.timestamp}>{new Date(message.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</time>
      </div>
      {isUser && <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-muted-foreground" aria-hidden="true"><UserRound className="size-4" /></span>}
    </div>
  );
}

export type { ChatMessageData };
