import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePlacement as updatePlacementApi } from "../../services/apiPlacements";

export default function useEditPlacement() {
  const queryClient = useQueryClient();

  const { mutate: editPlacement, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => updatePlacementApi(id, data),

    onSuccess: () => {
      toast.success("Placement successfully edited");
      queryClient.invalidateQueries({ queryKey: ["placements"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editPlacement, isEditing };
}
