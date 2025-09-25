import { Home, BookOpen, FileText, User, LogOut } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useLocation } from 'wouter';
import { User as UserType } from '@shared/types';
import coachImage from '@assets/generated_images/Professional_coach_portrait_eed1c557.png';

const menuItems = [
  {
    title: 'Accueil',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Modules',
    url: '/modules',
    icon: BookOpen,
  },
  {
    title: 'Ressources',
    url: '/resources',
    icon: FileText,
  },
  {
    title: 'Profil',
    url: '/profile',
    icon: User,
  },
];

interface AppSidebarProps {
  user: UserType;
  onLogout?: () => void;
}

export default function AppSidebar({ user, onLogout }: AppSidebarProps) {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-lg font-serif font-bold text-primary-foreground">F</span>
          </div>
          <div>
            <h2 className="font-serif font-bold text-primary">Formation</h2>
            <p className="text-xs text-muted-foreground">Premium</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase()}`}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent">
            <Avatar className="h-10 w-10">
              <AvatarImage src={coachImage} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
          
          <SidebarMenuButton 
            onClick={onLogout} 
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            data-testid="button-logout"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}