import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Equipment from "./pages/Equipment";
import Users from "./pages/Users";
import EquipmentDetail from "./pages/EquipmentDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import Api from "./pages/Api";
import Tutorials from "./pages/Tutorials";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Schedule from "./pages/Schedule";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <AuthProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Toaster />
                  <Sonner />
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Index />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/equipment/:id" element={<EquipmentDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/api" element={<Api />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
                <Footer />
                <Chat />
              </div>
            </AuthProvider>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;