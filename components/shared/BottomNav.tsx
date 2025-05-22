"use client";

import Link from "next/link";
import { Home, Users, Store, Calendar, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  return (
    <Link 
      href={href} 
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
        isActive 
          ? "!text-primary" 
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      <Icon size={20} />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/community", icon: Users, label: "Community" },
    { href: "/suppliers", icon: Store, label: "Suppliers" },
    { href: "/events", icon: Calendar, label: "Events" },
    { href: "/notifications", icon: Bell, label: "Alerts" },
  ];

  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t py-2 px-4 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={isActive(item.href)}
          />
        ))}
      </div>
    </nav>
  );
} 