import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";
import { useSearchParams } from "react-router-dom";

export default function useEmployees() {
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
    queryKey: ["employees", filter, sort, page],
    queryFn: () => getEmployees({ filter, sort, page }),
  });

  // pre-fetching
  queryClient.prefetchQuery({
    queryKey: ["employees", filter, sort, page + 1],
    queryFn: () => getEmployees({ filter, sort, page: page + 1 }),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["employees", filter, sort, page - 1],
      queryFn: () => getEmployees({ filter, sort, page: page - 1 }),
    });
  }

  return { data, isLoading };
}
