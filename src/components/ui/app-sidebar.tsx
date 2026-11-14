"use client";
import {
  BarChart3,
  Bookmark,
  Briefcase,
  Building,
  Building2,
  FileText,
  LayoutDashboard,
  PlusCircle,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "@/lib/auth-client";

const NAV_ITEMS_BY_ROLE = {
  seeker: [
    { title: "Dashboard", icon: LayoutDashboard, href: "/seeker/dashboard" },
    { title: "Find Jobs", icon: Search, href: "/seeker/jobs" },
    { title: "My Applications", icon: FileText, href: "/seeker/applications" },
    { title: "Saved Jobs", icon: Bookmark, href: "/seeker/saved" },
    { title: "Profile", icon: User, href: "/seeker/profile" },
  ],
  recruiter: [
    { title: "Dashboard", icon: LayoutDashboard, href: "/recruiter/dashboard" },
    { title: "Post a Job", icon: PlusCircle, href: "/recruiter/jobs/new" },
    { title: "Manage Jobs", icon: Briefcase, href: "/recruiter/jobs" },
    { title: "Candidates", icon: Users, href: "/recruiter/candidates" },
    { title: "Company Profile", icon: Building2, href: "/recruiter/company" },
  ],
  admin: [
    { title: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { title: "Manage Users", icon: Users, href: "/admin/users" },
    { title: "Manage Companies", icon: Building, href: "/admin/companies" },
    { title: "Analytics", icon: BarChart3, href: "/admin/analytics" },
    { title: "Settings", icon: Settings, href: "/admin/settings" },
  ],
};

export function AppSidebar() {
  const { data: session } = useSession();
  const role =
    ((session?.user as { role?: string } | undefined)
      ?.role as keyof typeof NAV_ITEMS_BY_ROLE) ?? "seeker";
  const items = NAV_ITEMS_BY_ROLE[role] ?? NAV_ITEMS_BY_ROLE.seeker;
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton render={<Link href={item.href} />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
