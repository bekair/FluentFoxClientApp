import { useState, useEffect, useCallback } from 'react';
import apiClient from '@/lib/api/client';

interface UseApiOptions {
  immediate?: boolean;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (...args: unknown[]) => Promise<T>;
  reset: () => void;
}

export function useApi<T = unknown>(
  apiFunction: (...args: unknown[]) => Promise<{ data: T }>,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (...args: unknown[]): Promise<T> => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result.data);
      return result.data;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return { data, loading, error, execute, reset };
}

// Specialized hook for GET requests
export function useApiGet<T = unknown>(url: string, options: UseApiOptions = {}) {
  return useApi<T>(() => apiClient.get(url), options);
}

// Specialized hook for POST requests
export function useApiPost<T = unknown>(url: string) {
  return useApi<T>((data: unknown) => apiClient.post(url, data));
}

// Specialized hook for PUT requests
export function useApiPut<T = unknown>(url: string) {
  return useApi<T>((data: unknown) => apiClient.put(url, data));
}

// Specialized hook for DELETE requests
export function useApiDelete<T = unknown>(url: string) {
  return useApi<T>(() => apiClient.delete(url));
}
