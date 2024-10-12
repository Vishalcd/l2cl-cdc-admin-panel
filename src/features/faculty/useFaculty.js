import { useQuery } from "@tanstack/react-query";
import { getFaculty } from "../../services/apiFaculty";

export default function useFaculty() {
  const { data: facultys, isPending: isLoading } = useQuery({
    queryFn: getFaculty,
    queryKey: ["facultys"],
  });

  return { facultys, isLoading };
}
