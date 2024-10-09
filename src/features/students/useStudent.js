import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../../services/apiStudents";
import { useParams } from "react-router-dom";

export default function useStudentDetails() {
  const { studentId } = useParams();

  const { data: studentDetails, isPending: isLoading } = useQuery({
    queryFn: () => getStudent(studentId),
    queryKey: ["student", studentId],
    retry: false,
  });
  return { studentDetails, isLoading };
}
