import toast from "react-hot-toast";
import { updateCertificate } from "../../services/apiCertificates";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditCertificate() {
  const queryClient = useQueryClient();

  const { mutate: editCertificate, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => updateCertificate(id, data),
    onSuccess: () => {
      toast.success("Certificate successfully edited");
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editCertificate, isEditing };
}
