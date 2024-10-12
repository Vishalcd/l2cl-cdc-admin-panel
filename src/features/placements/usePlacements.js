import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPlacements } from "../../services/apiPlacements";
import { useSearchParams } from "react-router-dom";

export default function usePlacements() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // filtering
  const filterValue = searchParams.get("gender");
  const filter = !filterValue || filterValue === "all" ? null : `gender=${filterValue}`;

  // sorting
  const sort = searchParams.get("sort") || "name";

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isPending: isLoading } = useQuery({
    queryFn: () => getPlacements(page, sort, filter),
    queryKey: ["placements", page, filter, sort],
  });

  // pre-fetching
  queryClient.prefetchQuery({
    queryKey: ["placements", page + 1, filter, sort],
    queryFn: () => getPlacements(page + 1, sort, filter),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["placements", page - 1, filter, sort],
      queryFn: () => getPlacements(page - 1, sort, filter),
    });
  }

  return { data, isLoading };
}
