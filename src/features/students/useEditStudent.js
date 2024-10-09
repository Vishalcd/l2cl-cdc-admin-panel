import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudent } from "../../services/apiStudents";

export default function useEditStudent() {
  const queryClient = useQueryClient();

  const { mutate: editStudent, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => updateStudent(id, data),
    onSuccess: () => {
      toast.success("Student successfully edited.");
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editStudent, isEditing };
}
