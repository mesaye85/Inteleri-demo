"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import appsData from "@/data/apps.json";
import workspacesData from "@/data/workspaces.json";

type WorkspaceId = string;
type AppItem = (typeof appsData)[number] & { workspace?: string };

export default function AppsPageClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workspaceFilter, setWorkspaceFilter] = useState<WorkspaceId | "">("");

  const appsByWorkspace = useMemo(() => {
    const filtered = (appsData as AppItem[]).filter(
      (app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.pillars.some((p) => String(p).toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const byWs: Record<string, AppItem[]> = {};
    const order = workspacesData.map((w) => w.id);
    order.forEach((id) => { byWs[id] = []; });
    byWs[""] = []; // unmapped
    filtered.forEach((app) => {
      const ws = app.workspace || "";
      if (!byWs[ws]) byWs[ws] = [];
      byWs[ws].push(app);
    });
    return { byWs, order };
  }, [searchTerm]);

  const workspaceList = workspacesData;
  const showWorkspace = (workspaceId: string) =>
    !workspaceFilter || workspaceFilter === workspaceId;

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="type-display mb-6">
              <span className="text-text">Platform </span>
              <span className="neon-text">by Workspace</span>
            </h1>
            <p className="type-section-lead text-muted mx-auto mb-8">
              The platform is workspace-centric. Explore capabilities by workspace:
              Carrier Operations, Broker Desk, Shipper Control Tower, Risk &amp; Intelligence, and Admin &amp; Security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search apps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/15 text-text placeholder:text-muted"
                />
              </div>
              <select
                value={workspaceFilter}
                onChange={(e) => setWorkspaceFilter(e.target.value as WorkspaceId | "")}
                className="h-10 px-4 rounded-md bg-white/5 border border-white/15 text-text text-sm focus:outline-none focus:ring-2 focus:ring-neon-1"
                aria-label="Filter by workspace"
              >
                <option value="">All workspaces</option>
                {workspaceList.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {workspaceList.map((workspace, sectionIndex) => {
            const apps = appsByWorkspace.byWs[workspace.id] || [];
            if (!showWorkspace(workspace.id) || apps.length === 0) return null;

            return (
              <motion.section
                key={workspace.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.08 }}
                className="mb-14"
              >
                <h2 className="type-section-title text-text mb-2 flex items-center gap-2">
                  <span className="h-1 w-8 rounded bg-neon-1" />
                  {workspace.label}
                </h2>
                <p className="type-section-lead text-muted mb-6">{workspace.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {apps.map((app, index) => (
                    <motion.div
                      key={app.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                    >
                      <AppCard
                        slug={app.slug}
                        title={app.title}
                        summary={app.summary}
                        pillars={app.pillars}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}

          {(appsByWorkspace.byWs[""]?.length ?? 0) > 0 && showWorkspace("") && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-14"
            >
              <h2 className="type-section-title text-text mb-6">Other</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appsByWorkspace.byWs[""].map((app, index) => (
                  <motion.div
                    key={app.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <AppCard
                      slug={app.slug}
                      title={app.title}
                      summary={app.summary}
                      pillars={app.pillars}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {workspaceList.every(
            (w) => (appsByWorkspace.byWs[w.id]?.length ?? 0) === 0
          ) &&
            (appsByWorkspace.byWs[""]?.length ?? 0) === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted text-lg">No apps found matching your search.</p>
              </motion.div>
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
