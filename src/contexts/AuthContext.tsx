import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    // Mock login - replace with real authentication later
    if (email === 'test@example.com' && password === 'password') {
      setIsAuthenticated(true);
      toast.success('Successfully logged in');
      navigate('/');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    toast.success('Successfully logged out');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};