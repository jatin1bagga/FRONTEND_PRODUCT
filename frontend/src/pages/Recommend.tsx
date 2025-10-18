import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatMessage from '@/components/ChatMessage';
import ProductCard from '@/components/ProductCard';
import { mockFurnitureData } from '@/utils/furnitureData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Recommend = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI furniture assistant. Tell me what you're looking for, or type a product name to get AI-generated descriptions. Try: 'modern sofa' or 'dining table'",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(mockFurnitureData);
  const [aiDescriptions, setAiDescriptions] = useState<Record<string, string>>({});

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      
      // Check if user is asking for a product name (generate description)
      const isProductNameQuery = 
        lowerInput.includes('tell me about') || 
        lowerInput.includes('describe') ||
        products.some(p => p.title.toLowerCase().includes(lowerInput));

      if (isProductNameQuery) {
        // Generate AI description for products
        const matchingProduct = products.find(p => 
          p.title.toLowerCase().includes(lowerInput)
        );

        if (matchingProduct) {
          const aiDesc = `This ${matchingProduct.title} is an exceptional piece that combines ${matchingProduct.material} craftsmanship with modern design aesthetics. Perfect for elevating your space with its ${matchingProduct.color} finish.`;
          
          setAiDescriptions(prev => ({
            ...prev,
            [matchingProduct.id]: aiDesc,
          }));

          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: `I've generated a detailed description for the ${matchingProduct.title}. Check it out in the product card below!`,
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: "I couldn't find that specific product. Try browsing the recommendations below or ask for a different type of furniture!",
            },
          ]);
        }
      } else {
        // Regular recommendation
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `Great choice! I've found some amazing ${lowerInput.includes('modern') ? 'modern' : 'beautiful'} furniture pieces for you. Check them out below!`,
          },
        ]);
      }

      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Navbar />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              AI Furniture Recommendations
            </h1>
            <p className="text-muted-foreground">
              Chat with our AI to discover your perfect furniture
            </p>
          </div>

          {/* Chat Section */}
          <div className="backdrop-blur-sm bg-card/50 border border-border rounded-2xl shadow-lg mb-8 overflow-hidden">
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
              {isLoading && (
                <div className="flex gap-3 animate-fade-in-up">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Loader2 className="h-4 w-4 text-white animate-spin" />
                  </div>
                  <div className="backdrop-blur-sm bg-card/50 border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a product name or describe what you're looking for..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button onClick={handleSend} disabled={isLoading} size="icon">
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                aiDescription={aiDescriptions[product.id]}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recommend;
