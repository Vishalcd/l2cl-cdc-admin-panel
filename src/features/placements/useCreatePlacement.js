import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createPlacement as createPlacementApi } from "../../services/apiPlacements";

export default function useCreatePlacement() {
  const queryClient = useQueryClient();

  const { mutate: createPlacement, isPending: isCreating } = useMutation({
    mutationFn: createPlacementApi,

    onSuccess: () => {
      toast.success("New Placement successfully created");
      queryClient.invalidateQueries({ queryKey: ["placements"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createPlacement, isCreating };
}
