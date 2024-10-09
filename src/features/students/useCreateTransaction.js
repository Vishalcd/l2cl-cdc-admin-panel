import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createTranscations as createTranscationsApi } from "../../services/apiStudents";
import { useParams } from "react-router-dom";

export default function useCreateTransaction() {
  const { studentId } = useParams();

  const queryClient = useQueryClient();

  const { mutate: createTranscations, isPending: isCreating } = useMutation({
    mutationFn: ({ id, transactionData }) => createTranscationsApi(id, transactionData),
    onSuccess: () => {
      toast.success("Fee Deposited successfully!");
      queryClient.invalidateQueries({ queryKey: ["transactions", studentId] });
      queryClient.invalidateQueries({ queryKey: ["student", studentId] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createTranscations, isCreating };
}
