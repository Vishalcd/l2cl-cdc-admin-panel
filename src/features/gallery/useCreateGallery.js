import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createGallery as createGalleryApi } from "../../services/apiGallery";

export default function useCreateGallery() {
  const queryClient = useQueryClient();

  const { mutate: createGallery, isPending: isCreating } = useMutation({
    mutationFn: createGalleryApi,

    onSuccess: () => {
      toast.success("New Image successfully Uploaded");
      queryClient.invalidateQueries({ queryKey: ["gallerys"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createGallery, isCreating };
}
