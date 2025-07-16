import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/navigation";
import Landing from "./pages/landing";
import Offerings from "./pages/offerings";
import Research from "./pages/research";
import LiveThreats from "./pages/live-threats";
import Resources from "./pages/resources";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navigation />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/offerings" component={Offerings} />
        <Route path="/research" component={Research} />
        <Route path="/live-threats" component={LiveThreats} />
        <Route path="/resources" component={Resources} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
