import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import ProjectForm from "./components/ProjectForm";
import { generateId } from "./utils/helpers";
import initialProjects from "./data/initialProjects";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState("login"); // 👈 start at login
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 👈 auth state

  useEffect(() => {
    const stored = localStorage.getItem("crowdfunding-projects");
    const parsed = stored ? JSON.parse(stored) : null;
    setProjects(Array.isArray(parsed) && parsed.length > 0 ? parsed : initialProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem("crowdfunding-projects", JSON.stringify(projects));
  }, [projects]);

  const handleCreateProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: generateId(),
      pledged: 0,
      backers: 0,
      daysLeft: 45,
      image: `https://placehold.co/600x400/94a3b8/ffffff?text=${encodeURIComponent(
        projectData.title
      )}`,
    };
    setProjects([newProject, ...projects]);
    setPage("home");
  };

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
    setPage("detail");
  };

  const handlePledge = (projectId, amount) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? { ...p, pledged: p.pledged + amount, backers: p.backers + 1 }
          : p
      )
    );
  };

  const navigate = (targetPage) => {
    setSelectedProjectId(null);
    setPage(targetPage);
  };

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId),
    [projects, selectedProjectId]
  );

  // --- Render ---
  if (!isLoggedIn && page !== "login") {
    // prevent seeing content if not logged in
    return <LoginPage onLogin={() => { setIsLoggedIn(true); setPage("home"); }} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {isLoggedIn && (
        <Header
          onNavigate={navigate}
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            setIsLoggedIn(false);
            setPage("login");
          }}
        />
      )}

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {page === "login" && (
          <LoginPage
            onLogin={() => {
              setIsLoggedIn(true);
              setPage("home");
            }}
          />
        )}
        {page === "create" && (
          <ProjectForm
            onSubmit={handleCreateProject}
            onCancel={() => navigate("home")}
          />
        )}
        {page === "detail" && selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onBack={() => navigate("home")}
            onPledge={handlePledge}
          />
        )}
        {page === "home" && (
          <ProjectList
            projects={projects}
            onNavigate={navigate}
            onSelectProject={handleSelectProject}
          />
        )}
      </main>
    </div>
  );
}
