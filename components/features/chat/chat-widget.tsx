"use client";

import { AnimatePresence, motion } from "motion/react";
import { Bot, CircleDot, RotateCcw, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatInput } from "./chat-input";
import { ChatMessage, type ChatMessageData } from "./chat-message";
import { replyFor, welcome } from "./chat-knowledge";

const suggestions = ["How do I install the mod?", "Which tanks are available?", "Is it multiplayer compatible?", "Supported Minecraft version?"];

const now = () => new Date().toISOString();

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([{ id: "welcome", role: "assistant", content: welcome, timestamp: now() }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);
  useEffect(() => { if (open) document.getElementById("doodle-chat-input")?.focus(); }, [open]);

  const send = (value = input) => {
    const content = value.trim();
    if (!content || isTyping) return;
    setInput("");
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: "user", content, timestamp: now() }]);
    setIsTyping(true);
    window.setTimeout(() => { setMessages((current) => [...current, { id: `bot-${Date.now()}`, role: "assistant", content: replyFor(content), timestamp: now() }]); setIsTyping(false); }, 650);
  };
  const reset = () => { setMessages([{ id: "welcome", role: "assistant", content: welcome, timestamp: now() }]); setInput(""); };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 max-sm:bottom-4 max-sm:right-4">
      <AnimatePresence>
        {open && <motion.section initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.96 }} transition={{ type: "spring", stiffness: 420, damping: 30 }} role="dialog" aria-modal="false" aria-labelledby="doodle-chat-title" className="flex h-[min(680px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.4rem] border-2 border-foreground/15 bg-background shadow-2xl shadow-primary/10">
          <header className="flex items-center justify-between border-b border-foreground/10 bg-primary/10 px-4 py-3">
            <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-background text-primary shadow-sm"><Bot className="size-5" /></span><div><h2 id="doodle-chat-title" className="font-display text-lg tracking-wide">Doodle Tank Intel AI</h2><p className="flex items-center gap-1 text-[11px] text-muted-foreground"><CircleDot className="size-3 fill-primary text-primary" /> Online · demo replies</p></div></div>
            <div className="flex items-center gap-1"><Button variant="ghost" size="icon" onClick={reset} aria-label="Reset chat"><RotateCcw className="size-4" /></Button><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close chat"><X className="size-4" /></Button></div>
          </header>
          <div className="flex-1 overflow-y-auto px-3 py-4" aria-live="polite" aria-label="Chat messages"><div className="flex flex-col gap-3"><AnimatePresence initial={false}>{messages.map((message) => <motion.div key={message.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><ChatMessage message={message} /></motion.div>)}</AnimatePresence>{isTyping && <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="flex size-7 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary"><Bot className="size-4" /></span><span className="rounded-xl border border-foreground/10 bg-card px-3 py-2"><span className="inline-flex gap-1"><i className="size-1.5 animate-bounce rounded-full bg-primary" /><i className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:120ms]" /><i className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:240ms]" /></span></span></div>}<div ref={endRef} /></div></div>
          <div className="border-t border-foreground/10 bg-foreground/[.02] p-3"><div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => send(suggestion)} className="shrink-0 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-left text-[11px] font-medium text-foreground transition hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{suggestion}</button>)}</div><ChatInput value={input} onChange={setInput} onSubmit={() => send()} isTyping={isTyping} /><p className="mt-2 text-center text-[10px] text-muted-foreground">Demo mode · no messages leave this browser</p></div>
        </motion.section>}
      </AnimatePresence>
      <Button onClick={() => setOpen((value) => !value)} size="lg" className="group relative size-14 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/20 transition hover:-translate-y-1" aria-label={open ? "Close Doodle Tank chatbot" : "Open Doodle Tank chatbot"} aria-expanded={open}><span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/.16)]" /><Sparkles className="size-6 transition group-hover:rotate-12" /><span className="sr-only">{open ? "Close chat" : "Open chat"}</span></Button>
    </div>
  );
}

export { replyFor };
