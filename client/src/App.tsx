import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { mockUser } from '@shared/mockData';

// Pages
import Landing from '@/pages/Landing';
import Dashboard from '@/pages/Dashboard';
import Modules from '@/pages/Modules';
import ModuleDetail from '@/pages/ModuleDetail';
import Resources from '@/pages/Resources';
import Profile from '@/pages/Profile';
import NotFound from "@/pages/not-found";

function ProtectedLayout({ children, onLogout }: { children: React.ReactNode; onLogout: () => void }) {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar user={mockUser} onLogout={onLogout} />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur-sm">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="text-sm text-muted-foreground">
              Formation Premium - Espace d'apprentissage
            </div>
          </header>
          <main className="flex-1 overflow-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useLocation();

  // Auto-login for demo purposes (in a real app, check authentication state)
  useEffect(() => {
    const protectedRoutes = ['/dashboard', '/modules', '/resources', '/profile'];
    const isProtectedRoute = protectedRoutes.some(route => 
      location.startsWith(route) || location.match(/^\/modules\/\d+$/)
    );
    
    if (isProtectedRoute && !isLoggedIn) {
      // For demo: auto-login when accessing protected routes
      setIsLoggedIn(true);
    }
  }, [location, isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLocation('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLocation('/');
  };

  // Determine if we need the sidebar layout
  const needsLayout = isLoggedIn && location !== '/';

  if (needsLayout) {
    return (
      <ProtectedLayout onLogout={handleLogout}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/modules" component={Modules} />
          <Route path="/modules/:id" component={ModuleDetail} />
          <Route path="/resources" component={Resources} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </ProtectedLayout>
    );
  }

  return (
    <Switch>
      <Route path="/" component={() => <Landing />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <AppContent />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;