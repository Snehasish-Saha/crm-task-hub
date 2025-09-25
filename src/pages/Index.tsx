import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { TaskStats } from "@/components/tasks/task-stats";
import { TaskList } from "@/components/tasks/task-list";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock data
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
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview onNavigate={setActiveTab} />;
      case "my-tasks":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Tasks</h1>
              <p className="text-muted-foreground">Tasks assigned to you</p>
            </div>
            <TaskStats totalTasks={3} completedTasks={1} pendingTasks={1} overdueTasks={1} />
            <TaskList tasks={mockTasks} />
          </div>
        );
      case "delegated":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Delegated Tasks</h1>
              <p className="text-muted-foreground">Tasks you've delegated or subscribed to</p>
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
      case "templates":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Task Templates</h1>
              <p className="text-muted-foreground">Reusable task templates with custom variables</p>
            </div>
            <TaskList tasks={[]} />
          </div>
        );
      case "directory":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Directory</h1>
              <p className="text-muted-foreground">Contacts and companies directory</p>
            </div>
            <TaskList tasks={[]} />
          </div>
        );
      case "deleted":
        return (
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Deleted Tasks</h1>
              <p className="text-muted-foreground">Recover or permanently delete tasks</p>
            </div>
            <TaskList tasks={[]} />
          </div>
        );
      default:
        return <DashboardOverview onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex dark">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
