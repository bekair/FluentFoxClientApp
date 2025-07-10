import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// User state interface
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Auth state interface
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

// Auth store
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        login: (user, token) => set({ user, token, isAuthenticated: true }),
        logout: () => set({ user: null, token: null, isAuthenticated: false }),
        setLoading: (loading) => set({ isLoading: loading }),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);
