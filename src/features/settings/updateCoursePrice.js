import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCourse as updateCourseApi } from "../../services/apiCourses";

export default function useUpdateCoursePrice() {
  const queryClient = useQueryClient();

  const { mutate: updateCourse, isPending: isUpdateing } = useMutation({
    mutationFn: ({ id, data }) => updateCourseApi(id, data),

    onSuccess: () => {
      toast.success("Course successfully updated");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateCourse, isUpdateing };
}
