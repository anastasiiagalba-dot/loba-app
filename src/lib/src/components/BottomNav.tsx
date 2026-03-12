"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, Smile, BookOpen, User } from "lucide-react";

const navItems = [
      { href: "/dashboard", label: "Home", icon: Home },
        { href: "/habits", label: "Habits", icon: Heart },
          { href: "/mood", label: "Mood", icon: Smile },
            { href: "/journal", label: "Journal", icon: BookOpen },
              { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
      const pathname = usePathname();
        return (
                <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-1 flex justify-around z-50">
                          {navItems.map((item) => (
                                    <Link key={item.href} href={item.href} className={`flex flex-col items-center py-1 px-3 ${pathname === item.href ? "text-purple-700" : "text-gray-400"}`}>
                                                  <item.icon size={22} />
                                                            <span className="text-xs mt-0.5">{item.label}</span>
                                                                    </Link>
                          ))}
                              </nav>
        );
    }