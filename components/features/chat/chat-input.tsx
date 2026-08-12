import { ArrowUp, LoaderCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type ChatInputProps = { value: string; onChange: (value: string) => void; onSubmit: () => void; isTyping: boolean };

export function ChatInput({ value, onChange, onSubmit, isTyping }: ChatInputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { if (ref.current) { ref.current.style.height = "auto"; ref.current.style.height = `${Math.min(ref.current.scrollHeight, 120)}px`; } }, [value]);
  return (
    <div className="flex items-end gap-2 rounded-2xl border border-foreground/15 bg-background p-2 shadow-inner focus-within:ring-2 focus-within:ring-primary/30">
      <label htmlFor="doodle-chat-input" className="sr-only">Message Doodle Tank Intel AI</label>
      <textarea id="doodle-chat-input" ref={ref} rows={1} value={value} onChange={(event) => onChange(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); onSubmit(); } }} placeholder="Ask about the mod..." className="max-h-[120px] min-h-9 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground" aria-label="Chat message" />
      <Button type="button" size="icon" className="size-9 shrink-0 rounded-xl" onClick={onSubmit} disabled={!value.trim() || isTyping} aria-label="Send message">{isTyping ? <LoaderCircle className="size-4 animate-spin" /> : <ArrowUp className="size-4" />}</Button>
    </div>
  );
}
