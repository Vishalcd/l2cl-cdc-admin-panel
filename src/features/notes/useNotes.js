import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";

export default function useNotes() {
  const { data: notes, isPending: isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
  return { notes, isLoading };
}
