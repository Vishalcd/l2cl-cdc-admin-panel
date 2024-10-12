import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCertificate as createCertificateApi } from "../../services/apiCertificates";

export default function useCreateCertificate() {
  const queryClient = useQueryClient();

  const { mutate: createCertificate, isPending: isCreating } = useMutation({
    mutationFn: createCertificateApi,

    onSuccess: () => {
      toast.success("New Certificate successfully created");
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCertificate, isCreating };
}
