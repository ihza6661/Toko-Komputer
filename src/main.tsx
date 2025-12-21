import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "./index.css";
import { cleanupExpiredEvents } from "@/lib/analytics";

// Initialize QueryClient with production-ready defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes - data considered fresh
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Don't refetch when user returns to tab
    },
    mutations: {
      retry: 0, // Don't retry mutations (form submissions, etc.)
    },
  },
});

// Run privacy cleanup before React tree mounts
// Removes analytics events older than configured retention period
cleanupExpiredEvents();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* React Query DevTools - only visible in development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
