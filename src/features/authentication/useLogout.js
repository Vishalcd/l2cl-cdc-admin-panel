import { logout as logoutApi } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      // clear localstorage
      localStorage.clear();

      // Set to cache
      queryClient.removeQueries();

      // navigate to login
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
