import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createFaculty as createFacultyApi } from "../../services/apiFaculty";

export default function useCreateFaculty() {
  const queryClient = useQueryClient();

  const { mutate: createFaculty, isPending: isCreating } = useMutation({
    mutationFn: createFacultyApi,

    onSuccess: () => {
      toast.success("New Faculty successfully created");
      queryClient.invalidateQueries({ queryKey: ["facultys"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createFaculty, isCreating };
}
