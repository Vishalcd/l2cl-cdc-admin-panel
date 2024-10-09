import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import { useSearchParams } from "react-router-dom";

export default function useStudents() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // filtering
  const filterValue = searchParams.get("active");
  const filter = !filterValue || filterValue === "all" ? null : `active=${filterValue}`;

  // sorting
  const sort = searchParams.get("sort") || "name";

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["students", filter, sort, page],
    queryFn: () => getStudents({ filter, sort, page }),
  });

  // pre-fetching
  queryClient.prefetchQuery({
    queryKey: ["students", filter, sort, page + 1],
    queryFn: () => getStudents({ filter, sort, page: page + 1 }),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["students", filter, sort, page - 1],
      queryFn: () => getStudents({ filter, sort, page: page - 1 }),
    });
  }

  return { data, isLoading };
}
