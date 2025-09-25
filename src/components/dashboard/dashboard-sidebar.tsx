import { 
  Lightbulb, 
  LayoutDashboard, 
  CheckSquare, 
  ArrowRightLeft, 
  Eye, 
  FolderOpen 
} from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const dashboardItems = [
  { id: "idea-board", title: "Idea Board", icon: Lightbulb },
  { id: "dashboard", title: "Dashboard", icon: LayoutDashboard },
  { id: "my-tasks", title: "My Tasks", icon: CheckSquare },
  { id: "delegated-tasks", title: "Delegated Tasks", icon: ArrowRightLeft },
  { id: "subscribed-tasks", title: "Subscribed Tasks", icon: Eye },
  { id: "all-tasks", title: "All Tasks", icon: FolderOpen },
];

export function DashboardSidebar({ activeView, onViewChange }: DashboardSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const isActive = (id: string) => activeView === id;

  const getItemStyles = (id: string) => {
    if (isActive(id)) {
      return "bg-primary text-primary-foreground font-medium hover:bg-primary/90";
    }
    return "text-muted-foreground hover:bg-muted hover:text-foreground";
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r border-border">
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onViewChange(item.id)}
                      className={`w-full justify-start px-3 py-2.5 rounded-lg transition-colors ${getItemStyles(item.id)}`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}