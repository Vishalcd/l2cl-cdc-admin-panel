import { useQuery } from "@tanstack/react-query";
import { getGallery } from "../../services/apiGallery";

export default function useGallerys() {
  const { data: gallerys, isPending: isLoading } = useQuery({
    queryKey: ["gallerys"],
    queryFn: getGallery,
  });
  return { gallerys, isLoading };
}
