import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import { Toaster } from "react-hot-toast";
// import DashboardPage from "./pages/DashboardPage";
// import ProblemPage from "./pages/ProblemPage";
// import ProblemsPage from "./pages/ProblemsPage";
// import SessionPage from "./pages/SessionPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/problem" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />

    </>
  );
}

export default App;