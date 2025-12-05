"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, BarChart3, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Keep Badge import in case needed for future, but not used currently

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Progress", href: "/progress", icon: BarChart3 },
  { name: "Topics", href: "/topics", icon: BookOpen },
  { name: "Completed", href: "/completed", icon: CheckSquare },
];

export default function Header() {
  const pathname = usePathname();

  // Note: The Badge displaying completed topics is omitted here
  // as its state (completedTopics, totalTopics) is currently managed in app/page.tsx.
  // To include it here, a global state management solution would be needed.

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-black text-white p-2 rounded-lg">
            <span className="text-xl font-bold">HR</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">HackerRank Prep</h1>
            <p className="text-xs text-muted-foreground">Full-Stack Mastery By: Muhammad Ishfaq(ishfaqaref@outlook.com)</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center space-x-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isActive && (
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Removed dynamic progress badge here to avoid global state management for now */}
        {/* If global progress is desired, a state management solution (Context API, Zustand, etc.) would be needed */}
        {/* <Badge variant="secondary" className="text-sm">
          {completedTopics}/{totalTopics} Completed
        </Badge> */}
      </div>
    </header>
  );
}
