import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageCircle, Maximize2, Minimize2, Mic, Volume2, VolumeX, Loader2 } from 'lucide-react';

export const BagaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [speakingId, setSpeakingId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Olá! Sou o Baga-IA, o assistente virtual de inteligência artificial da Luxy Service. Como te posso ajudar hoje?' }
  ]);
  
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Inicializa a API de Reconhecimento de Voz (Ditado Robusto)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      
      // Configurações para ditado contínuo e mais fluído
      recognition.continuous = true; 
      recognition.interimResults = true; 
      recognition.lang = 'pt-BR';
      
      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        
        setMessageInput(finalTranscript + interimTranscript);
      };

      recognition.onend = () => {
        // Se a API parar sozinha, reflete o estado no UI
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Erro no reconhecimento de voz:", event.error);
        if (event.error !== 'no-speech') {
           setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
    } else {
      setSpeechSupported(false);
      console.warn("Aviso: O navegador atual não suporta a gravação de voz nativa.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleMicrophone = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setMessageInput(''); 
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error("Erro ao tentar iniciar o microfone:", err);
      }
    }
  };

  // ==========================================
  // ENVIO PARA O BACKEND (RAG / PGVECTOR)
  // ==========================================
  const handleSend = async (textToSend = messageInput) => {
    if (!textToSend.trim()) return;
    
    // Parar de ouvir ao enviar
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    // 1. Adiciona a mensagem do usuário
    const userMsg = { id: Date.now(), sender: 'user', text: textToSend.trim() };
    setMessages(prev => [...prev, userMsg]);
    setMessageInput('');
    setIsTyping(true);
    
    try {
      /* ----------------------------------------------------
       * SEU BACKEND AQUI (Integração LLM + RAG + pgvector)
       * ----------------------------------------------------
       * Descomente o código abaixo e adicione o URL da sua API
       * 
       * const response = await fetch('https://sua-api.com/api/chat', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({ message: textToSend.trim() })
       * });
       * const data = await response.json();
       * const botResponseText = data.reply; // Ou a chave correta da sua API
       */

      // Simulando o tempo de processamento do RAG
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const botResponseText = "Entendi! Esta interface agora está pronta para receber os dados do seu backend RAG. Para ativar, basta configurar o endpoint no método `handleSend`.";
      
      const botMsgId = Date.now() + 1;
      setMessages(prev => [...prev, { id: botMsgId, sender: 'bot', text: botResponseText }]);
      
    } catch (error) {
      console.error("Erro ao chamar o backend:", error);
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: 'Desculpe, ocorreu um erro de comunicação com o servidor.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const speakMessage = (id, text) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
      {/* Janela de Chat */}
      <div 
        className={`mb-4 bg-white dark:bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 invisible'}
          ${isExpanded 
            ? 'w-[calc(100vw-2rem)] h-[85vh] md:w-[800px] md:h-[80vh]' 
            : 'w-[calc(100vw-2rem)] h-[75vh] sm:w-80 sm:h-[500px] md:w-96 md:h-[550px]'
          }
        `}
      >
        {/* Cabeçalho */}
        <div className="bg-[#2F0069] text-white p-4 flex items-center justify-between shadow-sm relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#2F0069] rounded-full" title="Online"></span>
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">Baga-IA</h3>
              <p className="text-xs text-white/80 font-medium">Inteligência Artificial Luxy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={toggleExpand} 
              className="hidden md:flex p-2 hover:bg-white/20 rounded-full transition-colors items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isExpanded ? "Reduzir chat" : "Expandir chat"}
            >
              {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Minimizar chat"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 dark:bg-muted/20 flex flex-col gap-5 scroll-smooth">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-[#2F0069]/10 flex items-center justify-center shrink-0 mb-1">
                  <Bot size={18} className="text-[#2F0069]" />
                </div>
              )}
              
              <div className="flex flex-col gap-1">
                <div className={`p-3.5 shadow-sm text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-[#FC4C04] text-white rounded-2xl rounded-br-sm' 
                    : 'bg-white dark:bg-card border border-border rounded-2xl rounded-bl-sm text-foreground'
                }`}>
                  {msg.text}
                </div>
                
                {msg.sender === 'bot' && (
                  <div className="flex justify-start">
                    <button 
                      onClick={() => speakMessage(msg.id, msg.text)}
                      className="text-xs flex items-center gap-1 text-gray-500 hover:text-[#FC4C04] transition-colors focus:outline-none"
                      title={speakingId === msg.id ? "Parar áudio" : "Ouvir mensagem"}
                    >
                      {speakingId === msg.id ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      <span className="sr-only">Ouvir mensagem</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Estado de "Digitando" (Loader) para feedback visual enquanto aguarda RAG/LLM */}
          {isTyping && (
             <div className="flex items-end gap-2 max-w-[85%]">
               <div className="w-8 h-8 rounded-full bg-[#2F0069]/10 flex items-center justify-center shrink-0 mb-1">
                  <Bot size={18} className="text-[#2F0069]" />
               </div>
               <div className="bg-white dark:bg-card border border-border p-3.5 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2 text-[#FC4C04]">
                 <Loader2 size={16} className="animate-spin" />
                 <span className="text-sm font-medium">O Baga está a pensar...</span>
               </div>
             </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Área de Input */}
        <div className="p-3 bg-white dark:bg-card border-t border-border flex items-center gap-2 shrink-0">
          {speechSupported && (
            <button 
              onClick={toggleMicrophone}
              type="button"
              className={`p-2.5 rounded-full transition-colors shrink-0 flex items-center justify-center pointer-events-auto ${
                isListening 
                  ? 'bg-[#FC4C04]/20 text-[#FC4C04] dark:bg-[#FC4C04]/30 dark:text-[#FC4C04] animate-pulse' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80'
              }`}
              title={isListening ? "A escutar..." : "Falar mensagem"}
            >
              <Mic size={18} />
            </button>
          )}

          <input 
            type="text" 
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isListening ? "A escutar..." : "Escreve a tua mensagem..."} 
            className="flex-1 bg-gray-100 dark:bg-muted border border-transparent focus:border-[#FC4C04]/50 focus:ring-2 focus:ring-[#FC4C04]/20 rounded-full px-4 py-2 text-sm outline-none transition-all dark:text-foreground placeholder:text-muted-foreground"
            disabled={isTyping}
          />
          
          <button 
            onClick={() => handleSend()}
            disabled={isTyping || (!messageInput.trim() && !isListening)}
            className="w-10 h-10 bg-[#FC4C04] text-white rounded-full hover:bg-[#FC4C04]/90 hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center group pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
            title="Enviar mensagem"
          >
            <Send size={18} className="-ml-0.5 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Botão Flutuante (FAB) */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-[#2F0069] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 relative group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pointer-events-auto"
        aria-label={isOpen ? "Fechar assistente Baga" : "Abrir assistente Baga"}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#2F0069] animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></span>
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