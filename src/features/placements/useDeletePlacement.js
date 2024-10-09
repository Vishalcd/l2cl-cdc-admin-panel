import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletePlacement as deletePlacementApi } from "../../services/apiPlacements";

export default function useDeletePlacement() {
  const queryClient = useQueryClient();

  const { mutate: deletePlacement, isPending: isDeleting } = useMutation({
    mutationFn: deletePlacementApi,
    onSuccess: () => {
      toast.success("Placement successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["placements"] });
    },
    onError: (err) => toast.error(err),
  });

  return { deletePlacement, isDeleting };
}
