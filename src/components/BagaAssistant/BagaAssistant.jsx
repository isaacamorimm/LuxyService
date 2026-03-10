import React, { useState } from 'react';
import { Bot, X, Send, MessageCircle } from 'lucide-react';

export const BagaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
      {/* Janela de Chat */}
      <div 
        className={`mb-4 w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-white dark:bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 invisible'
        }`}
      >
        {/* Cabeçalho */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between shadow-sm relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full" title="Online"></span>
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">Baga</h3>
              <p className="text-xs text-primary-foreground/80 font-medium">Online agora</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            aria-label="Minimizar chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Área de Mensagens */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50/50 dark:bg-muted/20 flex flex-col gap-5 scroll-smooth">
          {/* Mensagem da Baga */}
          <div className="flex items-end gap-2 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-1">
              <Bot size={18} className="text-primary" />
            </div>
            <div className="bg-white dark:bg-card border border-border p-3.5 rounded-2xl rounded-bl-sm shadow-sm text-sm text-foreground leading-relaxed">
              Olá! Sou a Baga, o teu assistente virtual. Como te posso ajudar hoje?
            </div>
          </div>

          {/* Mensagem do Utilizador */}
          <div className="flex items-end gap-2 max-w-[85%] self-end flex-row-reverse">
            <div className="bg-primary text-primary-foreground p-3.5 rounded-2xl rounded-br-sm shadow-sm text-sm leading-relaxed">
               Gostaria de saber mais sobre os vossos serviços.
            </div>
          </div>
          
          {/* Mensagem da Baga 2 */}
          <div className="flex items-end gap-2 max-w-[85%]">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-1">
              <Bot size={18} className="text-primary" />
            </div>
            <div className="bg-white dark:bg-card border border-border p-3.5 rounded-2xl rounded-bl-sm shadow-sm text-sm text-foreground leading-relaxed">
              Com certeza! Oferecemos uma variedade de serviços interativos. Preferes explorar as opções ou tens alguma dúvida específica?
            </div>
          </div>
        </div>

        {/* Área de Input */}
        <div className="p-3 bg-white dark:bg-card border-t border-border flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Escreve a tua mensagem..." 
            className="flex-1 bg-gray-100 dark:bg-muted border border-transparent focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-full px-4 py-2 text-sm outline-none transition-all dark:text-foreground placeholder:text-muted-foreground"
          />
          <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center group pointer-events-auto">
            <Send size={18} className="-ml-0.5 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Botão Flutuante (FAB) */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 relative group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pointer-events-auto"
        aria-label={isOpen ? "Fechar assistente Baga" : "Abrir assistente Baga"}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></span>
        )}
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X size={28} className="animate-in fade-in zoom-in duration-300" />
          ) : (
            <MessageCircle size={28} className="animate-in fade-in zoom-in duration-300" />
          )}
        </div>
      </button>
    </div>
  );
};
