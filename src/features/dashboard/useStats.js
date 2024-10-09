import { useQuery } from "@tanstack/react-query";
import { getStats } from "../../services/apiStats";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export default function useStats() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 30 : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stats, isPending: isLoading } = useQuery({
    queryFn: () => getStats(queryDate),
    queryKey: ["stats", `last-${numDays}`],
  });

  return { stats, isLoading, numDays };
}
