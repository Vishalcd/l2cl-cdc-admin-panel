import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      // set user data and navigate to application if credentials are correct
      if (data.user.role === "admin") {
        // Set user to localstorage
        const user = JSON.stringify(data);
        localStorage.setItem("user", user);

        // Set to cache
        queryClient.setQueriesData(["user"], data.user);

        navigate("/dashboard", { replace: true });
      } else {
        toast.error("Incorrect email or password.");
        navigate("/login", { replace: true });
      }
    },

    onError: (err) => {
      console.error(err);
      toast.error("Incorrect email or password.");
    },
  });

  return { login, isLoging };
}
