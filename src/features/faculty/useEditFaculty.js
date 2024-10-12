import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateFaculty as editFacultyApi } from "../../services/apiFaculty";

export default function useEditFaculty() {
  const queryClient = useQueryClient();

  const { mutate: editFaculty, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => editFacultyApi(id, data),

    onSuccess: () => {
      toast.success("Faculty successfully edited");
      queryClient.invalidateQueries({ queryKey: ["facultys"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editFaculty, isEditing };
}
