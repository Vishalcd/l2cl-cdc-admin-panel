import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";

export default function useCourse() {
  const { data: courses, isPending: isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  return { courses, isLoading };
}
