import { useQuery } from '@tanstack/react-query';
import { api, queryKeys } from '@/services/api';
import { toast } from 'sonner';

/**
 * React Query hook for fetching categories from the API
 * 
 * Features:
 * - Automatic caching (10 minutes stale time)
 * - Error handling with Indonesian toast notifications
 * - Request deduplication
 * 
 * @example
 * ```tsx
 * const { data: categories = [], isLoading } = useCategories();
 * 
 * if (isLoading) return <div>Loading...</div>
 * 
 * return categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)
 * ```
 */
export function useCategories() {
  const query = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: async () => {
      try {
        const categories = await api.getCategories();
        return Array.isArray(categories) ? categories : [];
      } catch (error) {
        toast.error('Gagal memuat kategori', {
          description: error instanceof Error 
            ? error.message 
            : 'Terjadi kesalahan saat memuat data kategori.',
        });
        throw error;
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes cache (categories don't change often)
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return query;
}
