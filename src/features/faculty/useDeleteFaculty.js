import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteFaculty as deleteFacultyApi } from "../../services/apiFaculty";

export default function useDeleteFaculty() {
  const queryClient = useQueryClient();

  const { mutate: deleteFaculty, isPending: isDeleting } = useMutation({
    mutationFn: deleteFacultyApi,
    onSuccess: () => {
      toast.success("Faculty successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["facultys"] });
    },
    onError: (err) => toast.error(err),
  });

  return { deleteFaculty, isDeleting };
}
