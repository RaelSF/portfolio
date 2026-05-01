'use client';

import { motion } from "framer-motion";
import { Send, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { PERSONAL_DATA } from "../data";

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });

      if (response.ok || response.status === 200) {
        toast.success("Mensagem enviada com sucesso! Responderei em breve.");
        event.currentTarget.reset();
      } else {
        toast.error("Ocorreu um erro no servidor. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro na request:", error);
      toast.error("Erro de conexão. Verifique sua internet.");
    }
    setIsSending(false);
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    toast.success("E-mail copiado para a área de transferência!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Lado Esquerdo */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">
            Vamos construir algo <span className="text-gradient">incrível</span> juntos?
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            Estou disponível para novos projetos e oportunidades. Escolha o canal que preferir para entrar em contato.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <motion.a
            href={`https://wa.me/${PERSONAL_DATA.whatsapp}`}
            target="_blank"
            whileHover={{ x: 8, scale: 1.01 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-glass border border-glass-border hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="p-3 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle size={22} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-muted uppercase tracking-[0.15em] font-medium">WhatsApp</p>
              <p className="font-medium text-sm mt-0.5">Chamar no Direct</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.a>

          <motion.button
            type="button"
            onClick={() => {
              copyEmail();
              setTimeout(() => { window.location.href = `mailto:${PERSONAL_DATA.email}`; }, 1000);
            }}
            whileHover={{ x: 8, scale: 1.01 }}
            className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-glass border border-glass-border hover:border-accent/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
              <Mail size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-muted uppercase tracking-[0.15em] font-medium">E-mail</p>
              <p className="font-medium text-sm mt-0.5 truncate">{PERSONAL_DATA.email}</p>
            </div>
            <span className="text-[9px] uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-lg text-muted group-hover:text-accent group-hover:bg-accent/10 transition-all font-medium">
              Copiar
            </span>
          </motion.button>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-glass border border-glass-border p-8 rounded-3xl space-y-5 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-semibold text-muted uppercase tracking-[0.15em] ml-1">
              Nome
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Seu nome"
              className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-semibold text-muted uppercase tracking-[0.15em] ml-1">
              E-mail
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="seu@email.com"
              className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-semibold text-muted uppercase tracking-[0.15em] ml-1">
            Mensagem
          </label>
          <textarea
            name="message"
            required
            placeholder="Como posso te ajudar?"
            rows={5}
            className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-none placeholder:text-muted/50"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 bg-accent text-white font-semibold rounded-xl flex items-center justify-center gap-2.5 hover:bg-accent-light transition-all shadow-lg shadow-accent/20 text-sm tracking-wide ${isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Enviando...
            </span>
          ) : (
            <>
              <Send size={16} />
              Enviar Mensagem
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}