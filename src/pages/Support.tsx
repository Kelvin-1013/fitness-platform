import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Support Center
        </h1>
        <p className="text-lg text-gray-300">Find answers to common questions</p>
      </header>

      <div className="max-w-4xl mx-auto grid gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">How do I connect my equipment?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Follow our step-by-step guide in the documentation section to connect your fitness equipment to our platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">What types of equipment are supported?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We support a wide range of modern fitness equipment from major manufacturers. Check our compatibility list for details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">How do I update my subscription?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can manage your subscription from your account settings. Contact our support team for assistance with plan changes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">Our support team is available 24/7 to help you with any issues.</p>
            <div className="space-y-2">
              <p className="text-gray-300">Email: support@smartfitnesshub.com</p>
              <p className="text-gray-300">Phone: 1-800-FITNESS</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;