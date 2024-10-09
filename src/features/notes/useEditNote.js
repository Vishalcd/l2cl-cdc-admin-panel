import toast from "react-hot-toast";
import { updateNote } from "../../services/apiNotes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditNote() {
  const queryClient = useQueryClient();

  const { mutate: editNote, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => updateNote(id, data),
    onSuccess: () => {
      toast.success("Note successfully edited");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editNote, isEditing };
}
