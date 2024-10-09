import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote as createNoteApi } from "../../services/apiNotes";
import toast from "react-hot-toast";

export default function useCreateNote() {
  const queryClient = useQueryClient();

  const { mutate: createNote, isPending: isCreating } = useMutation({
    mutationFn: createNoteApi,
    onSuccess: () => {
      toast.success("New note successfully created");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createNote, isCreating };
}
