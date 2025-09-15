import { useFaqs } from "@/services/faq";
import { useQuery } from "@tanstack/react-query";

export function useGetFaqList() {
  const { handleListFaqs } = useFaqs();

  return useQuery({
    queryFn: handleListFaqs,
    queryKey: ["faqList"],
  });
}
