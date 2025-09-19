import { FaqResponse } from "@/types/faq.types";
import { FaqListItem } from "@/components/admin/support/faq/faq-list-item";

interface FaqListProps {
  faqs: FaqResponse[];
}

export const FaqList = ({ faqs }: FaqListProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {faqs.map((faq, index) => (
        <FaqListItem faq={faq} key={faq._id} isExpanded={index === 0} />
      ))}
    </div>
  );
};
