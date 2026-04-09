/*
 * EQUUS INN AI CHATBOT
 * Intelligent guest support powered by FAQ knowledge base
 * Reduces front desk workload with 24/7 automated responses
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// FAQ knowledge base for AI responses
const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["booking", "reserve", "reservation", "book"],
    response:
      "You can book directly through our website at newequusinn.manus.space or call us at (352) 854-3200. We offer group rates for 10+ rooms. Would you like help with anything specific about your reservation?",
  },
  {
    keywords: ["breakfast", "included", "eat", "food"],
    response:
      "Yes! A complimentary hot breakfast buffet is included with every room reservation, served daily from 6:00 AM to 9:00 AM. Our amazing breakfast team ensures we have a variety of rotating items to choose from. Any dietary restrictions we should know about?",
  },
  {
    keywords: ["check-in", "late", "arrival", "arrive"],
    response:
      "We have an agent available at the front desk 24 hours a day to assist you with late check-in or any other needs. Just let us know when you'll be arriving!",
  },
  {
    keywords: ["pool", "swimming", "swim"],
    response:
      "Our heated outdoor pool is open year-round for all guests to enjoy! It's a great way to relax after a long day.",
  },
  {
    keywords: ["wifi", "internet", "connection"],
    response:
      "Yes, high-speed fiber optic WiFi is complimentary for all guests throughout the hotel. You should have excellent connectivity in your room and all common areas.",
  },
  {
    keywords: ["parking", "car", "vehicle"],
    response:
      "Yes, complimentary parking is available for all guests. We have ample on-site parking for cars, trucks, and vehicles. Our parking lot is well-lit and monitored for your safety.",
  },
  {
    keywords: ["pet", "dog", "cat", "animal"],
    response:
      "Yes! We welcome pets at Equus Inn. There is a pet fee per stay. Please mention your pet when booking and let us know the size and type.",
  },
  {
    keywords: ["ada", "accessible", "wheelchair", "disability"],
    response:
      "We offer ADA-accessible rooms including our King Standard ADA and Two Queen Suite ADA options. All feature accessible bathrooms with grab bars and spacious layouts for wheelchair access. Would you like to book one of these rooms?",
  },
  {
    keywords: ["room", "suite", "accommodation", "bed"],
    response:
      "We offer One Queen, Two Queen, King Suite, One Queen Suite, Two Queen Suite, King Suite ADA, Two Queen Suite ADA, One Queen ADA, and One Queen Suite ADA rooms. Each features modern amenities and equestrian-inspired décor. What type of room interests you?",
  },
  {
    keywords: ["restaurant", "dining", "food", "eat", "lunch", "dinner"],
    response:
      "We have a self-service beer and wine bar available for guests. Local favorites near us include The Yearling (classic Florida cuisine), Tony's Sushi (Japanese), and Bagelicious Deli & Bakery (breakfast and lunch). We can provide recommendations at check-in!",
  },
  {
    keywords: ["meeting", "event", "conference", "group"],
    response:
      "Yes! Our versatile meeting room accommodates up to 45 guests in various configurations. Contact our events team at kholt@paxproperties.com or call (352) 854-3200 for custom quotes.",
  },
  {
    keywords: ["fitness", "gym", "exercise", "workout"],
    response:
      "Yes, our fitness center features strength equipment, weights, cardio machines, and free weights. It's available 24/7 for all guests. Feel free to use it anytime!",
  },
  {
    keywords: ["cancel", "cancellation", "refund"],
    response:
      "Cancellations made 48 hours before arrival receive a full refund. Cancellations within 48 hours are subject to one night's room charge. Group bookings have specific terms—please contact our sales team for details.",
  },
  {
    keywords: ["location", "where", "address", "directions"],
    response:
      "We're located at 3434 SW College Road, Ocala, Florida 34474, conveniently off I-75 and close to the World Equestrian Center. Would you like directions or information about nearby attractions?",
  },
  {
    keywords: ["equestrian", "horse", "wec", "world equestrian center", "event"],
    response:
      "Perfect! We're the ideal choice for equestrian event attendees. We're just a short drive from the World Equestrian Center. We offer group rates and special packages for horse shows and events. Would you like to book for an upcoming event?",
  },
  {
    keywords: ["contact", "phone", "call", "email", "help"],
    response:
      "You can reach us at (352) 854-3200 for general inquiries or ocalafd@paxproperties.com. For sales and group bookings, contact kholt@paxproperties.com. How can we help you today?",
  },
];

function findBestResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Find matching FAQ response
  for (const item of FAQ_KNOWLEDGE_BASE) {
    if (item.keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return item.response;
    }
  }

  // Default response if no match found
  return "Thank you for your question! I'm an AI assistant trained on our FAQ. For questions I can't answer, please contact our team at (352) 854-3200 or email ocalafd@paxproperties.com. Is there anything else I can help you with?";
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm Equus Inn's AI assistant. I'm here to answer questions about our rooms, amenities, booking, and more. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF6A] to-[#A27B5B] text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-24px)] bg-white rounded-lg shadow-2xl flex flex-col h-96 sm:h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1C2B4A] to-[#2B3F4E] text-white p-4 rounded-t-lg">
              <h3 className="font-display text-lg font-bold">Equus Inn Assistant</h3>
              <p className="text-sm text-[#D4AF6A]">AI-Powered Guest Support</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF7F2]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-[#D4AF6A] text-white rounded-br-none"
                        : "bg-white border border-[#1C2B4A]/10 text-[#2A2A2A] rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#1C2B4A]/10 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#D4AF6A] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#D4AF6A] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#D4AF6A] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[#1C2B4A]/10 p-4 bg-white rounded-b-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 border border-[#1C2B4A]/20 rounded-lg focus:outline-none focus:border-[#D4AF6A] text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-[#D4AF6A] text-white p-2 rounded-lg hover:bg-[#A27B5B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#2A2A2A]/50 mt-2">
                💡 Powered by AI • For complex inquiries, we'll connect you with our team
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
