import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./dashboard-sidebar";
import { TaskStats } from "@/components/tasks/task-stats";
import { TaskList } from "@/components/tasks/task-list";

interface DashboardDetailViewProps {
  onBack: () => void;
}

export function DashboardDetailView({ onBack }: DashboardDetailViewProps) {
  const [activeView, setActiveView] = useState("dashboard");

  // Mock data for different views
  const mockTasks = [
    {
      id: "1",
      title: "Design CRM Dashboard",
      description: "Create a modern and intuitive dashboard interface for the CRM system with task management capabilities.",
      status: "in-progress" as const,
      priority: "high" as const,
      assignee: "Snehasish",
      dueDate: "Oct 15, 2024",
      createdAt: "2 days ago"
    },
    {
      id: "2", 
      title: "Implement Task Automation",
      description: "Build automation features for recurring tasks and notification system.",
      status: "pending" as const,
      priority: "medium" as const,
      assignee: "Team Lead",
      dueDate: "Oct 20, 2024",
      createdAt: "1 day ago"
    },
    {
      id: "3",
      title: "Setup Database Schema", 
      description: "Design and implement the database structure for tasks, users, and company data.",
      status: "completed" as const,
      priority: "urgent" as const,
      assignee: "Backend Dev",
      dueDate: "Oct 10, 2024",
      createdAt: "5 days ago"
    }
  ];

  const renderContent = () => {
    switch (activeView) {
      case "idea-board":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Idea Board</h1>
              <p className="text-muted-foreground">Note down your ideas and organize them in lists</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-feature">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">New Feature Ideas</h3>
                <p className="text-muted-foreground text-sm">Brainstorm and track innovative features for the CRM</p>
              </div>
              <div className="card-feature">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Process Improvements</h3>
                <p className="text-muted-foreground text-sm">Ideas to streamline workflows and automation</p>
              </div>
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Task Dashboard</h1>
              <p className="text-muted-foreground">Clear view of your performance anytime</p>
            </div>
            <TaskStats totalTasks={3} completedTasks={1} pendingTasks={1} overdueTasks={1} />
            <TaskList tasks={mockTasks} />
          </div>
        );
      case "my-tasks":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Tasks</h1>
              <p className="text-muted-foreground">Tasks assigned to you</p>
            </div>
            <TaskStats totalTasks={2} completedTasks={0} pendingTasks={2} overdueTasks={0} />
            <TaskList tasks={mockTasks.slice(0, 2)} />
          </div>
        );
      case "delegated-tasks":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Delegated Tasks</h1>
              <p className="text-muted-foreground">Tasks you've delegated to others</p>
            </div>
            <TaskStats totalTasks={1} completedTasks={1} pendingTasks={0} overdueTasks={0} />
            <TaskList tasks={[mockTasks[2]]} />
          </div>
        );
      case "subscribed-tasks":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Subscribed Tasks</h1>
              <p className="text-muted-foreground">Tasks you're following for updates</p>
            </div>
            <TaskStats totalTasks={0} completedTasks={0} pendingTasks={0} overdueTasks={0} />
            <TaskList tasks={[]} />
          </div>
        );
      case "all-tasks":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">All Tasks</h1>
              <p className="text-muted-foreground">Complete overview of all tasks in the system</p>
            </div>
            <TaskStats totalTasks={3} completedTasks={1} pendingTasks={1} overdueTasks={1} />
            <TaskList tasks={mockTasks} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar activeView={activeView} onViewChange={setActiveView} />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <SidebarTrigger />
              <h2 className="text-lg font-semibold text-foreground">TaskFlow CRM</h2>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}