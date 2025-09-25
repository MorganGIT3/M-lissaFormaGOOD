import AppSidebar from '../AppSidebar';
import { mockUser } from '@shared/mockData';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function AppSidebarExample() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar 
          user={mockUser} 
          onLogout={() => console.log('Logout triggered')} 
        />
        <div className="flex-1 p-8">
          <p className="text-muted-foreground">Contenu principal ici...</p>
        </div>
      </div>
    </SidebarProvider>
  );
}