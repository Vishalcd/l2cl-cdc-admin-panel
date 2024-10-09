import { useQuery } from "@tanstack/react-query";
import { getPlacements } from "../../services/apiPlacements";

export default function usePlacements() {
  const { data: placements, isPending: isLoading } = useQuery({
    queryFn: getPlacements,
    queryKey: ["placements"],
  });

  return { placements, isLoading };
}
