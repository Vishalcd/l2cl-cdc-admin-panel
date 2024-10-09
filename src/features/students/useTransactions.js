import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getStudentTranscations } from "../../services/apiStudents";

export default function useStudentTransactions() {
  const { studentId } = useParams();

  const { data: studentTranscations, isPending: isLoading } = useQuery({
    queryFn: () => getStudentTranscations(studentId),
    queryKey: ["transactions", studentId],
    retry: false,
  });
  return { studentTranscations, isLoading };
}
