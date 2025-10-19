import { Button } from "@/components/ui/button";
import { Mail, Instagram, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickContactButtonsProps {
  variant?: "fixed" | "footer" | "mobile";
  className?: string;
}

const QuickContactButtons = ({ variant = "fixed", className }: QuickContactButtonsProps) => {
  const contacts = [
    {
      name: "E-Mail",
      icon: Mail,
      href: "mailto:info@globalbridgeagency.de",
      color: "text-accent",
      hoverColor: "hover:bg-accent hover:text-accent-foreground"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      href: "https://instagram.com/globalbridgeagency",
      color: "text-pink-500",
      hoverColor: "hover:bg-pink-500 hover:text-white"
    },
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/globalbridgeagency", 
      color: "text-blue-500",
      hoverColor: "hover:bg-blue-500 hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/4915752595235",
      color: "text-green-500", 
      hoverColor: "hover:bg-green-500 hover:text-white"
    }
  ];

  if (variant === "fixed") {
    return (
      <div className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3",
        className
      )}>
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <Button
              key={contact.name}
              size="sm"
              variant="outline"
              asChild
              className={cn(
                "w-12 h-12 p-0 rounded-full bg-background/95 backdrop-blur-sm border-border shadow-medium transition-all duration-300",
                contact.color,
                contact.hoverColor
              )}
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          );
        })}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("flex justify-center gap-4", className)}>
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <Button
              key={contact.name}
              size="sm"
              variant="outline"
              asChild
              className={cn(
                "w-10 h-10 p-0 rounded-full bg-primary text-primary-foreground border-primary-foreground/20 transition-all duration-300",
                "hover:bg-accent hover:text-accent-foreground hover:border-accent"
              )}
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex gap-2", className)}>
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <Button
            key={contact.name}
            size="sm"
            variant="ghost"
            asChild
            className={cn(
              "w-8 h-8 p-0 text-muted-foreground hover:text-primary transition-colors",
              contact.hoverColor
            )}
          >
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.name}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default QuickContactButtons;