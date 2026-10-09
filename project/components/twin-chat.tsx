'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Language } from '@/lib/content';
import { siteConfig } from '@/lib/config';
import { askTwin, suggestedQuestions, twinUi } from '@/lib/twin-dialogue';

type ChatMessage = {
  id: string;
  role: 'twin' | 'user';
  text: string;
};

export default function TwinChat({ language, reducedMotion }: { language: Language; reducedMotion: boolean }) {
  const ui = twinUi[language];
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ id: 'greet', role: 'twin', text: ui.greeting }]);
  }, [ui.greeting]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reducedMotion ? 'auto' : 'smooth' });
  }, [messages, busy, reducedMotion]);

  useEffect(() => {
    if (open) {
      setSeen(true);
      window.setTimeout(() => inputRef.current?.focus(), 180);
    }
  }, [open]);

  const speak = (full: string) => {
    const id = `twin-${Date.now()}`;
    if (reducedMotion) {
      setMessages((current) => [...current, { id, role: 'twin', text: full }]);
      setBusy(false);
      return;
    }
    setMessages((current) => [...current, { id, role: 'twin', text: '' }]);
    let index = 0;
    const tick = () => {
      index += 1;
      setMessages((current) =>
        current.map((message) => (message.id === id ? { ...message, text: full.slice(0, index) } : message)),
      );
      if (index < full.length) window.setTimeout(tick, 12);
      else setBusy(false);
    };
    window.setTimeout(tick, 80);
  };

  const ask = (question: string) => {
    const text = question.trim();
    if (!text || busy) return;
    setDraft('');
    setBusy(true);
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: 'user', text }]);
    const reply = askTwin(text, language);
    window.setTimeout(() => speak(reply), reducedMotion ? 80 : 520);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(draft);
  };

  return (
    <div className={`twin-chat ${open ? 'is-open' : ''}`}>
      {open && (
        <section className="twin-chat-panel" aria-label="Dialogue with the Twin">
          <header className="twin-chat-head">
            <div className="twin-chat-face">
              <img src={siteConfig.twinImage} alt="" />
              <span className="live-dot" />
            </div>
            <div>
              <b>{ui.title}</b>
              <em>{ui.status}</em>
            </div>
            <button className="twin-chat-close" onClick={() => setOpen(false)} aria-label="Close dialogue">
              <X size={16} />
            </button>
          </header>

          <div className="twin-chat-log" ref={listRef}>
            {messages.map((message) => (
              <p key={message.id} className={`twin-bubble ${message.role}`}>
                {message.text}
              </p>
            ))}
            {busy && <p className="twin-typing">{ui.typing}<i /><i /><i /></p>}
          </div>

          <div className="twin-chat-suggestions">
            {suggestedQuestions(language).map((item) => (
              <button key={item.id} type="button" onClick={() => ask(item.label)} disabled={busy}>
                {item.label}
              </button>
            ))}
          </div>

          <form className="twin-chat-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={ui.placeholder}
              maxLength={280}
              aria-label={ui.placeholder}
            />
            <button type="submit" disabled={busy || !draft.trim()} aria-label={ui.send}>
              <Send size={15} />
            </button>
          </form>
        </section>
      )}

      <button
        className="twin-chat-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close Twin dialogue' : ui.launcher}
      >
        {open ? <X size={20} /> : <img src={siteConfig.twinImage} alt="" />}
        {!open && <MessageCircle className="twin-chat-icon" size={14} />}
        {!open && !seen && <span className="twin-chat-hint">{ui.launcher}</span>}
      </button>
    </div>
  );
}
