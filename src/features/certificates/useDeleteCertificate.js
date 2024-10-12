import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCertificate as deleteCertificateApi } from "../../services/apiCertificates";
import toast from "react-hot-toast";

export default function useDeleteCertificate() {
  const queryClient = useQueryClient();

  const { mutate: deleteCertificate, isPending: isDeleting } = useMutation({
    mutationFn: deleteCertificateApi,
    onSuccess: () => {
      toast.success("Certificate successfully Deleted!");
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCertificate, isDeleting };
}
