"use client";

import { FaqResponse } from "@/types/faq.types";
import { Fragment } from "react";
import { useDisclosure } from "@/hooks";
import { CreateEditFaqModal } from "@/components/admin/support/faq/create-edit-faq-modal";
import { MinusIcon, PlusIcon } from "@/assets/icons";
import { ConfirmationModal } from "@/components/ui";
import { useDeleteFaq } from "@/mutations/faq";

interface FaqListItemProps {
  faq: FaqResponse;
  isExpanded?: boolean;
}

export const FaqListItem = ({ faq, isExpanded = false }: FaqListItemProps) => {
  const [editFaq, { open, close }] = useDisclosure(false);
  const [deleteFaq, { open: openDeleteFaq, close: closeDeleteFaq }] =
    useDisclosure(false);
  const [expanded, { toggle }] = useDisclosure(isExpanded);

  const { question, answer, _id } = faq;

  const { isPending, mutateAsync: submit } = useDeleteFaq(_id);

  async function handleDeleteFaq() {
    await submit().then(() => close());
  }

  return (
    <Fragment>
      <CreateEditFaqModal open={editFaq} closeAction={close} faq={faq} />

      <ConfirmationModal
        open={deleteFaq}
        close={closeDeleteFaq}
        action={handleDeleteFaq}
        actionText="Delete"
        title="Delete FAQ?"
        description={`Are you sure you want to delete "${question}" Faq?`}
        actionPending={isPending}
      />

      <div className="flex w-full items-start gap-6 p-6">
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-lg/7 font-semibold text-gray-900 capitalize">
            {question}
          </p>

          {expanded && (
            <Fragment>
              <p className="text-gray-600">{answer}</p>

              <div className="flex gap-4">
                <button
                  className="text-foundation-red-normal cursor-pointer text-sm font-medium underline"
                  onClick={openDeleteFaq}
                >
                  Delete
                </button>

                <button
                  className="text-foundation-red-normal cursor-pointer text-sm font-medium underline"
                  onClick={open}
                >
                  Update FAQ
                </button>
              </div>
            </Fragment>
          )}
        </div>
        {expanded ? (
          <MinusIcon
            className="text-foundation-red-normal size-6 flex-none"
            onClick={toggle}
          />
        ) : (
          <PlusIcon
            className="text-foundation-red-normal size-6 flex-none"
            onClick={toggle}
          />
        )}
      </div>
    </Fragment>
  );
};
