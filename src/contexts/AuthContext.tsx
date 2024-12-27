import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string, displayName?: string) => void;
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
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
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    // Mock login - replace with real authentication later
    if (email === 'test@example.com' && password === 'password') {
      const mockUser = {
        id: '1',
        email: email,
        displayName: 'Test User'
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      toast.success('Successfully logged in');
      navigate('/');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const signUp = (email: string, password: string, displayName?: string) => {
    // Mock signup - replace with real authentication later
    if (email && password) {
      const mockUser = {
        id: Math.random().toString(),
        email,
        displayName: displayName || email.split('@')[0]
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      toast.success('Account created successfully');
      navigate('/');
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const loginWithGoogle = () => {
    // Mock Google login
    const mockUser = {
      id: '2',
      email: 'google@example.com',
      displayName: 'Google User',
      photoURL: 'https://via.placeholder.com/40'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    toast.success('Successfully logged in with Google');
    navigate('/');
  };

  const loginWithGithub = () => {
    // Mock GitHub login
    const mockUser = {
      id: '3',
      email: 'github@example.com',
      displayName: 'GitHub User',
      photoURL: 'https://via.placeholder.com/40'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    toast.success('Successfully logged in with GitHub');
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast.success('Successfully logged out');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      login, 
      signUp, 
      loginWithGoogle, 
      loginWithGithub, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};