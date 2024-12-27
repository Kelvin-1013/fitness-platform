import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300">Get in touch with our team</p>
      </header>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <Input className="bg-white/10 border-white/20 text-white" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <Textarea className="bg-white/10 border-white/20 text-white" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;