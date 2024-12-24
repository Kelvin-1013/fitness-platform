import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageSquare, Mic, MicOff, Send } from 'lucide-react';
import { useConversation } from '@11labs/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'assistant';
  timestamp: Date;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation = useConversation({
    onMessage: (message) => {
      // Handle the message with the correct structure
      addMessage(message.message, message.source === 'user' ? 'user' : 'assistant');
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: Message['sender']) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    }]);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      addMessage(newMessage, 'user');
      // Here you would typically send the message to your backend
      setNewMessage('');
    }
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsRecording(true);
        await conversation.startSession({
          agentId: 'your-agent-id' // Replace with your ElevenLabs agent ID
        });
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    } else {
      setIsRecording(false);
      await conversation.endSession();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-background border rounded-lg shadow-lg w-96 h-[500px] mb-4 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Chat Support</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleRecording}
              className={isRecording ? 'text-red-500' : ''}
            >
              {isRecording ? <MicOff /> : <Mic />}
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-12 w-12"
      >
        <MessageSquare />
      </Button>
    </div>
  );
};

export default Chat;