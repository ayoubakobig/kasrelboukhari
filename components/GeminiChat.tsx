import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'مرحبا! أنا مساعدك الافتراضي. كيف يمكنني مساعدتك في معرفة المزيد عن المقاطعة الإدارية لقصر البخاري؟',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Placeholder for API call - would need actual Gemini API integration
      // For now, show a simple response
      setTimeout(() => {
        const botResponse: ChatMessage = {
          role: 'model',
          text: 'شكرا على سؤالك. للحصول على معلومات مفصلة، يرجى الاطلاع على الأقسام أعلاه التي تحتوي على معلومات شاملة عن الهيكلة الإدارية وفرص الاستثمار.',
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col animate-slideUp">
          <div className="bg-gradient-to-r from-ksar-green to-ksar-dark text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">مساعد افتراضي</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-ksar-green text-white'
                      : message.isError
                      ? 'bg-red-100 text-red-700'
                      : 'bg-stone-100 text-stone-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-stone-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ksar-green"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-ksar-green text-white p-2 rounded-full hover:bg-ksar-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-ksar-green text-white p-4 rounded-full shadow-lg hover:bg-ksar-dark transition-colors animate-fadeIn"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
