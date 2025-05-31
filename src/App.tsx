import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="3mhgglkkd" data-path="src/App.tsx">
    <TooltipProvider data-id="h71egx02j" data-path="src/App.tsx">
      <Toaster data-id="r4t0r3u4o" data-path="src/App.tsx" />
      <BrowserRouter data-id="rbtdrlcwj" data-path="src/App.tsx">
        <Routes data-id="80jp0tvn3" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="k6lmv6ghm" data-path="src/App.tsx" />} data-id="ey3i9k1yp" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="y9il75psl" data-path="src/App.tsx" />} data-id="hg9f5h4em" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;