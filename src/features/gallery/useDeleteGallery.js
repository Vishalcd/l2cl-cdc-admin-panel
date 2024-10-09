import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteGallery as deleteGalleryApi } from "../../services/apiGallery";

export default function useDeleteGallery() {
  const queryClient = useQueryClient();

  const { mutate: deleteGallery, isPending: isDeleting } = useMutation({
    mutationFn: deleteGalleryApi,
    mutationKey: ["gallerys"],
    onSuccess: () => {
      toast.success("Image successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["gallerys"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteGallery, isDeleting };
}
