
import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./contexts/AppContext";
import AppLayout from "./components/AppLayout";
import Listening from "./pages/Listening";
import Response from "./pages/Response";

const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Index />} />
                  <Route path="listening" element={<Listening />} />
                  <Route path="response" element={<Response />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AppProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
