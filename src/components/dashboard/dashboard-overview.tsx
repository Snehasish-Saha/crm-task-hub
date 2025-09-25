import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  FolderOpen, 
  FileText, 
  Building2, 
  Lightbulb, 
  Link
} from "lucide-react";
import { FeatureCard } from "./feature-card";

interface DashboardOverviewProps {
  onNavigate: (section: string) => void;
}

export function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const features = [
    {
      title: "TaskDashboard",
      description: "Clear view of your performance anytime",
      icon: LayoutDashboard,
      buttonText: "Go To Dashboard",
      action: () => onNavigate("dashboard-details")
    },
    {
      title: "AutomateTasks", 
      description: "Delegate one time and recurring tasks to your team",
      icon: CheckSquare,
      buttonText: "Go To Tasks",
      action: () => onNavigate("my-tasks")
    },
    {
      title: "AutomateGroupTask",
      description: "Assign and coordinate tasks within the group", 
      icon: Users,
      buttonText: "Start Trial",
      buttonVariant: "secondary" as const,
      action: () => onNavigate("delegated")
    },
    {
      title: "IdeaBoard",
      description: "Note down your ideas and organize them in lists",
      icon: Lightbulb,
      buttonText: "Go To IdeaBoard", 
      action: () => onNavigate("templates")
    },
    {
      title: "AutomateLinks",
      description: "Manage all your important company links",
      icon: Link,
      buttonText: "Go To Links",
      action: () => onNavigate("directory")
    },
    {
      title: "AutomateLeaves",
      description: "Manage your employee leaves and holidays",
      icon: FileText,
      buttonText: "Start Trial",
      buttonVariant: "secondary" as const,
      action: () => onNavigate("templates")
    },
    {
      title: "AutomateAttendance", 
      description: "Track your team's Attendance and Breaks",
      icon: Building2,
      buttonText: "Start Trial",
      buttonVariant: "secondary" as const,
      action: () => onNavigate("all-tasks")
    },
    {
      title: "AbbyAssistant",
      description: "Intelligence simplified, guidance made easy.",
      icon: FolderOpen,
      buttonText: "Go To Abby Assistant",
      action: () => onNavigate("ai-assistant")
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Team Management</h1>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            buttonText={feature.buttonText}
            buttonVariant={feature.buttonVariant}
            onClick={feature.action}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-12">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold text-card-foreground">Sales & Marketing</h2>
          </div>
        </div>
      </div>
    </div>
  );
}