import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deactivateStudent as deactivateStudentApi } from "../../services/apiStudents";

export default function useDeactivateStudent() {
  const queryClient = useQueryClient();

  const { mutate: deactivateStudent, isPending: isDeactivating } = useMutation({
    mutationFn: deactivateStudentApi,
    onSuccess: () => {
      toast.success("Student successfully Deactivate!");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(err),
  });

  return { deactivateStudent, isDeactivating };
}
