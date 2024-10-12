import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCertificates } from "../../services/apiCertificates";
import { useSearchParams } from "react-router-dom";

export default function useCertificates() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // filtering
  const filterValue = searchParams.get("certificateType");
  const filter = !filterValue || filterValue === "all" ? null : `certificateType=${filterValue}`;

  // sorting
  const sort = searchParams.get("sort") || "experience";

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: certificates, isPending: isLoading } = useQuery({
    queryFn: () => getCertificates({ filter, sort, page }),
    queryKey: ["certificates", filter, sort, page],
    retry: false,
  });

  // pre-fetching
  queryClient.prefetchQuery({
    queryKey: ["certificates", filter, sort, page + 1],
    queryFn: () => getCertificates({ filter, sort, page: page + 1 }),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["certificates", filter, sort, page - 1],
      queryFn: () => getCertificates({ filter, sort, page: page - 1 }),
    });
  }
  return { certificates, isLoading };
}
