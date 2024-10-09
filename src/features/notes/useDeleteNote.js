import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote as deleteNoteApi } from "../../services/apiNotes";
import toast from "react-hot-toast";

export default function useDeleteNote() {
  const queryClient = useQueryClient();

  const { mutate: deleteNote, isPending: isDeleting } = useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: () => {
      toast.success("Note successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteNote, isDeleting };
}
