import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Home, Settings, User, Dumbbell, Timer, Calendar, Activity } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, translations } = useLanguage();

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            <Home className="h-6 w-6" />
          </Link>
          <h1 className="text-sm md:text-xl font-bold text-foreground">Smart Fitness Hub</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/analytics" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</Link>
            <Link to="/equipment" className="text-muted-foreground hover:text-foreground transition-colors">Equipment</Link>
            <Link to="/workouts" className="text-muted-foreground hover:text-foreground transition-colors">Workouts</Link>
            <Link to="/nutrition" className="text-muted-foreground hover:text-foreground transition-colors">Nutrition</Link>
            <Link to="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">Schedule</Link>
            <Link to="/users" className="text-muted-foreground hover:text-foreground transition-colors">Users</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
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

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.photoURL} alt={user?.displayName || ''} />
                    <AvatarFallback>
                      {user?.displayName?.[0] || user?.email?.[0] || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user?.displayName || user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary">
              <Link to="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;