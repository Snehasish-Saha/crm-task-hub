import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  buttonVariant?: "default" | "secondary";
  onClick?: () => void;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  buttonText, 
  buttonVariant = "default",
  onClick 
}: FeatureCardProps) {
  return (
    <div className="card-feature group hover:scale-[1.02] transition-transform duration-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      <Button 
        onClick={onClick}
        variant={buttonVariant}
        className="w-full btn-primary font-semibold"
        size="lg"
      >
        {buttonText}
      </Button>
    </div>
  );
}