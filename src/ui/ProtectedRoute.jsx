import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Get Current User
  const { user } = JSON.parse(localStorage.getItem("user")) || {};

  // Check if it is authenticated if not redirect to login
  useEffect(
    function () {
      if (!user || user?.role !== "admin") {
        navigate("/login", { replace: true });
      }
    },
    [navigate, user]
  );

  //if there is authenticated user render the app
  if (user?.role === "admin") return children;
}

export default ProtectedRoute;
