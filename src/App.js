import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Issue } from "./pages/Issue";
import { Code } from "./pages/Code";
import { Pulls } from "./pages/Pulls";
import { Action } from "./pages/Action";
import { Projects } from "./pages/Projects";
import { Security } from "./pages/Security";
import { Insights } from "./pages/Insights";
import { Settings } from "./pages/Settings";
import { CreateIssue } from "./pages/CreateIssue";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Issue />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/code" element={<Code />} />
          <Route path="/pulls" element={<Pulls />} />
          <Route path="/action" element={<Action />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/security" element={<Security />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/new" element={<CreateIssue />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
