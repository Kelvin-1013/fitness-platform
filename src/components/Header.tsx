import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Home, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, translations } = useLanguage();

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-accent-foreground transition-colors">
            <Home className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">Smart Fitness Hub</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-accent-foreground transition-colors">Dashboard</Link>
            <Link to="/analytics" className="hover:text-accent-foreground transition-colors">Analytics</Link>
            <Link to="/equipment" className="hover:text-accent-foreground transition-colors">Equipment</Link>
            <Link to="/users" className="hover:text-accent-foreground transition-colors">Users</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light {theme === 'light' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark {theme === 'dark' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('pastel')}>
                Pastel {theme === 'pastel' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('high-contrast')}>
                High Contrast {theme === 'high-contrast' && '✓'}
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('es')}>
                Español {language === 'es' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('fr')}>
                Français {language === 'fr' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isAuthenticated && (
            <Button onClick={logout} variant="outline">
              {translations.login[language]}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;