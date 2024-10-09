import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import "./styles/GlobalStyle.css";

import ProtectedRoute from "./ui/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import Student from "./pages/Student";
import Login from "./pages/Login";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="students" element={<Students />} />
                <Route path="students/:studentId" element={<Student />} />
                <Route path="placements" element={<Placements />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="notes" element={<Notes />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
